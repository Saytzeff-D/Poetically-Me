import React from "react";
import Logo from '../../assets/poetically-me.png'
import { useNavigate } from "react-router";

const EmailVerification = ()=>{
    const navigate = useNavigate()
    return (
        <div className="d-flex justify-content-center my-md-4 py-3 mx-md-0 mx-4">
            <div className="bg-white col-md-5 col-lg-3 p-3 text-center rounded shadow-lg animate__animated animate__slow animate__fadeIn">
                <img src={Logo} className="img-fluid" />
                <p className="my-3 fw-bold fs-5">
                    Enter Confirmation Code
                </p>
                <p className="px-md-4 fs-6">
                    We sent a confirmation code to the email you provided
                </p>
                <form>
                    <div className="form-group my-4">
                        <label className="text-center fs-7">
                            Change Email <i className="fa fa-pencil"></i>
                        </label>
                        <input className="form-control" placeholder="Enter Code" />
                    </div>
                    <button onClick={()=>navigate('/join/info')} className="btn mb-4 btn-block w-100 py-2 fw-normal btn-next text-white">
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