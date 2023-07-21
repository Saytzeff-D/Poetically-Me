import React, { Fragment } from "react";

const Footer = ()=>{
    return (
        // <Fragment>
            <div className="bg-next m-0">
                <div className="d-flex justify-content-around flex-column flex-md-row w-100 p-5">
                    <div className="">
                        <p className="fs-5 fw-less-bold">About Us</p>
                        <p className="fw-light pt-2">Careers</p>
                        <p className="fw-light">Blog</p>
                        <p className="fw-light">About Poetically Me</p>
                        <p className="fw-light">Legal</p>
                    </div>
                    <div className="">
                        <p className="fs-5 fw-less-bold">Make Money Publishing</p>
                        <p className="fw-light pt-2">Self publish with us</p>
                        <p className="fw-light">Become an author</p>
                        <p className="fw-light">Buy Products</p>
                    </div>
                    <div className="">
                        <p className="fs-5 fw-less-bold">Sustainability Policies</p>
                        <p className="fw-light pt-2">Shop Products with payments</p>
                        <p className="fw-light">Privacy Policy</p>
                        <p className="fw-light">Terms of use</p>
                    </div>
                    <div className="">
                        <p className="fs-5 fw-less-bold">Contact Us</p>
                        <p className="fw-light pt-2">FAQ</p>
                        <p className="fw-light">Your account</p>
                        <p className="fw-light">Your books</p>
                        <p className="fw-light">Help</p>
                    </div>
                </div>
                <p className="text-center pb-4">
                    Copyright &copy; 2023 Poetically me. All rights reserved.
                </p>
            </div>
        // </Fragment>
    )
}

export default Footer