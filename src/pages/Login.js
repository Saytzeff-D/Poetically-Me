import React, { useEffect, useState } from "react";
import Logo from '../assets/poetically-me.png'
import { useNavigate } from "react-router";
import { useFormik } from "formik";
import { loginSchema } from "../schemas";
import axios from "axios";
import { Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

const Login = ()=>{
    const api = useSelector(state=>state.ApiReducer.serverApi)
    const [error, setError] = useState('')
    const [purpose, setPurpose] = useState()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: loginSchema,
        onSubmit: (values)=>{
            setError('')
            setIsLoading(true)
            axios.post(`${api}user/login`, values).then((res=>{
                console.log(res.data)
                sessionStorage.setItem('token', JSON.stringify(res.data.token))
                if (res.data.status) {                
                    if (purpose == 'publish' && sessionStorage.getItem('action') == 'aboutPublishing') {
                        dispatch({type: 'nextStep', payload: 3})
                        navigate('/publish-steps')
                    } else if(purpose == 'publish' && !sessionStorage.getItem('action')) {
                        navigate('/how-to-publish')
                    } else if(purpose == 'library' && !sessionStorage.getItem('action')){
                        navigate('/home/picked')
                    }else
                        navigate('/profile')
                } else {
                    setIsLoading(false)
                    setError(res.data.message)
                }
            })).catch((err)=>{
                console.log(err)
                setIsLoading(false)
                !err.response ? setError(err.message) : setError(err.response.data.message)
            })            
        }
    })
    useEffect(()=>{
        setPurpose(sessionStorage.getItem('purpose'))
    }, [])
    
    return (
        <div className="d-flex justify-content-center pt-5 mt-md-4 mx-4 mx-md-0">
            <div className="col-md-5 col-lg-3 text-center animate__animated animate__slow animate__fadeIn">
                <img src={Logo} className="img-fluid" />
                <p className="fw-bold fs-4">
                    Sign in to your account
                </p>
                <p className="px-2">
                    To upload your EPUB sign in with your poetically me details
                </p>
                <form>
                    {
                        error !== ''
                        ?
                        <Alert severity="error">
                            {error}
                        </Alert>
                        :
                        ''
                    }
                    <div className="form-group border rounded border-dark my-3">
                        <input name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control" placeholder="Email" />
                    </div>
                    {formik.errors.email && formik.touched.email && <div className="text-danger text-start">{formik.errors.email}</div>}
                    <div className="form-group border rounded border-dark my-3">
                        <input name="password" onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control" placeholder="Password" />
                    </div>
                    {formik.errors.password && formik.touched.password && <div className="text-danger text-start">{formik.errors.password}</div>}
                    <button onClick={formik.handleSubmit} className={isLoading ? 'btn disabled text-next w-100 my-3 py-2' : 'btn btn-next text-white w-100 my-3 py-2'}>
                        {
                            purpose == 'publish'
                            ?
                            'Continue'
                            :
                            'Sign in'
                        }
                    </button>
                </form>
                <hr className="my-0" />
                <p className="pt-2 mb-0 pb-0 fs-7">
                    <a href="/" className="text-decoration-none">Forgot Password?</a>
                </p>
            </div>
        </div>
    )
}

export default Login