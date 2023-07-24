import React, { Fragment } from "react";
import Book from '../../assets/book.png'
import Book1 from '../../assets/Book1.png'
import Book2 from '../../assets/Book2.png'
import { useNavigate } from "react-router";

const MyPoems = ()=>{
    const navigate = useNavigate()
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
                <div className="container row w-100">
                    <div className="col-md-3 cursor-pointer" onClick={()=>navigate('/summary')}>
                        <div className="card border-0">
                            <img src={Book} className="card-img-top img-fluid poem-book" />
                            <div className="card-body">
                                <p className="card-title fs-5 fw-less-bold">
                                    The distant shore
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 cursor-pointer" onClick={()=>navigate('/summary')}>
                        <div className="card border-0">
                            <img src={Book1} className="card-img-top img-fluid poem-book" />
                            <div className="card-body">
                                <p className="card-title fs-5 fw-less-bold">
                                    The weight of word
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 cursor-pointer" onClick={()=>navigate('/summary')}>
                        <div className="card border-0">
                            <img src={Book2} className="card-img-top img-fluid poem-book" />
                            <div className="card-body">
                                <p className="card-title fs-5 fw-less-bold">
                                    The whispering wind
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 cursor-pointer" onClick={()=>navigate('/summary')}>
                        <div className="card border-0">
                            <img src={Book1} className="card-img-top img-fluid poem-book" />
                            <div className="card-body">
                                <p className="card-title fs-5 fw-less-bold">
                                    The lonely man
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default MyPoems