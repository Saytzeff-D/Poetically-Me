import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import currency from "currency.js";
import getSymbolFromCurrency from "currency-symbol-map";

const Wallet = ()=>{
    const [sales, setSales] = useState(0)
    const [referral, setReferral] = useState(0)
    const [error, setError] = useState('')
    const [isReferralLoading, setIsReferralLoading] = useState(false)
    const [isSaleLoading, setIsSaleLoading] = useState(false)
    const api = useSelector(state=>state.ApiReducer.serverApi)
    useEffect(()=>{
        setIsReferralLoading(true)
        setIsSaleLoading(true)
        axios.get(`${api}referral/myReferrals`, {
            headers: {
                'authorization': `Bearer ${JSON.parse(sessionStorage.getItem('token'))}`,
                'content-type': 'application/json',
                'accept': 'application/json'
            }
        }).then(res=>{
            setIsReferralLoading(false)
            setReferral(res.data.referrals.length * 500)
        }).catch(err=>{
            console.log(err)
            setIsReferralLoading(false)
            !err.response ? setError(err.message) : setError(err.response.data.message)
        })
        axios.get(`${api}transaction/sales`, {
            headers: {
                'authorization': `Bearer ${JSON.parse(sessionStorage.getItem('token'))}`,
                'content-type': 'application/json'
            }
        }).then(res=>{
            setIsSaleLoading(false)
            let totalSales = 0
            const mySales = res.data.sales
            mySales.map((each, i)=>{
                totalSales += parseInt(each.price)
                setSales(totalSales)
            })
        }).catch(err=>{
            setIsSaleLoading(false)
            !err.response ? setError(err.name) : setError(err.response.data.message)
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
                    {
                        isReferralLoading
                        ?
                        <span className="spinner-border my-3"></span>
                        :
                        error !== ''
                        ?
                        <ReportGmailerrorredIcon className="text-danger" />
                        :
                        <p className="fs-2">{currency(referral, {symbol: getSymbolFromCurrency('NGN')}).format()}</p>
                    }
                </div>
                <div className="d-flex justify-content-between">
                    <p>Sales</p>
                    {
                        isSaleLoading
                        ?
                        <span className="spinner-border my-3"></span>
                        :
                        error !== ''
                        ?
                        <ReportGmailerrorredIcon className="text-danger" />
                        :
                        <p className="fs-2">{currency(sales, {symbol: getSymbolFromCurrency('NGN')}).format()}</p>
                    }
                </div>
                <div className="d-flex justify-content-between">
                    <p>Total Earned</p>
                    <p className="fs-1 fw-bold">{currency(referral + sales, {symbol: getSymbolFromCurrency('NGN')}).format()}</p>
                </div>
            </div>
        </div>
    )
}

export default Wallet