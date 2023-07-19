import React from "react";
import Logo from '../assets/poetically-me.png'

const SocialConnection = ()=>{
    return (
        <div className="d-flex justify-content-center pt-1 mx-md-0 mx-4 py-md-5 py-lg-0">
            <div className="bg-white col-md-5 col-lg-3 p-3 text-center rounded shadow-lg">
                <img src={Logo} className="img-fluid" />
                <p className="my-3 fw-bold fs-5">
                    Join Poetically Me
                </p>
                <p className="px-4 fs-6">
                    To begin your journey with us you need to be registered. 
                </p>
                <div className="border rounded p-2 shadow-sm d-flex my-2">
                    <p className="text-center my-0">
                        <i className="fa fa-facebook text-primary ps-2"></i>
                        <span className="ps-5">
                            Continue with Facebook
                        </span>
                    </p>
                </div>
                <div className="border rounded p-2 shadow-sm d-flex my-2">
                    <p className="text-center my-0">
                        <i className="fa fa-google ps-2"></i>
                        <span className="ps-5">
                            Continue with Google
                        </span>
                    </p>
                </div>
                <div className="border rounded p-2 shadow-sm d-flex my-2">
                    <p className="text-center my-0">
                        <i className="fa fa-apple ps-2"></i>
                        <span className="ps-5">
                            Continue with Apple
                        </span>
                    </p>
                </div>
                <p className="fs-6 pt-1">
                    OR
                </p>
                <div className="form-group">
                    <input className="form-control" placeholder="Enter Email" />
                </div>
                <button className="btn btn-next py-2 text-white w-100 my-4">
                    Continue
                </button>
                <hr className="my-0" />
                <p className="pt-2 mb-0 pb-0">
                    Already a member? <a href="/" className="text-decoration-none">Sign In</a>
                </p>
            </div>
        </div>
    )
}

export default SocialConnection