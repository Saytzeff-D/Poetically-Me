import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const First = ()=>{
    const navigate = useNavigate()
    const dispatch = useDispatch()
    return (
        <Fragment>
            <div className="px-5">
                <div className="border border-dark py-1 px-3 rounded my-4">
                    <p className="fs-6 text-start pt-2">
                        <span className="border px-2 py-1 border-dark rounded-circle"><i className="fa fa-file-o"></i></span>
                        <span className="px-2">Choose a book file...</span>
                    </p>
                </div>
                <div className="border border-dark px-2 py-2 rounded my-4">
                    <p className="fs-6 text-start pt-2">
                        <span className="border px-2 py-1 border-dark rounded-circle"><i className="fa fa-file-o"></i></span>
                        <span className="px-2">Choose a sample file...</span>
                    </p>
                </div>
                <div className="border border-dark px-2 py-2 rounded my-4">
                    <p className="fs-6 text-start pt-2">
                        <span className="border px-2 py-1 border-dark rounded-circle"><i className="fa fa-file-o"></i></span>
                        <span className="px-2">Choose a cover image...</span>
                    </p>
                </div>
                <button onClick={()=>dispatch({type: 'nextStep', payload: 1})} className="btn btn-next text-white py-2 w-100">
                    Continue
                </button>   
            </div>
        </Fragment>
    )
}

export default First