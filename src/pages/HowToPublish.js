import React from "react";
import Logo from '../assets/poetically-me.png'

const HowToPublish = ()=>{
    return (
        <div className="d-flex justify-content-center pt-5 mt-4 mx-md-0 mx-4">
            <div className="col-md-5 col-lg-3 text-center">
                <img src={Logo} className="img-fluid" />
                <p className="fw-bold fs-4">
                    Choose how to publish
                </p>
                <p className="px-3">
                    You can publish a poem, update a book you have already submitted
                </p>
                <div>
                    <div className="form-check border py-2 px-5 rounded my-4">
                        <input className="form-check-input" type="radio" />
                        <label className="form-check-label fs-6">
                            Submit a new poem
                        </label>
                    </div>
                    <div className="form-check border py-2 px-5 rounded my-4">
                        <input className="form-check-input" type="radio"/>
                        <label className="form-check-label fs-6">
                            Update poem
                        </label>
                    </div>
                    <button className="btn btn-next text-white py-2 w-100">
                        Continue
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HowToPublish