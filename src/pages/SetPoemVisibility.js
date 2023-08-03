import React, { Fragment, useState } from "react";
import Header from '../components/layouts/Header'
import Footer from "../components/layouts/Footer";
import { useNavigate } from "react-router";
import getSymbolFromCurrency from "currency-symbol-map";
import { useFormik } from "formik";
import { poemVisibilitySchema } from "../schemas";
import { Alert, Backdrop, Snackbar } from "@mui/material";
import axios from "axios";
import { useSelector } from "react-redux";

const SetPoemVisibility = ()=>{
    const navigate = useNavigate()
    const api = useSelector(state=>state.ApiReducer.serverApi)
    const [open, setOpen] = useState(false)
    const [error, setError] = useState('')
    const [errorSnackbar, setErrorSnackbar] = useState(false)
    const currencyCodes = ['NGN', 'AUD', 'EUR', 'USD', 'CAD', 'EGP', 'GBP', 'SEK']
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setErrorSnackbar(false);
    }
    const formik = useFormik({
        initialValues: {
            releaseDate: '',
            baseCurrency: '',
            price: '',
            visibility: ''
        },
        validationSchema: poemVisibilitySchema,
        onSubmit: (values)=>{
            setOpen(true)
            setErrorSnackbar(false)
            values.releaseDate = new Date(values.releaseDate).toLocaleDateString()
            console.log(values)
            axios.put(`${api}poem/setVisibility`, values, {
                headers: {
                    'Authorization': `Bearer ${JSON.parse(sessionStorage.getItem('token'))}`,
                    'Content-Type': 'application/json'
                }
            }).then(res=>{
                setOpen(false)
                if(res.data.status) navigate('/completed')
                else{
                    setErrorSnackbar(true)
                    setError('Something went wrong')
                }
            }).catch(err=>{
                setErrorSnackbar(true)
                setOpen(false)
                console.log(err)
                setError(err.message)
            })            
        }
    })
    return(
        <Fragment>
            <Header />
            <div className="container">                
                <p className="py-3 fs-4 fw-less-bold">
                    Poem Visibility / Pricing
                </p>
                <div className="rights-and-pricing">
                    <p className="fs-5 mb-0 fw-less-bold">
                        Pricing
                    </p>
                    <p className="fs-6 fw-light">
                        To make your poem public or private, you need to fill the boxes completely and all are important except indicated otherwise 
                    </p>
                    <hr />
                    <div className="row g-3 align-items-center my-2">
                        <div className="col-md-2">
                            <label className="col-form-label fw-bold">Release Date</label>
                        </div>
                        <div className="col-md-4">
                            <input onChange={formik.handleChange} type="date" name="releaseDate" min={new Date().toISOString().split("T")[0]} className="form-control" />
                        </div>
                    </div>
                    <div className="row g-3 align-items-center my-2">
                        <div className="col-md-2">
                            <label className="col-form-label fw-bold">Base Currency</label>
                        </div>
                        <div className="col-md-4">
                            <select onChange={formik.handleChange} name="baseCurrency" className="form-select">
                                <option value={''}>Select Base Currency</option>
                                {
                                    currencyCodes.map((code, i)=>(
                                        <option key={i} value={code}>{code}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>                    
                    <div className="row g-3 align-items-center my-2">
                        <div className="col-md-2">
                            <label className="col-form-label fw-bold">List Price</label>
                        </div>
                        <div className="col-md-3 col-9">
                            <input onChange={formik.handleChange} name="price" type="text" className="form-control" />
                        </div>
                        <div className="col-3">
                            <span id="" className="form-text fs-7 fw-light">
                            {formik.values.baseCurrency !== '' ? formik.values.baseCurrency + ' - ' + getSymbolFromCurrency(formik.values.baseCurrency) : ''}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="apply-to-countries py-5">
                    <p className="fs-5 fw-less-bold mb-0">
                        Poem Visibility
                    </p>
                    <p className="fs-6 fw-light">
                        Select how you will like to make your book available to other users
                    </p>
                    <hr />
                    <div className="d-flex justify-content-between flex-md-row flex-column">
                        <div className="my-md-0 my-1">
                            <div className="form-check mx-md-4 mx-2">
                                <input name="visibility" onChange={formik.handleChange} className="form-check-input" type="radio" value="Everybody" />
                                <label className="form-check-label fw-less-bold" >
                                    Everybody
                                </label>
                            </div>
                        </div>
                        <div className="d-flex my-md-0 my-1">
                            <div className="form-check mx-md-4 mx-2">
                                <input name="visibility" onChange={formik.handleChange} className="form-check-input" type="radio" value="Users Only" />
                                <label className="form-check-label fw-less-bold" >
                                    Poetically-Me Users Only
                                </label>
                            </div>
                            <div className="form-check mx-md-4 mx-2">
                                <input name="visibility" onChange={formik.handleChange} className="form-check-input" type="radio" value="Only Me" />
                                <label className="form-check-label fw-less-bold" >
                                    Only you
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center my-5">
                    <button onClick={formik.handleSubmit} className="btn btn-next rounded-pill px-5">
                        Continue
                    </button>
                </div>
            </div>
            <Footer />
            {
                formik.errors.releaseDate || formik.errors.baseCurrency || formik.errors.price || formik.errors.visibility
                ?
                <Snackbar open={true} autoHideDuration={6000} >
                    <Alert variant="filled" severity="error">
                        All field are required
                    </Alert>
                </Snackbar>
                :
                ''
            }
            <Backdrop open={open}>
                <span className="spinner-border text-white fs-7 fw-light"></span>
            </Backdrop>
            <Snackbar open={errorSnackbar} onClose={handleClose} >
                <Alert variant="filled" onClose={handleClose} severity="error">
                    {error}
                </Alert>
            </Snackbar>
        </Fragment>
    )
}

export default SetPoemVisibility