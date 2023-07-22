import React, { Fragment } from "react";
import Header from '../components/Layouts/Header'
import Footer from "../components/Layouts/Footer";
import { useNavigate } from "react-router";

const AddNewCountries = ()=>{
    const navigate = useNavigate()
    return(
        <Fragment>
            <Header />
            <div className="container">                
                <p className="py-3 fs-4 fw-less-bold">
                    Add New Countries / Regions
                </p>
                <div className="rights-and-pricing">
                    <p className="fs-5 mb-0 fw-less-bold">
                        Rights and Pricing
                    </p>
                    <p className="fs-6 fw-light">
                        To add new countries and regions, you need to fill the boxes completely and all are important except indicated otherwise 
                    </p>
                    <hr />
                    <div className="row g-3 align-items-center my-2">
                        <div className="col-md-2">
                            <label className="col-form-label fw-bold">Release Date</label>
                        </div>
                        <div className="col-md-4">
                            <input type="password" className="form-control" />
                        </div>
                    </div>
                    <div className="row g-3 align-items-center my-2">
                        <div className="col-md-2">
                            <label className="col-form-label fw-bold">Base Currency</label>
                        </div>
                        <div className="col-md-4">
                            <input type="password" className="form-control" />
                        </div>
                    </div>
                    <div className="row g-3 align-items-center my-2">
                        <div className="col-md-2">
                            <label className="col-form-label fw-bold">Release Type</label>
                        </div>
                        <div className="col-md-4">
                            <input type="password" className="form-control" />
                        </div>
                    </div>
                    <div className="row g-3 align-items-center my-2">
                        <div className="col-md-2">
                            <label className="col-form-label fw-bold">List Price</label>
                        </div>
                        <div className="col-md-3 col-10">
                            <input type="password" className="form-control" />
                        </div>
                        <div className="col-1">
                            <span id="passwordHelpInline" className="form-text fs-7">
                            USD
                            </span>
                        </div>
                    </div>
                </div>
                <div className="apply-to-countries py-5">
                    <p className="fs-5 fw-less-bold mb-0">
                        Apply to Countries and Regions
                    </p>
                    <p className="fs-6 fw-light">
                        Select countries and regions you will like to make your book available
                    </p>
                    <hr />
                    <div className="d-flex justify-content-between flex-md-row flex-column">
                        <div className="my-md-0 my-1">
                            <div className="form-group">
                                <select className="form-select bg-sky-blue border-0 py-2 text-next">
                                    <option>All Countries / Regions (177)</option>
                                </select>
                            </div>
                        </div>
                        <div className="d-flex my-md-0 my-1">
                            <div className="form-check mx-md-4 mx-2">
                                <input className="form-check-input rounded-0 modified-check" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label fw-less-bold" >
                                    Select All
                                </label>
                            </div>
                            <div className="form-check mx-md-4 mx-2">
                                <input className="form-check-input rounded-0 modified-check" type="checkbox" value="" id="flexCheckChecked" />
                                <label className="form-check-label fw-less-bold" >
                                    Remove All
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center my-5">
                    <button onClick={()=>navigate('/completed')} className="btn btn-next rounded-pill px-5">
                        Continue
                    </button>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

export default AddNewCountries