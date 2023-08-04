import React, { Fragment, useEffect, useState } from "react";
import { Button } from "@mui/material";
import getSymbolFromCurrency from "currency-symbol-map";

const PickedPoem = ()=>{
    const [book, setBook] = useState('')
    useEffect(()=>{
        setBook(JSON.parse(sessionStorage.getItem('book')))
    })
    return (
        <Fragment>
            <div className="container mt-5">
                <p className="fs-4 pt-4">Buy Book <i className="fa fa-book"></i> </p>
                <hr />
                <div className="row w-100 mt-5">
                    <div className="col-md-4">
                        <div className="mb-4">
                            <img src={book.coverImage} />
                        </div>
                        <span className="bg-poetical-orange py-2 px-4 rounded-pill text-white fs-5">
                           Buy | {getSymbolFromCurrency(book.baseCurrency) + book.price}
                        </span>
                    </div>
                    <div className="col-md-8 border-start my-5 my-md-0">
                        <div className="d-flex justify-content-end d-md-none">
                            <Button className="btn-next fw-bold py-2">Add to Cart</Button>
                        </div>
                        <p>Title: {book.title}</p>
                        <p>Author: {book.poet}</p>
                        <p>Language: {book.lang}</p>
                        <p>Publisher: {book.publisherName}</p>
                        <p>ISBN: {book.ISBN}</p>
                        <p>Description: {book.poem_desc}</p>
                    </div>
                </div>
                <div className="d-flex justify-content-end">
                    <Button className="btn-next fw-bold py-2">Add to Cart</Button>
                </div>
            </div>
        </Fragment>
    )
}

export default PickedPoem