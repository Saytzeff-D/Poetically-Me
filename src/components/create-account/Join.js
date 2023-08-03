import React, { useEffect, useState } from "react";
import Logo from '../../assets/poetically-me.png'
import { useNavigate, useParams } from "react-router";
import { useFormik } from "formik";
import { emailSchema } from "../../schemas";
import Snackbar from '@mui/material/Snackbar';
import Backdrop from '@mui/material/Backdrop';
import { Alert, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import axios from "axios";

const Join = ()=>{
    const { code } = useParams()
    const api = useSelector(state=>state.ApiReducer.serverApi)
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const [open, setOpen] = useState(false)
    const [openBackdrop, setOpenBackdrop] = useState(false)

    useEffect(()=>{
        console.log(code)
    }, [])
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
    }
    const formik = useFormik({
        initialValues: {
            email: ''
        },
        validationSchema: emailSchema,
        onSubmit: (values)=>{
            values.referralCode = code
            console.log(values)
            setOpenBackdrop(true)
            setOpen(false)
            axios.post(
                `${api}user/validateEmail`,
                values
            ).then(res=>{
                if (res.data.status) {
                    sessionStorage.setItem('user', JSON.stringify(values))
                    navigate('/join/name')
                } else {
                    setOpenBackdrop(false)
                    setOpen(true)
                    setError(res.data.message)
                }
            }).catch(err=>{
                console.log(err)
                setOpenBackdrop(false)
                setOpen(true)
                !err.response ? setError(err.message) : setError(err.response.data.message)
            })
        }
    })

    return (
        <div className="d-flex justify-content-center pt-1 mx-md-0 py-2 mx-4">
            <div className="bg-white col-md-5 col-lg-3 p-3 text-center mb-2  rounded shadow-lg animate__animated animate__slow animate__fadeIn">
                <img src={Logo} className="img-fluid" />
                <p className="my-3 fw-bold fs-5">
                    Join Poetically Me
                </p>
                <p className="px-4 fs-6">
                    To begin your journey with us you need to be registered. 
                </p>
                <div className="border cursor-pointer rounded p-2 shadow-sm d-flex my-2">
                    <p className="text-center my-0">
                        <i className="fa fa-facebook text-primary ps-2"></i>
                        <span className="ps-md-5 ps-3 fs-7">
                            Continue with Facebook
                        </span>
                    </p>
                </div>
                <div className="border cursor-pointer rounded p-2 shadow-sm d-flex my-2">
                    <p className="text-center my-0">
                        <i className="fa fa-google ps-2"></i>
                        <span className="ps-md-5 ps-3 fs-7">
                            Continue with Google
                        </span>
                    </p>
                </div>
                <div className="border cursor-pointer rounded p-2 shadow-sm d-flex my-2">
                    <p className="text-center my-0">
                        <i className="fa fa-apple ps-2"></i>
                        <span className="ps-md-5 ps-3 fs-7">
                            Continue with Apple
                        </span>
                    </p>
                </div>
                <img src={require('../../assets/or.png')} className="img-fluid py-1" />
                <div className="form-group border border-dark rounded">
                    <input onChange={formik.handleChange} onBlur={formik.handleBlur} name="email" className="form-control" placeholder="Enter Email" />
                </div>
                <button onClick={formik.handleSubmit} className={formik.errors.email && formik.touched.email ? 'btn py-2 w-100 my-4 disabled' : 'btn btn-next py-2 text-white w-100 my-4'}>
                    Continue
                </button>
                <hr className="my-0" />
                <p className="pt-2 mb-0 pb-0">
                    Already a member? <a onClick={()=>{
                        sessionStorage.setItem('purpose', 'login')
                        navigate('/login')
                    }} className="text-decoration-none cursor-pointer">Sign In</a>
                </p>
            </div>

            {/* SnackBar */}
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                {error}
                </Alert>
            </Snackbar>
            {/* Backdrop */}
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={openBackdrop}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    )
}

export default Join