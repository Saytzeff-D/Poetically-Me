import React from "react";
import Logo from '../../assets/poetically-me.png'
import { useNavigate } from "react-router";
import { useFormik } from "formik";
import { usernameSchema } from "../../schemas";

const Username = ()=>{
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            username: ''
        },
        validationSchema: usernameSchema,
        onSubmit: (values)=>{
            const { username } = values
            let user = JSON.parse(sessionStorage.getItem('user'))
            const userInfo = { ...user, username }
            sessionStorage.setItem('user', JSON.stringify(userInfo))
            navigate('/join/country')
        }
    })
    return (
        <div className="d-flex justify-content-center my-md-4 pb-5 pb-md-0 pt-md-5 pt-3 mx-md-0 mx-4">
            <div className="bg-white col-md-5 col-lg-3 p-3 text-center rounded shadow-lg  animate__animated animate__slow animate__fadeIn">
                <img src={Logo} className="img-fluid" />
                <p className="my-3 fw-bold fs-5">
                    What's your username?
                </p>
                <p className="px-md-4 fs-6">
                    Its neccessary you provide us with your real name to aid the registration process
                </p>
                <form>
                    <div className="form-group my-4">
                        <input name="username" onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control" placeholder="Username" />
                        {formik.errors.username && formik.touched.username && <div className="text-danger text-start">{formik.errors.username}</div>}
                    </div>
                    <button onClick={formik.handleSubmit} className="btn mb-4 btn-block w-100 py-2 fw-normal btn-next text-white">
                        Next
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Username