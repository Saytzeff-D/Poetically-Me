import React, { useEffect, useState } from "react";

const Referrals = ()=>{
    const [hostName, setHostName] = useState('')
    useEffect(()=>{
        setHostName(window.location.host + '/join/')
        // console.log(Math.random().toString(36).substr(2, 8))
    })
    return (
        <div className="container">
            <p className="fs-4 fw-normal">
                Referrals
            </p>
            <p className="fs-6 fw-light">
                The more friends you refer the more money you earn!
            </p>
            <hr />
            <div className="bg-next shadow col-md-6 border rounded d-flex justify-content-between p-3 flex-md-row flex-column">
                <div>
                    <p className="text-center">Earned Money</p>
                    <p className="text-center fs-1 fw-bold">0</p>
                </div>
                <div>
                    <p className="text-center">Referred Friends</p>
                    <p className="text-center fs-1 fw-bold">0</p>
                </div>
            </div>
            <div className="shadow col-md-6 border rounded my-4 p-3">
                <div className="d-flex justify-content-between">
                    <p className="text-center">Your Referral Link</p>
                    <button className="btn btn-outline-next d-xsm-block"><i className="fa fa-copy"></i> Copy</button>
                </div>
                <a href={hostName} className="text-center mt-2">
                    {hostName}
                </a>
                <div className="my-2">
                    <button className="btn btn-outline-next d-xsm-none"><i className="fa fa-copy"></i> Copy</button>
                </div>
            </div>
        </div>
    )
}

export default Referrals