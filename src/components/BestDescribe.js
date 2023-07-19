import React from "react";
import Logo from '../assets/poetically-me.png'

const BestDescribe = ()=>{
    return (
        <div className="d-flex justify-content-center mt-4">
            <div className="bg-white col-md-3 p-3 rounded shadow-lg">
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
                    <div className="form-check border py-2 px-5 rounded my-4">
                        <input className="form-check-input" type="radio" />
                        <label className="form-check-label fs-6">
                            I am here to read
                        </label>
                    </div>
                    <div className="form-check border py-2 px-5 rounded my-4">
                        <input className="form-check-input" type="radio"/>
                        <label className="form-check-label fs-6">
                            I am here to publish
                        </label>
                    </div>
                    <div className="form-check border py-2 px-5 rounded my-4">
                        <input className="form-check-input" type="radio"/>
                        <label className="form-check-label fs-6">
                            I am here for both
                        </label>
                    </div>
                    <button className="btn mb-4 btn-block w-100 fw-normal btn-next text-white">
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BestDescribe