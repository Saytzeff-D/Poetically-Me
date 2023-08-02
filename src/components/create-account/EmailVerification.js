import React, { useState } from "react";
import Logo from '../../assets/poetically-me.png'
import { useNavigate } from "react-router";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import axios from "axios";
import { confirmationCodeSchema } from "../../schemas";
import Backdrop from '@mui/material/Backdrop';
import { Alert, CircularProgress } from "@mui/material";

const EmailVerification = ()=>{
    const [error, setError] = useState('')
    const api = useSelector(state=>state.ApiReducer.serverApi)
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    const formik = useFormik({
        initialValues: {
            code: ''
        },
        validationSchema: confirmationCodeSchema,
        onSubmit: (values)=>{
            setError('')
            setOpen(true)
            const { code } = values
            let user = JSON.parse(sessionStorage.getItem('user'))
            const info = {...user, code}
            axios.post(`${api}user/verifyEmail`, info).then(res=>{
                if (res.data.status) {
                    sessionStorage.setItem('token', JSON.stringify(res.data.token))
                    navigate('/join/info')
                } else {
                    setError(res.data.message)
                    setOpen(false)
                }
            }).catch(err=>{
                setError(err.response.data.message)
                setOpen(false)
            })
        }
    })
    return (
        <div className="d-flex justify-content-center my-md-4 py-3 mx-md-0 mx-4">
            <div className="bg-white col-md-5 col-lg-3 p-3 text-center rounded shadow-lg animate__animated animate__slow animate__fadeIn">
                <img src={Logo} className="img-fluid" />
                <p className="my-3 fw-bold fs-5">
                    Enter Confirmation Code
                </p>
                <p className="px-md-4 fs-6">
                    We sent a confirmation code to the email you provided
                </p>
                <form>
                    {
                        error !== ''
                        &&
                        <Alert severity="error">
                            {error}
                        </Alert>
                    }
                    <div className="form-group mt-4">
                        <label className="text-center fs-7 cursor-pointer">
                            Change Email <i className="fa fa-pencil"></i>
                        </label>
                        <input name="code" onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control" placeholder="Enter Code" />
                    </div>
                    {formik.errors.code && formik.touched.code && <div className="text-danger text-start my-0">{formik.errors.code}</div>}
                    <button type="submit" onClick={formik.handleSubmit} className="btn my-4 btn-block w-100 py-2 fw-normal btn-next text-white">
                        Continue
                    </button>
                    <hr className="my-0" />
                    <p className="pt-2 mb-0 pb-0">
                        Already a member? <a onClick={()=>{
                            sessionStorage.setItem('purpose', 'login')
                            navigate('/login')
                        }} className="text-decoration-none">Sign In</a>
                    </p>
                </form>
            </div>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    )
}

export default EmailVerification