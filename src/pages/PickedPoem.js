import React, { Fragment, useEffect, useState } from "react";
import { Button } from "@mui/material";

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
                        <img />
                        <span className="bg-poetical-orange py-2 px-4 rounded-pill text-white fs-5">
                           Buy | $9,000
                        </span>
                    </div>
                    <div className="col-md-8 border-start my-5 my-md-0">
                        <div className="d-flex justify-content-end d-md-none">
                            <Button className="btn-next fw-bold py-2">Add to Cart</Button>
                        </div>
                        <p>Title</p>
                        <p>Author</p>
                        <p>Language</p>
                        <p>Publisher</p>
                        <p>ISBN</p>
                        <p>Description</p>
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