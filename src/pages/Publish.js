import React from "react";
import Logo from '../assets/poetically-me.png'

const Publish = ()=>{
    return (
        <div className="d-flex justify-content-center pt-5 mt-4">
            <div className="col-md-3 text-center">
                <img src={Logo} className="img-fluid" />
                <p className="fw-bold fs-4">
                    Publish to Poetically Me
                </p>
                <p className="px-2">
                    To upload your EPUB sign in with your poetically me details
                </p>
                <button className="btn border border-1 w-100 text-next py-2">
                    Create Account
                </button>
                <button className="btn btn-next w-100 text-white my-4 py-2">
                    Continue
                </button>
                <hr className="my-0" />
                <p className="pt-2 mb-0 pb-0 fs-7">
                    Already a member? <a href="/" className="text-decoration-none">Sign In</a>
                </p>
            </div>
        </div>
    )
}

export default Publish