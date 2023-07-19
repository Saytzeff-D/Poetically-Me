import React from "react";
import Logo from '../assets/poetically-me.png'

const Login = ()=>{
    return (
        <div className="d-flex justify-content-center pt-5 mt-4">
            <div className="col-md-3 text-center">
                <img src={Logo} className="img-fluid" />
                <p className="fw-bold fs-4">
                    Sign in to your account
                </p>
                <p className="px-2">
                    To upload your EPUB sign in with your poetically me details
                </p>
                <form>
                    <div className="form-group my-3">
                        <input className="form-control" placeholder="Email" />
                    </div>
                    <div className="form-group my-3">
                        <input className="form-control" placeholder="Password" />
                    </div>
                    <button className="btn btn-next text-white w-100 my-3 py-2">
                        Continue
                    </button>
                </form>
                <hr className="my-0" />
                <p className="pt-2 mb-0 pb-0 fs-7">
                    <a href="/" className="text-decoration-none">Forgot Password?</a>
                </p>
            </div>
        </div>
    )
}

export default Login