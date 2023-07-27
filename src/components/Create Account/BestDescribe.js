import React from "react";
import Logo from '../../assets/poetically-me.png'
import { useNavigate } from "react-router";
import { useFormik } from "formik";
import { bestDescribeSchema } from "../../schemas";
import { Alert } from "@mui/material";

const BestDescribe = ()=>{
    const navigate = useNavigate()
    const chooseList = (id)=>{
        document.getElementById(id).click()
    }
    const formik = useFormik({
        initialValues: {
            bestDescribe: ''
        },
        validationSchema: bestDescribeSchema,
        onSubmit: (values)=>{    
            const { bestDescribe } = values
            let user = JSON.parse(sessionStorage.getItem('user'))
            const userInfo = { ...user, bestDescribe }
            sessionStorage.setItem('user', JSON.stringify(userInfo))
            navigate('/join/dateOfBirth')
        }
    })
    return (
        <div className="d-flex justify-content-center pb-4 py-md-5 py-lg-0 mx-md-0 mx-4  animate__animated animate__slow animate__fadeIn">
            <div className="bg-white col-md-6 col-lg-3 p-3 mt-3 rounded shadow-lg">
                <div className="d-flex justify-content-center">
                    <img src={Logo} className="img-fluid" />
                </div>
                <p className="my-3 fw-bold fs-5 text-center">
                    Which of these best describes you
                </p>
                <p className="px-md-4 fs-6 text-center">
                    Choose which best describes you from the list below
                </p>
                <div>
                    {
                        formik.errors.bestDescribe
                        ?
                        <Alert severity="error">
                            {formik.errors.bestDescribe}
                        </Alert>
                        :
                        ''
                    }
                    <div onClick={()=>chooseList('opt1')} className="disab form-check border border-dark cursor-pointer py-2 px-5 rounded my-4">
                        <input onChange={formik.handleChange} name="bestDescribe" value='I am here to read' className="form-check-input" type="radio" id="opt1" />
                        <label className="form-check-label fs-7 cursor-pointer">
                            I am here to read
                        </label>
                    </div>
                    <div onClick={()=>chooseList('opt2')} className="disab form-check border border-dark cursor-pointer py-2 px-5 rounded my-4">
                        <input onChange={formik.handleChange} name="bestDescribe" value='I am here to publish' className="form-check-input" type="radio" id="opt2" />
                        <label className="form-check-label fs-7 cursor-pointer">
                            I am here to publish
                        </label>
                    </div>
                    <div onClick={()=>chooseList('opt3')} className="disab form-check border border-dark cursor-pointer py-2 px-5 rounded my-4">
                        <input onChange={formik.handleChange} name="bestDescribe" value='I am here for both' className="form-check-input" type="radio" id="opt3" />
                        <label className="form-check-label fs-7 cursor-pointer">
                            I am here for both
                        </label>
                    </div>
                    <button onClick={formik.handleSubmit} className="btn mb-4 btn-block w-100 py-2 fw-normal btn-next text-white">
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BestDescribe