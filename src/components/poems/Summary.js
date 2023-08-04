import React, { Fragment } from "react";
import Book from '../../assets/book.png'
import { useNavigate } from "react-router";

const Summary = (props)=>{
    const { poem } = props
    const navigate = useNavigate()
    return (
        <Fragment>
            <div className="container my-2">
                <p className="fs-5 fw-less-bold">
                    Summary
                </p>
                <hr />
                <div className="d-flex flex-md-row flex-column">
                    <div className="me-md-3">
                        <img src={poem.coverImage} className="" />
                    </div>
                    <div className="ms-md-3">
                        <div className="d-flex justify-content-between w-100 flex-md-row flex-column">
                            <div>
                                <p className="fs-4 fw-less-bold my-0">{poem.title}</p>
                                <p className="fs-6 fw-less-bold">By {poem.poet}</p>
                            </div>
                            <div>
                                <button onClick={()=>navigate('/rights-and-pricing')} className="btn btn-next rounded-pill px-5">
                                    Rights and Pricing
                                </button>
                            </div>
                        </div>
                        <div className="table-responsive"></div>
                        <table className="table table-borderless w-100">
                            <tbody>
                                <tr>
                                    <td className="fs-5 fw-less-bold">
                                        Poem ID
                                    </td>
                                    <td className="fw-less-bold">
                                        {poem.poem_id}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="fs-5 fw-less-bold">
                                        Poem Link
                                    </td>
                                    <td className="fw-less-bold text-break">
                                        <a href="/" className="text-decoration-none">https:www.poeticallyme/bubblegum.com</a> <i className="fa fa-copy"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="fs-5 fw-less-bold">
                                        ISBN
                                    </td>
                                    <td className="fw-less-bold">
                                        {poem.ISBN}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="fs-5 fw-less-bold">
                                        Vendor ID
                                    </td>
                                    <td className="fw-less-bold">
                                        {poem.user_id}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="fs-5 fw-less-bold">
                                        Version
                                    </td>
                                    <td className="fw-less-bold">
                                        Original
                                    </td>
                                </tr>
                                <tr>
                                    <td className="fs-5 fw-less-bold">
                                        Review Status
                                    </td>
                                    <td className="fw-less-bold">
                                        Pending
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Summary