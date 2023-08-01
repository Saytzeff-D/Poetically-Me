import React, { Fragment, useEffect, useState } from "react";
import Book from '../../assets/book.png'
import Book1 from '../../assets/Book1.png'
import Book2 from '../../assets/Book2.png'
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import axios from "axios";
import { Alert, Skeleton } from "@mui/material";

const MyPoems = ()=>{
    const [error, setError] = useState('')
    const [poems, setPoems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const navigate = useNavigate()
    const api = useSelector(state=>state.ApiReducer.serverApi)
    const token = JSON.parse(sessionStorage.getItem('token'))
    useEffect(()=>{
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
            console.log(err)
            setError('Internal Server Error. Refresh this page')
        })
    }, [])
    return (
        <Fragment>
            <div className="container">                
                <p className="fs-4 fw-normal">
                    My Poems
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
                                <div className="col-md-3 cursor-pointer" onClick={()=>navigate('/summary')}>
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
                    <Alert severity="warning">
                        You haven't uploaded any poems
                    </Alert>
                }
            </div>
            {
                error !== ''
                &&
                <Alert severity="error">
                    {error}
                </Alert>
            }
        </Fragment>
    )
}

export default MyPoems