import React, { useEffect, useState } from "react";
import Logo from '../../assets/poetically-me.png'
import axios from "axios";
import { useNavigate } from "react-router";
import { useFormik } from "formik";
import { countrySchema } from "../../schemas";
import { Alert } from "@mui/material";
import { useSelector } from "react-redux";

const Country = ()=>{
    const countryUri = useSelector(state=>state.ApiReducer.countryApi)
    const navigate = useNavigate()
    const [countries, setCountries] = useState([])
    useEffect(()=>{
        axios.get(`${countryUri}`, {
            headers: {
                'X-CSCAPI-KEY': 'TWo1bTJQSmVYWDlPV0FqbTRHd2FjYWdoMkRXVlFkbWdwUHhyQUlSRQ=='
            }
        })
            .then((res)=>{
                setCountries(res.data)
            }).catch(err=>{
                console.log(err)
            })
    }, [])
    const formik = useFormik({
        initialValues: {
            country: ''
        },
        validationSchema: countrySchema,
        validate: (values)=>{
            if (values.country !== '') {
                let country = countries.find((each, i)=>(each.name == values.country))
                sessionStorage.setItem('region', JSON.stringify(country.iso2))
            } else {
                
            }
        },
        onSubmit: (values)=>{
            const { country } = values
            let user = JSON.parse(sessionStorage.getItem('user'))
            const userInfo = { ...user, country }
            sessionStorage.setItem('user', JSON.stringify(userInfo))
            navigate('/join/state')
        }
    })
    return(
        <div className="d-flex justify-content-center pb-5 pt-md-5 pt-3 mx-md-0 mx-4">
            <div className="bg-white col-md-5 col-lg-3 p-3 text-center rounded shadow-lg  animate__animated animate__slow animate__fadeIn">
                <img src={Logo} className="img-fluid" />
                <p className="my-3 fw-bold fs-5">
                    What country are you from?
                </p>
                <p className="px-md-4 fs-6">
                    It's neccessary you provide us with your country to aid the registration process
                </p>
                <form>
                    {
                        formik.errors.country
                        ?
                        <Alert severity="error">
                            {formik.errors.country}
                        </Alert>
                        :
                        ''
                    }
                    <div className="form-group my-4">
                        <select name="country" onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-select">
                            <option value={''}>Select Country</option>                
                            {
                                countries.map((each, index)=>(
                                    <option value={each.name} key={index}>{each.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <button type="submit" onClick={formik.handleSubmit} className="btn mb-4 btn-block w-100 py-2 fw-normal btn-next text-white">
                        Next
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Country