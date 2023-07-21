import React, { Fragment } from "react";
import Complete from '../assets/complete.png'
import { useNavigate } from "react-router";

const Completed = ()=>{
    const navigate = useNavigate()
    return (
        <Fragment>
            <div className="d-flex justify-content-center">
                <div className="col-md-4">
                    <div className="d-flex justify-content-center px-5 py-3">
                        <img src={Complete} className="img-fluid" />
                    </div>
                    <p className="text-center fs-3 fw-bold">Completed!</p>
                    <p className="text-center fs-5 fw-less-bold px-3">
                        Your poem has been successfully submitted and is awaiting review. We will let you know when it is live
                    </p>
                    <div className="d-flex justify-content-center my-5 mx-md-5 mx-3">
                        <button onClick={()=>navigate('/dashboard')} className="btn btn-next py-2 w-100">
                            Continue to Home
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Completed