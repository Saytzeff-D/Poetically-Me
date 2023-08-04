import React from "react";

const MyLibrary = ()=>{
    return (
        <div className="container">
            <p className="fs-4 fw-normal">
                My Library
            </p>
            <p className="fs-6 fw-light">
                Works of other users you saved are here
            </p>
            <hr />
            <div>
                <p className="display-5 text-center py-5">Nothing is here</p>
            </div>
        </div>
    )
}

export default MyLibrary