import { Alert, Skeleton } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const MyLibrary = ()=>{
    const navigate = useNavigate()
    const api = useSelector(state=>state.ApiReducer.serverApi)
    const [libTray, setLibTray] = useState([])
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    useEffect(()=>{
        axios.get(`${api}library/myLibrary`, {
            headers: {
                'authorization': `Bearer ${JSON.parse(sessionStorage.getItem('token'))}`,
                'content-type': 'application/json'
            }
        }).then(res=>{
            setLibTray(res.data.library)
            setIsLoading(false)
        }).catch(err=>{
            setError('Internal Server Error. Refresh this page')
            setIsLoading(false)
        })
    }, [])
    const clickPoem = (poem)=>{
        sessionStorage.setItem('book', JSON.stringify(poem))
        navigate('/home/picked')
    }
    return (
        <div className="container">
            <p className="fs-4 fw-normal">
                My Library
            </p>
            <p className="fs-6 fw-light">
                Works of other users you saved are here
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
                libTray.length !== 0
                ?
                <div className="container row w-100">
                    {
                        libTray.map((val, i)=>(
                            <div key={i} className="col-md-3 cursor-pointer" onClick={()=>clickPoem(val)}>
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
                libTray.length == 0 && error == ''
                ?
                <Alert severity="info">
                    You have not saved or add to your library in recent times!
                </Alert>
                :
                ''
            }            
            {
                error !== ''
                &&
                <Alert severity="error">
                    {error}
                </Alert>
            }
        </div>
    )
}

export default MyLibrary