import React from "react";
import Logo from '../assets/poetically-me.png'
import { useNavigate } from "react-router";
import { useFormik } from "formik";
import { howToPublishSchema } from "../schemas";
import { Alert } from "@mui/material";

const HowToPublish = ()=>{
    const navigate = useNavigate()
    const chooseList = (id)=>{
        document.getElementById(id).click()
    }
    const formik = useFormik({
        initialValues: {
            how: ''
        },
        validationSchema: howToPublishSchema,
        onSubmit: (values)=>{
            if (values.how === 'Submit') {
                navigate('/publish-steps')
            } else {
                navigate('/profile/my-poems')
            }
        }
    })
    return (
        <div className="d-flex justify-content-center pt-md-5 pt-3 mt-md-4 mx-md-0 mx-4">
            <div className="col-md-5 col-lg-3 text-center animate__animated animate__slow animate__fadeIn">
                <img src={Logo} className="img-fluid" alt='logo' />
                <p className="fw-bold fs-4">
                    Choose how to publish
                </p>
                <p className="px-3">
                    You can publish a poem, update a book you have already submitted
                </p>
                <div>
                    {
                        formik.errors.how
                        &&
                        <Alert severity="error">
                            {formik.errors.how}
                        </Alert>
                    }
                    <div onClick={()=>chooseList('submit')} className="form-check border border-dark cursor-pointer py-2 px-5 rounded my-4">
                        <input onChange={formik.handleChange} className="form-check-input cursor-pointer" name="how" type="radio" value={'Submit'} id="submit" />
                        <label className="form-check-label fs-6 cursor-pointer">
                            Submit a new poem
                        </label>
                    </div>
                    <div onClick={()=>chooseList('update')} className="form-check border border-dark cursor-pointer py-2 px-5 rounded my-4">
                        <input onChange={formik.handleChange} className="form-check-input cursor-pointer" name="how" type="radio" value={'Update'} id="update"/>
                        <label className="form-check-label fs-6 cursor-pointer">
                            Update poem
                        </label>
                    </div>
                    <button type="submit" onClick={formik.handleSubmit} className="btn btn-next text-white py-2 w-100">
                        Continue
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HowToPublish