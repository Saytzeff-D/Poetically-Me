import React, { Fragment, useEffect, useState } from "react";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import Summary from "../components/poems/Summary";
import Metadata from "../components/poems/Metadata";
import { useSelector } from "react-redux";

const PoemDetails = ()=>{
    const [poem, setPoem] = useState(useSelector(state=>state.PoemReducer.selectedPoem))
    useEffect(()=>{
        if (!poem) {        
            setPoem(JSON.parse(sessionStorage.getItem('poem')))            
        } else {            
        }
    }, [poem])
    return (
        <Fragment>
            <Header />
            {/* Summary */}
            <Summary poem={poem} />
            {/* Metadata */}
            <Metadata poem={poem} />
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
                                            <td>{new Date(poem.created_at).toDateString()}</td>
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
                        <img src={poem.coverImage} className="" alt='çover' />
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}

export default PoemDetails