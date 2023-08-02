import React from "react";
import Logo from '../../assets/poetically-me.png'
import { useNavigate } from "react-router";
import { useFormik } from "formik";
import { nameSchema } from "../../schemas";

const Name = ()=>{
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: ''
        },
        validationSchema: nameSchema,
        onSubmit: (values)=>{
            const { firstName, lastName } = values
            let user = JSON.parse(sessionStorage.getItem('user'))
            const userInfo = {...user, firstName, lastName}        
            sessionStorage.setItem('user', JSON.stringify(userInfo))
            navigate('/join/username')
        }
    })
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
                    <div className="form-group border border-dark rounded mt-4">
                        <input onChange={formik.handleChange} onBlur={formik.handleBlur} name="firstName" className="form-control" placeholder="First Name" />
                    </div>
                    {formik.errors.firstName && formik.touched.firstName && <div className="text-danger text-start my-0">{formik.errors.firstName}</div>}
                    <div className="form-group border border-dark rounded mt-4">
                        <input onChange={formik.handleChange} onBlur={formik.handleBlur} name="lastName" className="form-control" placeholder="Last Name" />
                    </div>
                    {formik.errors.lastName && formik.touched.lastName && <div className="text-danger text-start">{formik.errors.lastName}</div>}
                    <button onClick={formik.handleSubmit} className="btn my-4 btn-block w-100 py-2 fw-normal btn-next text-white">
                        Next
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Name