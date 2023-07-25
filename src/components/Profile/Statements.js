import React from "react";

const Statements = ()=>{
    return (
        <div className="container">
            <p className="fs-4 fw-normal">
                Statements of Account
            </p>
            <p className="fs-6 fw-light">
                Your sales and purchases are here
            </p>
            <hr />
            <div>
                <div className="form-group d-flex">
                    <select className="form-select mx-1">
                        <option>Select Statement Type</option>
                        <option>Purchases</option>
                        <option>Sales</option>
                    </select>
                    <button className="btn btn-next px-2 mx-1 py-2">Retrieve</button>
                </div>
            </div>
        </div>
    )
}

export default Statements