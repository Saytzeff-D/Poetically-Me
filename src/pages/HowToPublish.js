import React from "react";
import Logo from '../assets/poetically-me.png'
import { useNavigate } from "react-router";

const HowToPublish = ()=>{
    const navigate = useNavigate()
    return (
        <div className="d-flex justify-content-center pt-5 mt-4 mx-md-0 mx-4">
            <div className="col-md-5 col-lg-3 text-center animate__animated animate__slow animate__fadeIn">
                <img src={Logo} className="img-fluid" />
                <p className="fw-bold fs-4">
                    Choose how to publish
                </p>
                <p className="px-3">
                    You can publish a poem, update a book you have already submitted
                </p>
                <div>
                    <div className="form-check border border-dark py-2 px-5 rounded my-4">
                        <input className="form-check-input" type="radio" />
                        <label className="form-check-label fs-6">
                            Submit a new poem
                        </label>
                    </div>
                    <div className="form-check border border-dark py-2 px-5 rounded my-4">
                        <input className="form-check-input" type="radio"/>
                        <label className="form-check-label fs-6">
                            Update poem
                        </label>
                    </div>
                    <button onClick={()=>navigate('/publish-steps')} className="btn btn-next text-white py-2 w-100">
                        Continue
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HowToPublish