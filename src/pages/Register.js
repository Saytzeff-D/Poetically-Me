import React, { Fragment } from "react";
import { useNavigate } from "react-router";

const Register = ()=>{
    const navigate = useNavigate()
    return (
        <Fragment>
            <div className="container py-5">        
                <a href="/" className="brand-text text-decoration-none fs-1 fw-light">
                    PoeticallyMe
                </a>
                <hr />
                <p className="fs-4 fw-normal">
                    Publish your poetry online
                </p>
                <p className="fw-light fs-5">
                    The web's largest poetry writing group - from beginners to experts. Improve your poetry, create a fan base, and read the best poetry of our season. PoeticallyMe is a home for poets.
                </p>
                <p className="fs-4 fw-normal">
                    Join for free!
                </p>
                <form>
                    <div className="form-group my-1 col-md-6">
                        <label className="fw-light">Username</label>
                        <input className="form-control" placeholder="Your real/pen name" />
                    </div>
                    <div className="form-group my-1 col-md-6">
                        <label className="fw-light">Email Address</label>
                        <input className="form-control" placeholder="your_email@gmail.com" />
                    </div>
                    <div className="form-group my-1 col-md-6">
                        <label className="fw-light">Password</label>
                        <input className="form-control" placeholder="Create a Password" />
                    </div>
                    <button onClick={()=>navigate('/login')} className="btn btn-secondary text-white btn-lg fs-5">
                        Join Now
                    </button>
                </form>
            </div>
        </Fragment>
    )
}

export default Register