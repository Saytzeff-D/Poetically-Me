import React, { useEffect, useState } from "react";
import Logo from '../../assets/poetically-me.png'
import LoadingGif from '../../assets/loading.png'
import Backdrop from '@mui/material/Backdrop';
import { useNavigate } from "react-router";
import { getDay, getMonth, getYear } from "../../miscellaneous/date";
import { Alert } from "@mui/material";
import { useFormik } from "formik";
import { dobSchema } from "../../schemas";

const DateOFBirth = ()=>{
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    const [days, setDays] = useState([])
    const [months, setMonths] = useState([])
    const [years, setYears] = useState([])
    useEffect(()=>{
        setDays(getDay())
        setMonths(getMonth())
        setYears(getYear())
    }, [])

    const formik = useFormik({
        initialValues: {
            day: '',
            month: '',
            year: ''
        },
        validationSchema: dobSchema,
        onSubmit: (values)=>{
            const{ day, month, year } = values
            const dob = month + '/' + day + '/' + year
            console.log(new Date(dob))
            let user = JSON.parse(sessionStorage.getItem('user'))
            const userInfo = { ...user, dob }
            sessionStorage.setItem('user', JSON.stringify(userInfo))
            navigate('/join/password')
        }
    })
    return (
        <div className="d-flex justify-content-center my-md-5 py-3 mx-md-0 mx-4">
            <div className="bg-white col-md-5 col-lg-3 p-3 text-center rounded shadow-lg  animate__animated animate__slow animate__fadeIn">
                <img src={Logo} className="img-fluid" />
                <p className="my-3 fw-bold fs-5">
                    What is your date of birth
                </p>
                <p className="px-md-4 fs-6">
                    Your date of birth will enable us create a proper account for you
                </p>
                <div>
                    {
                        formik.errors.day || formik.errors.month || formik.errors.year
                        ?
                        <Alert severity="error">
                            {formik.errors.day || formik.errors.month || formik.errors.year}
                        </Alert>
                        :
                        ''
                    }
                    <div className="d-flex justify-content-between">
                        <div className="form-group my-4">
                            <label>Day</label>
                            <select name="day" onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-select" >
                                <option>Day</option>
                                {
                                    days.map((each, i)=>(
                                        <option value={each}>{each}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="form-group my-4">
                            <label>Month</label>
                            <select name="month" onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-select" >
                                <option>Month</option>
                                {
                                    months.map((each, i)=>(
                                        <option value={each}>{each}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="form-group my-4">
                            <label>Year</label>
                            <select name="year" onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-select" >
                                <option>Year</option>
                                {
                                    years.map((each, i)=>(
                                        <option value={each}>{each}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                    <button onClick={formik.handleSubmit} className="btn mb-4 btn-block w-100 py-2 fw-normal btn-next text-white">
                        Next
                    </button>
                </div>
            </div>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <img src={LoadingGif} className="img-fluid" width='50px' height='5px' />
            </Backdrop>
        </div>
    )
}

export default DateOFBirth