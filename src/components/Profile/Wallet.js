import React from "react";

const Wallet = ()=>{
    return (
        <div className="container">
            <p className="fs-4 fw-normal">
                Wallet
            </p>
            <p className="fs-6 fw-light">
                Your total earned money is the sum of your referral and sales money. Details below!
            </p>
            <hr />
            <div className="bg-next col-md-6 rounded p-4">
                <div className="d-flex justify-content-between">
                    <p>Referrals</p>
                    <p className="fs-2">0.0</p>
                </div>
                <div className="d-flex justify-content-between">
                    <p>Sales</p>
                    <p className="fs-2">0.0</p>
                </div>
                <div className="d-flex justify-content-between">
                    <p>Total Earned</p>
                    <p className="fs-1">0.0</p>
                </div>
            </div>
        </div>
    )
}

export default Wallet