import React from "react";
import { Fragment } from "react";

const Login = ()=>{
    return (
        <Fragment>
            <div className="container py-5">
                <p className="brand-text fs-1 fw-light">
                    PoeticallyMe
                </p>
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
                        <button className="btn d-block my-2 btn-secondary fs-6 fw-light">
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