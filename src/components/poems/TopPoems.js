import React, { Fragment, useEffect, useState } from "react";
import Explore from '../../assets/explore_poem.png'
import { useNavigate } from "react-router";
import axios from "axios";
import { useSelector } from "react-redux";
import { Skeleton, Alert } from "@mui/material";
import getSymbolFromCurrency from "currency-symbol-map";

const TopPoems = ()=>{
    const api = useSelector(state=>state.ApiReducer.serverApi)
    const token = JSON.parse(sessionStorage.getItem('token'))
    const [isLoading, setIsLoading] = useState(true)
    const [poems, setPoems] = useState([])
    const [error, setError] = useState('')
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get(
            `${api}poem/top-poems`,            
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
    }, [])
    const showBook = (val)=>{
        sessionStorage.setItem('book', JSON.stringify(val))
        navigate('/home/picked')
    }
    return (
        <Fragment>
            <div className="my-5">
                <div className="container row w-100 pb-5">
                    <div className="col-md-5">
                        <p className="fs-4 fw-less-bold pt-md-5 pt-3">
                            Explore Newest Poems
                        </p>
                        <p className="fs-5 fw-light">
                            Newest poems available for you. Get ready to get the best
                        </p>
                        <button className="btn btn-next py-2 px-5">
                            Explore Now
                        </button>
                    </div>
                    <div className="col-md-7 d-md-block d-none">
                        <img src={Explore} className="img-fluid" />
                    </div>
                </div>
                <div className="d-flex justify-content-between">
                    <p className="fs-4 fw-bold">
                        Top Poems
                    </p>
                    <div>
                        <p className="fs-5 fw-bold text-next">Filter</p>
                    </div>
                </div>
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
                                <div key={i} className="col-md-3 cursor-pointer" onClick={()=>showBook(val)}>
                                    <div className="card border-0">
                                        <img src={val.coverImage} className="card-img-top img-fluid poem-book" />
                                        <div className="card-body">
                                            <p className="card-title fs-5 fw-less-bold">
                                                {val.title}
                                            </p>
                                            <div className="card-text">
                                                <p className="">
                                                    {val.poet}
                                                </p>
                                                <p className="">
                                                    <i className="fa fa-star text-warning pe-2"></i>
                                                    <i className="fa fa-star text-warning pe-2"></i>
                                                    <i className="fa fa-star text-warning pe-2"></i>
                                                    <i className="fa fa-star text-warning pe-2"></i>
                                                    <i className="fa fa-star text-warning pe-2"></i> 2.3k
                                                </p>
                                                <p>
                                                    {getSymbolFromCurrency(val.baseCurrency) + val.price}
                                                </p>
                                            </div>
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
                        Sorry, page couldn't load
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
                {/* Top Poems */}
                {/* <div className="row w-100">
                    <div className="col-md-3 cursor-pointer" onClick={()=>navigate('/home/picked')}>
                        <div className="card border-0">
                            <img src={Card1} className="card-img-top img-fluid" />
                            <div className="card-body">
                                <p className="card-title fs-5 fw-less-bold">
                                    The distant shore
                                </p>
                                <div className="card-text">
                                    <p className="">
                                        Shane .O. Peter
                                    </p>
                                    <p className="">
                                        <i className="fa fa-star text-warning pe-2"></i>
                                        <i className="fa fa-star text-warning pe-2"></i>
                                        <i className="fa fa-star text-warning pe-2"></i>
                                        <i className="fa fa-star text-warning pe-2"></i>
                                        <i className="fa fa-star text-warning pe-2"></i> 2.3k
                                    </p>
                                    <p>
                                        $300.40
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 cursor-pointer" onClick={()=>navigate('/home/picked')}>
                        <div className="card border-0">
                            <img src={Card2} className="card-img-top img-fluid" />
                            <div className="card-body">
                                <p className="card-title fs-5 fw-less-bold">
                                    The weight of word
                                </p>
                                <div className="card-text">
                                    <p className="">
                                        Mickeal Kell
                                    </p>
                                    <p className="">
                                        <i className="fa fa-star text-warning pe-2"></i>
                                        <i className="fa fa-star text-warning pe-2"></i>
                                        <i className="fa fa-star text-warning pe-2"></i>
                                        <i className="fa fa-star text-warning pe-2"></i>
                                        <i className="fa fa-star text-warning pe-2"></i> 2.3k
                                    </p>
                                    <p>
                                        $300.40
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 cursor-pointer" onClick={()=>navigate('/home/picked')}>
                        <div className="card border-0">
                            <img src={Card3} className="card-img-top img-fluid" />
                            <div className="card-body">
                                <p className="card-title fs-5 fw-less-bold">
                                    The whispering wind
                                </p>
                                <div className="card-text">
                                    <p className="">
                                        Loreine Snell
                                    </p>
                                    <p className="">
                                        <i className="fa fa-star text-warning pe-2"></i>
                                        <i className="fa fa-star text-warning pe-2"></i>
                                        <i className="fa fa-star text-warning pe-2"></i>
                                        <i className="fa fa-star text-warning pe-2"></i>
                                        <i className="fa fa-star text-warning pe-2"></i> 2.3k
                                    </p>
                                    <p>
                                        $300.40
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 cursor-pointer" onClick={()=>navigate('/home/picked')}>
                        <div className="card border-0">
                            <img src={Card4} className="card-img-top img-fluid" />
                            <div className="card-body">
                                <p className="card-title fs-5 fw-less-bold">
                                    The lonely man
                                </p>
                                <div className="card-text">
                                    <p className="">
                                        Adaobi Amanda
                                    </p>
                                    <p className="">
                                        <i className="fa fa-star text-warning pe-2"></i>
                                        <i className="fa fa-star text-warning pe-2"></i>
                                        <i className="fa fa-star text-warning pe-2"></i>
                                        <i className="fa fa-star text-warning pe-2"></i>
                                        <i className="fa fa-star text-warning pe-2"></i> 2.3k
                                    </p>
                                    <p>
                                        $300.40
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/*  */}
                {/* <div className="row w-100">
                    <div className="col-md-3 cursor-pointer" onClick={()=>navigate('/home/picked')}>
                        <div className="card border-0">
                            <img src={Card5} className="card-img-top img-fluid" />
                            <div className="card-body">
                                <p className="card-title fs-5 fw-less-bold">
                                    The distant shore
                                </p>
                                <div className="card-text">
                                    <p className="">
                                        Shane .O. Peter
                                    </p>
                                    <p className="">
                                        <i className="fa fa-star text-warning pe-2"></i>
                                        <i className="fa fa-star text-warning pe-2"></i>
                                        <i className="fa fa-star text-warning pe-2"></i>
                                        <i className="fa fa-star text-warning pe-2"></i>
                                        <i className="fa fa-star text-warning pe-2"></i> 2.3k
                                    </p>
                                    <p>
                                        $300.40
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 cursor-pointer" onClick={()=>navigate('/home/picked')}>
                        <div className="card border-0">
                            <img src={Card6} className="card-img-top img-fluid" />
                            <div className="card-body">
                                <p className="card-title fs-5 fw-less-bold">
                                    The weight of word
                                </p>
                                <div className="card-text">
                                    <p className="">
                                        Mickeal Kell
                                    </p>
                                    <p className="">
                                        <i className="fa fa-star text-warning pe-2"></i>
                                        <i className="fa fa-star text-warning pe-2"></i>
                                        <i className="fa fa-star text-warning pe-2"></i>
                                        <i className="fa fa-star text-warning pe-2"></i>
                                        <i className="fa fa-star text-warning pe-2"></i> 2.3k
                                    </p>
                                    <p>
                                        $300.40
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 cursor-pointer" onClick={()=>navigate('/home/picked')}>
                        <div className="card border-0">
                            <img src={Card7} className="card-img-top img-fluid" />
                            <div className="card-body">
                                <p className="card-title fs-5 fw-less-bold">
                                    The whispering wind
                                </p>
                                <div className="card-text">
                                    <p className="">
                                        Loreine Snell
                                    </p>
                                    <p className="">
                                        <i className="fa fa-star text-warning pe-2"></i>
                                        <i className="fa fa-star text-warning pe-2"></i>
                                        <i className="fa fa-star text-warning pe-2"></i>
                                        <i className="fa fa-star text-warning pe-2"></i>
                                        <i className="fa fa-star text-warning pe-2"></i> 2.3k
                                    </p>
                                    <p>
                                        $300.40
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 cursor-pointer" onClick={()=>navigate('/home/picked')}>
                        <div className="card border-0">
                            <img src={Card8} className="card-img-top img-fluid" />
                            <div className="card-body">
                                <p className="card-title fs-5 fw-less-bold">
                                    The lonely man
                                </p>
                                <div className="card-text">
                                    <p className="">
                                        Adaobi Amanda
                                    </p>
                                    <p className="">
                                        <i className="fa fa-star text-warning pe-2"></i>
                                        <i className="fa fa-star text-warning pe-2"></i>
                                        <i className="fa fa-star text-warning pe-2"></i>
                                        <i className="fa fa-star text-warning pe-2"></i>
                                        <i className="fa fa-star text-warning pe-2"></i> 2.3k
                                    </p>
                                    <p>
                                        $300.40
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </Fragment>
    )
}

export default TopPoems