import React from "react";
import Logo from '../assets/poetically-me.png'

const EmailVerification = ()=>{
    return (
        <div className="d-flex justify-content-center mt-4 pt-5">
            <div className="bg-white col-md-3 p-3 text-center rounded shadow-lg">
                <img src={Logo} className="img-fluid" />
                <p className="my-3 fw-bold fs-5">
                    Enter Confirmation Code
                </p>
                <p className="px-4 fs-6">
                    We sent a confirmation code to the email you provided
                </p>
                <form>
                    <div className="form-group my-4">
                        <label className="text-center fs-7">
                            Change Email <i className="fa fa-pencil"></i>
                        </label>
                        <input className="form-control" placeholder="Enter Code" />
                    </div>
                    <button className="btn mb-4 btn-block w-100 fw-normal btn-next text-white">
                        Continue
                    </button>
                    <hr className="my-0" />
                    <p className="pt-2 mb-0 pb-0">
                        Already a member? <a href="/" className="text-decoration-none">Sign In</a>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default EmailVerification