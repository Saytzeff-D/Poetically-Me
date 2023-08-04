import React, { Fragment, useEffect, useState } from "react";
import { Button } from "@mui/material";
import getSymbolFromCurrency from "currency-symbol-map";
import { useNavigate } from "react-router";

const PickedPoem = ()=>{
    const [book, setBook] = useState('')
    const pickedBook = JSON.parse(sessionStorage.getItem('book'))
    const navigate = useNavigate()
    useEffect(()=>{
        pickedBook == null ? navigate('/home') : setBook(pickedBook)        
    }, [])
    const addToCart = ()=>{
        let arr = []
        const storedCart = JSON.parse(sessionStorage.getItem('cart'))
        let newCart = storedCart == null ? [...arr, book] : [...storedCart, book]
        sessionStorage.setItem('cart', JSON.stringify(newCart))
        sessionStorage.removeItem('book')
        navigate('/cart')
    }
    return (
        <Fragment>
            <div className="container mt-5">
                <p className="fs-4 pt-4">Buy Book <i className="fa fa-book"></i> </p>
                <hr />
                <div className="row w-100 my-5 border-bottom">
                    <div className="col-md-4 pb-3">
                        <div className="mb-4">
                            <img src={book.coverImage} />
                        </div>
                        <span className="bg-poetical-orange py-2 px-4 rounded-pill text-white fs-5 mb-5">
                           Buy | {getSymbolFromCurrency(book.baseCurrency) + book.price}
                        </span>
                    </div>
                    <div className="col-md-8 border-start my-5 my-md-0">                        
                        <p>Title: <span className="fw-light">{book.title}</span></p>
                        <p>Author: <span className="fw-light">{book.poet}</span></p>
                        <p>Language: <span className="fw-light">{book.lang}</span></p>
                        <p>Publisher: <span className="fw-light">{book.publisherName}</span></p>
                        <p>ISBN: <span className="fw-light">{book.ISBN}</span></p>
                        <p>Description: <span className="fw-light">{book.poem_desc}</span></p>
                        <div className="d-flex justify-content-end">
                            <Button onClick={addToCart} className="btn-next fw-bold py-2 px-4 border-0">Add to Cart</Button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default PickedPoem