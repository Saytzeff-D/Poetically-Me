import React from "react";
import Logo from '../assets/poetically-me.png'

const Info = ()=>{
    return (
        <div className="d-flex justify-content-center mt-5 pt-5 mx-md-0 mx-4">
            <div className="bg-white col-md-5 col-lg-3 p-3 text-center rounded shadow-lg animate__animated animate__slow animate__fadeIn">
                <img src={Logo} className="img-fluid" />
                <p className="my-3 fw-bold fs-5">
                    Lets setup your profile
                </p>
                <p className="px-4 fs-6">
                    Your profile will be made visible to other users
                </p>
                <button className="btn mb-4 btn-block w-100 py-2 fw-normal btn-next text-white">
                    Continue
                </button>
                <hr className="my-0" />
                <p className="fs-7 text-center my-0 pt-2">
                    Skip
                </p>
            </div>
        </div>
    )
}

export default Info