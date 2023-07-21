import React, { Fragment } from "react";
import Header from "../components/Layouts/Header";
import Footer from "../components/Layouts/Footer";
import Summary from "../components/Poems/Summary";
import Metadata from "../components/Poems/Metadata";
import Book from '../assets/book.png'

const PoemDetails = ()=>{
    return (
        <Fragment>
            <Header />
            {/* Summary */}
            <Summary />
            {/* Metadata */}
            <Metadata />
            {/* Assets */}
            <div className="container my-5">
                <p className="fs-5 fw-less-bold">
                    Assets
                </p>
                <hr />
                <div className="row w-100">
                    <div className="col-md-5">
                        <div className="d-flex flex-md-row flex-column">
                            <div>
                                <p className="fs-5 fw-bold text-center">
                                    Poem
                                </p>
                                <p className="text-center"><i className="fa fa-file-o rounded fa-lg text-next"></i></p>
                                <p className="bg-next rounded p-1">poem.epub</p>
                            </div>
                            <div className="ms-5">
                                <table className="table table-borderless">
                                    <tbody>
                                        <tr>
                                            <td className="fw-less-bold">Version</td>
                                            <td>Original</td>
                                        </tr>
                                        <tr>
                                            <td className="fw-less-bold">Upload date</td>
                                            <td>July 8, 2023</td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td className="text-next cursor-pointer fw-less-bold">View details</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <p className="my-4 fw-bold fs-5">
                          Cover Art  
                        </p>
                        <img src={Book} className="" />
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

export default PoemDetails