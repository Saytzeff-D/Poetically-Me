import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const Wallet = ()=>{
    const [sales, setSales] = useState(0)
    const [referral, setReferral] = useState(0)
    const [error, setError] = useState('')
    const api = useSelector(state=>state.ApiReducer.serverApi)
    useEffect(()=>{
        axios.get(`${api}referral/myReferrals`, {
            headers: {
                'authorization': `Bearer ${JSON.parse(sessionStorage.getItem('token'))}`,
                'content-type': 'application/json',
                'accept': 'application/json'
            }
        }).then(res=>{
            setReferral(res.data.referrals.length * 500)
        }).catch(err=>{
            console.log(err)
            !err.response ? setError(err.message) : setError(err.response.data.message)
        })
    }, [])
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
                    <p className="fs-2">{referral}</p>
                </div>
                <div className="d-flex justify-content-between">
                    <p>Sales</p>
                    <p className="fs-2">{sales}</p>
                </div>
                <div className="d-flex justify-content-between">
                    <p>Total Earned</p>
                    <p className="fs-1 fw-bold">{referral + sales}</p>
                </div>
            </div>
        </div>
    )
}

export default Wallet