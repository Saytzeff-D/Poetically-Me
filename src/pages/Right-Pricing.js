import React, { Fragment, useEffect, useState } from "react";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const RightsAndPricing = ()=>{
    const navigate = useNavigate()
    const [poem, setPoem] = useState(useSelector(state=>state.PoemReducer.selectedPoem))
    useEffect(()=>{
        if (!poem) {        
            setPoem(JSON.parse(sessionStorage.getItem('poem')))            
        } else {            
        }
    }, [])
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
                        <img src={poem.coverImage} className="" />
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
                                        {poem.title}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="fs-5 fw-less-bold">
                                        ISBN
                                    </td>
                                    <td className="fw-less-bold text-muted">
                                        {poem.ISBN}
                                    </td>
                                </tr>                        
                                <tr>
                                    <td className="fs-5 fw-less-bold">
                                        Poem ID
                                    </td>
                                    <td className="fw-less-bold text-muted">
                                        {poem.poem_id}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="container my-5">
                <p className="fs-5 fw-less-bold">
                    Poem Visibility(Public / Private) and Pricing
                </p>
                <hr />
                <div className="d-flex justify-content-center mt-5">
                    <button onClick={()=>navigate('/visibility-and-pricing')} className="btn btn-next rounded-pill px-3 py-2">
                        Set Visibility / Pricing
                    </button>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

export default RightsAndPricing