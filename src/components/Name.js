import React from "react";
import Logo from '../assets/poetically-me.png'

const Name = ()=>{
    return(
        <div className="d-flex justify-content-center mt-5 pt-4">
            <div className="bg-white col-md-3 p-3 text-center rounded shadow-lg">
                <img src={Logo} className="img-fluid" />
                <p className="my-3 fw-bold fs-5">
                    What's your real name?
                </p>
                <p className="px-4 fs-6">
                    Its neccessary you provide us with your real name to aid the registration process
                </p>
                <form>
                    <div className="form-group my-4">
                        <input className="form-control" placeholder="First Name" />
                    </div>
                    <div className="form-group my-4">
                        <input className="form-control" placeholder="Last Name" />
                    </div>
                    <button className="btn mb-4 btn-block w-100 fw-normal btn-next text-white">
                        Next
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Name