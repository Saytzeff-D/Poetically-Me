import React, { Fragment, useEffect, useState } from "react";
import Book from '../../assets/book.png'
import Book1 from '../../assets/Book1.png'
import Book2 from '../../assets/Book2.png'
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Alert, Dialog, DialogActions, DialogContent, DialogTitle, Skeleton } from "@mui/material";

const MyPoems = ()=>{
    const dispatch = useDispatch()
    const [error, setError] = useState('')
    const [poems, setPoems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()
    const api = useSelector(state=>state.ApiReducer.serverApi)
    const token = JSON.parse(sessionStorage.getItem('token'))
    const [ind, setInd] = useState(0)
    const [isDisabled, setIsDisabled] = useState(false)
    const [dialogOpen, setDialogOpen] = useState(false)
    const [visibility, setVisibility] = useState('')
    useEffect(()=>{
        fetchPoems()
    }, [])
    const fetchPoems = ()=>{
        axios.get(
            `${api}poem/my-poems`,
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            }
        ).then(res=>{
            setError('')
            setIsLoading(false)
            setPoems(res.data.poems)
            console.log(res.data)
        }).catch(err=>{
            setIsLoading(false)
            console.log(err)
            setError('Internal Server Error. Refresh this page')
        })
    }
    const clickPoem = (poem, i)=>{
        if (poem.visibility == null) {
            dispatch({type: 'summary', payload: poem})
            sessionStorage.setItem('poem', JSON.stringify(poem))
            navigate('/poem-details')
        } else {
            poem.visibility == 'Only Me' ? setVisibility('Everybody') : setVisibility('Only Me')
            setInd(i)
            setDialogOpen(true)
        }
    }
    const onNoClick = ()=>{
        setDialogOpen(false)
    }
    const onYesClick= ()=>{
        setIsDisabled(true)
        let payload = {poem_id: poems[ind].poem_id, visibility}
        axios.patch(`${api}shop/changeVisibility`, payload).then(res=>{       
            fetchPoems() 
            setIsDisabled(false)
            setDialogOpen(false)
        }).catch(err=>{
            console.log(err)
            setIsDisabled(false)
        })
    }
    return (
        <Fragment>
            <div className="container">                
                <p className="fs-4 fw-normal">
                    My Poems
                </p>
                <p className="fs-6 fw-light">
                    Click on the poem you wish to perform further transaction with.
                </p>
                <p className="fs-5 fw-normal pt-4">
                    Recent Activity
                </p>
                <hr />
                {
                    isLoading
                    ?
                    <div className="container row w-100">
                        <div className="col-md-3 my-2">
                            <Skeleton variant="rectangular" height={200} />
                        </div>
                        <div className="col-md-3 my-2">
                            <Skeleton variant="rectangular" height={200} />
                        </div>
                        <div className="col-md-3 my-2">
                            <Skeleton variant="rectangular" height={200} />
                        </div>
                        <div className="col-md-3 my-2">
                            <Skeleton variant="rectangular" height={200} />
                        </div>
                    </div>
                    :
                    poems.length !== 0
                    ?
                    <div className="container row w-100">
                        {
                            poems.map((val, i)=>(
                                <div key={i} className="col-md-3 cursor-pointer" onClick={()=>clickPoem(val, i)}>
                                    <div className="card border-0">
                                        <img src={val.coverImage} className="card-img-top img-fluid poem-book" />
                                        <div className="card-body">
                                            <p className="card-title fs-5 fw-less-bold">
                                                {val.title}
                                            </p>
                                        </div>
                                    </div>
                                </div>  
                            ))
                        }                  
                    </div>
                    :
                    poems.length == 0 && error == ''
                    ?
                    <Alert severity="info">
                        You haven't uploaded any poems
                    </Alert>
                    :
                    ''
                }
            </div>
            {
                error !== ''
                &&
                <Alert severity="error">
                    {error}
                </Alert>
            }
            <Dialog open={dialogOpen} className="" maxWidth={'xs'} fullWidth={true}>
                <DialogContent className="fs-5 fw-light bg-next">
                <DialogTitle className="fs-4 fw-bold">Visibility Status</DialogTitle>
                    {
                        poems[ind] !== undefined && poems[ind].visibility == 'Only Me'
                        ?
                        <p className="my-0 ps-4 fs-6">Only you can see this poem. Will you like to publicize it for other users to buy?</p>
                        :
                        <p className="my-0 ps-4 fs-6">This poem has already been placed in your shop for sale. Will you like to privatise it?</p>
                    }
                <DialogActions>
                    <button onClick={onYesClick} className="btn py-2 px-3 btn-dark" disabled={isDisabled}>
                        {
                            isDisabled
                            ?
                            <>Please wait...</>
                            :
                            <>Yes</>
                        }
                    </button>
                    <button onClick={onNoClick} className="btn py-2 px-3 btn-light" disabled={isDisabled}>No</button>
                </DialogActions>
                </DialogContent>
            </Dialog>
        </Fragment>
    )
}

export default MyPoems