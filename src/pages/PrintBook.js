import React, { Fragment, useEffect, useState } from "react"
import Footer from "../components/layouts/Footer"
import Header from "../components/layouts/Header"
import getSymbolFromCurrency from "currency-symbol-map"
import { Button } from "@mui/material"
import { useNavigate } from "react-router"

const PrintBook = ()=>{
    const navigate = useNavigate()
    const [book, setBook] = useState([])
    useEffect(()=>{
        const printBook = JSON.parse(sessionStorage.getItem('print'))
        printBook !== null ? setBook(printBook) : navigate('/home')
    }, [])
    return(
        <Fragment>
             <div className="container mt-5">
                <p className="fs-4 pt-4">Print Book <i className="fa fa-book"></i> </p>
                <hr />
                {
                    book.map((each, i)=>(
                        <div className="row w-100 my-5 border-bottom">
                            <div className="col-md-4 pb-3">
                                <div className="mb-4">
                                    <img src={each.coverImage} />
                                </div>                               
                            </div>
                            <div className="col-md-8 border-start my-5 my-md-0">                        
                                <p>Title: <span className="fw-light">{each.title}</span></p>
                                <p>Author: <span className="fw-light">{each.poet}</span></p>
                                <p>Language: <span className="fw-light">{each.lang}</span></p>
                                <p>Publisher: <span className="fw-light">{each.publisherName}</span></p>
                                <p>ISBN: <span className="fw-light">{each.ISBN}</span></p>
                                <p>Description: <span className="fw-light">{each.poem_desc}</span></p>
                                <div className="d-flex justify-content-end">
                                    <a href={each.bookFile.split('upload')[0] + 'upload/fl_attachment:' + each.title + each.bookFile.split('upload')[1]} download={true}>
                                        <Button className="btn-next fw-bold py-2 px-4 border-0">Print</Button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))
                }
                <Button onClick={()=>navigate('/home')} className="mt-2 mb-3 btn-next fw-bold px-4 py-2">See Top Poems</Button>
            </div>
            <Footer />
        </Fragment>
    )
}

export default PrintBook