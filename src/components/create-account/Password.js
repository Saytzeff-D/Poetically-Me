import React, { Fragment, useState } from "react";
import Logo from '../../assets/poetically-me.png'
import { useNavigate } from "react-router";
import LoadingGif from '../../assets/loading.png'
import Backdrop from '@mui/material/Backdrop';
import { Alert, CircularProgress } from "@mui/material";
import { useFormik } from "formik";
import { passwordSchema } from "../../schemas";
import axios from "axios";
import { useSelector } from "react-redux";

const Password = ()=>{
    const api = useSelector(state=>state.ApiReducer.serverApi)
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const [open, setOpen] = useState(false)
    const formik = useFormik({
        initialValues: {
            password: '',
            confirmPassword: ''
        },
        validationSchema: passwordSchema,
        onSubmit: (values)=>{
            const { password } = values
            let user = JSON.parse(sessionStorage.getItem('user'))
            const userInfo = {...user, password}
            console.log(userInfo)
            setOpen(true)
            setError('')
            axios.post(
                `${api}user/register`,
                userInfo
            ).then(res=>{
                console.log(res.data)
                navigate('/join/email-verification')
            }).catch(err=>{
                console.log(err)
                setOpen(false)
                setError(err.response.data.message)
            })
        }
    })
    return (
        <Fragment>
            <div className="d-flex justify-content-center my-md-3 py-3 mx-md-0 mx-4">
                <div className="bg-white col-md-5 col-lg-3 p-3 text-center rounded shadow-lg animate__animated animate__slow animate__fadeIn">
                    <img src={Logo} className="img-fluid" />
                    <p className="my-3 fw-bold fs-5">
                        Set up your password
                    </p>
                    <p className="px-md-4 fs-6">
                        Choose a strong password to create a strong account
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
                            <input onChange={formik.handleChange} onBlur={formik.handleBlur} name="password" className="form-control border border-dark" placeholder="Create Password" />
                        </div>
                        {formik.errors.password && formik.touched.password && <div className="text-danger text-start my-0">{formik.errors.password}</div>}
                        <div className="form-group mt-4">
                            <input onChange={formik.handleChange} onBlur={formik.handleBlur} name="confirmPassword" className="form-control border border-dark" placeholder="Repeat Password" />
                        </div>
                        {formik.errors.confirmPassword && formik.touched.confirmPassword && <div className="text-danger text-start my-0">{formik.errors.confirmPassword}</div>}
                        <button onClick={formik.handleSubmit} className="btn my-4 btn-block w-100 py-2 fw-normal btn-next text-white">
                            Continue
                        </button>
                        <hr className="my-0" />
                        <p className="pt-3">
                            Already a member? <a onClick={()=>{
                                sessionStorage.setItem('purpose', 'login')
                                navigate('/login')
                            }} className="text-decoration-none">Sign in</a>
                        </p>
                    </form>
                </div>
            </div>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                {/* <img src={LoadingGif} className="img-fluid" width='50px' height='5px' /> */}
                <CircularProgress color="inherit" />
            </Backdrop>
        </Fragment>
    )
}

export default Password