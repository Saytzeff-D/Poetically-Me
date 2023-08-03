import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Alert, Skeleton } from "@mui/material";

const MyShop = ()=>{
    const api = useSelector(state=>state.ApiReducer.serverApi)
    const token = JSON.parse(sessionStorage.getItem('token'))
    const [shop, setShop] = useState([])
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    useEffect(()=>{
        axios.get(
            `${api}poem/my-shop`,
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            }
        ).then(res=>{
            setError('')
            setIsLoading(false)
            setShop(res.data.shop)
            console.log(res.data)
        }).catch(err=>{
            setIsLoading(false)
            console.log(err)
            setError('Internal Server Error. Refresh this page')
        })
    }, [])
    return(
        <div className="container">
            <p className="fs-4 fw-normal">
                My Shop
            </p>
            <p className="fs-6 fw-light">
                Poems and customized items you are selling are here
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
                    shop.length !== 0
                    ?
                    <div className="container row w-100">
                        {
                            shop.map((val, i)=>(
                                <div key={i} className="col-md-3 cursor-pointer">
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
                    shop.length == 0 && error == ''
                    ?
                    <Alert severity="info">
                        You have no available poems in your shop!
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

export default MyShop