import React from "react";
import Logo from '../assets/poetically-me.png'
import { useNavigate } from "react-router";

const BestDescribe = ()=>{
    const navigate = useNavigate()
    return (
        <div className="d-flex justify-content-center mt-5 py-md-5 py-lg-0 mx-md-0 mx-4  animate__animated animate__slow animate__fadeIn">
            <div className="bg-white col-md-6 col-lg-3 p-3 rounded shadow-lg">
                <div className="d-flex justify-content-center">
                    <img src={Logo} className="img-fluid" />
                </div>
                <p className="my-3 fw-bold fs-5 text-center">
                    Which of these best describes you
                </p>
                <p className="px-4 fs-6 text-center">
                    Choose which best describes you from the list below
                </p>
                <div>
                    <div className="form-check border border-dark py-2 px-5 rounded my-4">
                        <input className="form-check-input" type="radio" />
                        <label className="form-check-label fs-6">
                            I am here to read
                        </label>
                    </div>
                    <div className="form-check border border-dark py-2 px-5 rounded my-4">
                        <input className="form-check-input" type="radio"/>
                        <label className="form-check-label fs-6">
                            I am here to publish
                        </label>
                    </div>
                    <div className="form-check border border-dark py-2 px-5 rounded my-4">
                        <input className="form-check-input" type="radio"/>
                        <label className="form-check-label fs-6">
                            I am here for both
                        </label>
                    </div>
                    <button onClick={()=>navigate('/join/dateOfBirth')} className="btn mb-4 btn-block w-100 py-2 fw-normal btn-next text-white">
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BestDescribe