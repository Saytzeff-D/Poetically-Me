import React, { useEffect, useState } from "react";
import Logo from '../../assets/poetically-me.png'
import axios from "axios";
import { useNavigate } from "react-router";
import { useFormik } from "formik";
import { stateSchema } from "../../schemas";
import { Alert } from "@mui/material";
import { useSelector } from "react-redux";

const State = ()=>{
    const countryApi = useSelector(state=>state.ApiReducer.countryApi)
    const navigate = useNavigate()
    const [countries, setCountries] = useState([])
    useEffect(()=>{
        const ISO2 = JSON.parse(sessionStorage.getItem('region'))
        axios.get(`${countryApi}${ISO2}/states`, {
            headers: {
                'X-CSCAPI-KEY': 'TWo1bTJQSmVYWDlPV0FqbTRHd2FjYWdoMkRXVlFkbWdwUHhyQUlSRQ=='
            }
        })
            .then((res)=>{
                console.log(res.data)
                setCountries(res.data)
            }).catch(err=>{
                console.log(err)
            })
    }, [])
    const formik = useFormik({
        initialValues: {
            state: ''
        },
        validationSchema: stateSchema,
        onSubmit: (values)=>{
            const { state } = values
            let user = JSON.parse(sessionStorage.getItem('user'))
            const userInfo = { ...user, state }
            sessionStorage.setItem('user', JSON.stringify(userInfo))
            navigate('/join/best-describe')
        }
    })
    return (
        <div className="d-flex justify-content-center pt-md-5 pt-3 mx-md-0 mx-4 pb-5">
            <div className="bg-white col-md-5 col-lg-3 p-3 text-center rounded shadow-lg animate__animated animate__slow animate__fadeIn">
                <img src={Logo} className="img-fluid" />
                <p className="my-3 fw-bold fs-5">
                    What state are you from?
                </p>
                <p className="px-md-4 fs-6">
                    It's neccessary you provide us with your country to aid the registration process
                </p>
                <form>
                    {
                        formik.errors.state
                        ?
                        <Alert severity="error">
                            {formik.errors.state}
                        </Alert>
                        :
                        ''
                    }
                    <div className="form-group my-4">
                        <select onChange={formik.handleChange} onBlur={formik.handleBlur} name="state" className="form-select">
                            <option value={''}>Select State</option>
                            {
                                countries.map((each, index)=>(
                                    <option key={index}>{each.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <button onClick={formik.handleSubmit} className="btn mb-4 btn-block w-100 py-2 fw-normal btn-next text-white">
                        Next
                    </button>
                </form>
            </div>
        </div>
    )
}

export default State