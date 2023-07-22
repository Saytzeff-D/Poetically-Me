import React, { Fragment } from "react";
import Book from '../assets/book.png'
import Header from "../components/Layouts/Header";
import Footer from "../components/Layouts/Footer";
import { useNavigate } from "react-router";

const RightsAndPricing = ()=>{
    const navigate = useNavigate()
    return (
        <Fragment>
            <Header />
            <div className="container my-5">
                <p className="fs-5 fw-less-bold">
                    Rights And Pricing
                </p>
                <hr />
                <div className="d-flex flex-md-row flex-column">
                    <div className="me-md-3">
                        <img src={Book} className="" />
                    </div>
                    <div className="ms-md-3">
                        <div className="table-responsive"></div>
                        <table className="table table-borderless w-100">
                            <tbody>
                                <tr>
                                    <td className="fs-5 fw-less-bold">
                                        Poem Title
                                    </td>
                                    <td className="fw-less-bold text-muted">
                                        The Bubblegum
                                    </td>
                                </tr>
                                <tr>
                                    <td className="fs-5 fw-less-bold">
                                        ISBN
                                    </td>
                                    <td className="fw-less-bold text-muted">
                                        345 - 278 - 694 - 84
                                    </td>
                                </tr>                        
                                <tr>
                                    <td className="fs-5 fw-less-bold">
                                        Poem ID
                                    </td>
                                    <td className="fw-less-bold text-muted">
                                        123456783
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <p className="fs-5 fw-less-bold">
                    Countries/Regions and Pricing
                </p>
                <hr />
                <div className="d-flex justify-content-center mt-5">
                    <button onClick={()=>navigate('/add-new-countries')} className="btn btn-next rounded-pill px-3 py-2">
                        Add new Countries/Regions
                    </button>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

export default RightsAndPricing