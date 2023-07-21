import React from "react";
import Logo from '../../assets/poetically-me.png'
import { useNavigate } from "react-router";

const Name = ()=>{
    const navigate = useNavigate()
    return(
        <div className="d-flex justify-content-center py-md-5 py-3 mx-md-0 mx-4">
            <div className="bg-white col-md-5 col-lg-3 p-3 mb-2 text-center rounded shadow-lg animate__animated animate__slow animate__fadeIn">
                <img src={Logo} className="img-fluid" />
                <p className="my-3 fw-bold fs-5">
                    What's your real name?
                </p>
                <p className="px-md-4 fs-6">
                    Its neccessary you provide us with your real name to aid the registration process
                </p>
                <form>
                    <div className="form-group border border-dark rounded my-4">
                        <input className="form-control" placeholder="First Name" />
                    </div>
                    <div className="form-group border border-dark rounded my-4">
                        <input className="form-control" placeholder="Last Name" />
                    </div>
                    <button onClick={()=>navigate('/join/username')} className="btn mb-4 btn-block w-100 py-2 fw-normal btn-next text-white">
                        Next
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Name