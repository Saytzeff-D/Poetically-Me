import React from "react";
import { Fragment } from "react";
import { useNavigate } from "react-router";

const Login = ()=>{
    const navigate = useNavigate()
    return (
        <Fragment>
            <div className="container py-5">
                <a href="/" className="brand-text text-decoration-none fs-1 fw-light">
                    PoeticallyMe
                </a>
                <hr />
                <p className="fs-4 fw-normal">
                    Login
                </p>
                <div className="bg-login border-1 rounded my-2 p-3">
                    <form className="p-5">
                        <div className="form-group col-md-5">
                            <label className="fw-light">Email/Pen Name</label>
                            <input className="form-control" />
                        </div>
                        <div className="form-group col-md-5">
                            <label className="fw-light">Password</label>
                            <input className="form-control" />
                        </div>
                        <a href="/" className="py-1 text-decoration-none">
                            Forgot your password?
                        </a>
                        <button onClick={()=>navigate('/poet-board')} className="btn d-block my-2 btn-secondary fs-6 fw-light">
                            Login
                        </button>
                    </form>
                    <ul>
                        <li>
                            <a href="/join" className="text-decoration-none">
                                Join for free here
                            </a>
                        </li>
                        <li>
                            Don't have a password? Check your email for a verification link.
                        </li>
                    </ul>
                </div>
            </div>
        </Fragment>
    )
}

export default Login