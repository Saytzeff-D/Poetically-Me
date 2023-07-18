import React, { Fragment } from "react";
import { useNavigate } from "react-router";

const Home = ()=>{
    const navigate = useNavigate()
    return(
        <Fragment>
            <div className="container-fluid m-0 bg-secondary pb-5">
                <div className="d-flex justify-content-between pt-2">
                    <p className="brand-text fw-bolder fs-3">
                        PoeticallyMe
                    </p>
                    <p className="text-white">
                        Already a member? 
                         <button onClick={()=>navigate('/login')} className="mx-1 btn btn-light shadow">
                            Login
                        </button>
                    </p>
                </div>
                <div className="bg-secondary text-white p-5 m-0 text-center">
                    <p className="fs-1 fw-bold">
                        Join the largest poetry community
                    </p>
                    <p className="fs-6 fw-light">
                        Over 50,000 poets get feedback and improve their poetry
                    </p>
                    <p className="fs-6 fw-light">
                        Totally free with optional paid memberships.
                    </p>
                    <button className="btn btn-light fw-lighter" onClick={()=>navigate('/join')}>
                        Publish your poem now
                    </button>
                </div>
            </div>
            <div className="container">
                <p className="text-center pt-2 fs-4 fw-light">
                    Made for any poet - from beginners to experts
                </p>
                <p className="text-center fs-5 fw-lighter">
                    Encouragement with friendly comments
                </p>
                <p className="fw-light fs-5">
                    Trending Poetry
                </p>
                <div className="row w-100 mb-5">
                    <div className="col-md-4">
                        <div className="card shadow p-3">
                            <p>
                                Lorem Ipsumjjfsnvj
                            </p>
                            <p>
                                <i className="fa fa-comment-o"></i> 23 comments
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow p-3">
                            <p>
                                Lorem Ipsumjjfsnvj    
                            </p>
                            <p>
                                <i className="fa fa-comment-o"></i> 23 comments
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow p-3">
                            <p>
                                Lorem Ipsumjjfsnvj
                            </p>
                            <p>
                                <i className="fa fa-comment-o"></i> 23 comments
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-center fw-lighter fs-6">
                &copy; 2023
            </p>
        </Fragment>
    )
}

export default Home