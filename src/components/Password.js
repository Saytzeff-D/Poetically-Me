import React from "react";
import Logo from '../assets/poetically-me.png'

const Password = ()=>{
    return (
        <div className="d-flex justify-content-center mt-3 pt-5">
            <div className="bg-white col-md-3 p-3 text-center rounded shadow-lg">
                <img src={Logo} className="img-fluid" />
                <p className="my-3 fw-bold fs-5">
                    Set up your password
                </p>
                <p className="px-4 fs-6">
                    Choose a strong password to create a strong account
                </p>
                <form>
                    <div className="form-group my-4">
                        <input className="form-control" placeholder="Create Password" />
                    </div>
                    <div className="form-group my-4">
                        <input className="form-control" placeholder="Repeat Password" />
                    </div>
                    <button className="btn mb-4 btn-block w-100 fw-normal btn-next text-white">
                        Continue
                    </button>
                    <hr className="my-0" />
                    <p className="pt-3">
                        Already a member? <a href="/" className="text-decoration-none">Sign in</a>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Password