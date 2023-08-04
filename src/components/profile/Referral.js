import { Alert, Snackbar } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Referrals = ()=>{
    const api = useSelector(state=>state.ApiReducer.serverApi)
    const currentUser = useSelector(state=>state.UserReducer.userInfo)
    const [hostName, setHostName] = useState('')
    const [error, setError] = useState('')
    const [referralTray, setReferralTray] = useState([])
    const [open, setOpen] = useState(false)
    useEffect(()=>{
        setHostName(window.location.host + '/join/' + currentUser.referralCode)
        axios.get(`${api}referral/myReferrals`, {
            headers: {
                'authorization': `Bearer ${JSON.parse(sessionStorage.getItem('token'))}`,
                'content-type': 'application/json',
                'accept': 'application/json'
            }
        }).then(res=>{
            setReferralTray(res.data.referrals)
        }).catch(err=>{
            console.log(err)
            !err.response ? setError(err.message) : setError(err.response.data.message)
        })
    }, [])
    const copyLink = ()=>{
        navigator.clipboard.writeText(hostName)
        setOpen(true)
    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
    }
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
                    <p className="text-center fs-1 fw-bold">{referralTray.length * 500}</p>
                </div>
                <div>
                    <p className="text-center">Referred Friends</p>
                    <p className="text-center fs-1 fw-bold">{referralTray.length}</p>
                </div>
            </div>
            <div className="shadow col-md-6 border rounded my-4 p-3">
                <div className="d-flex justify-content-between">
                    <p className="text-center">Your Referral Link</p>
                    <button onClick={copyLink} className="btn btn-outline-next d-xsm-block"><i className="fa fa-copy"></i> Copy</button>
                </div>
                <a href={hostName} className="text-center mt-2">
                    {hostName}
                </a>
                <div className="my-2">
                    <button onClick={copyLink} className="btn btn-outline-next d-xsm-none"><i className="fa fa-copy"></i> Copy</button>
                </div>
            </div>
            <Snackbar autoHideDuration={6000} anchorOrigin={{vertical: 'bottom', horizontal: 'center'}} open={open} onClose={handleClose} >
                <Alert variant="filled" severity="info" onClose={handleClose} >
                    Copied!
                </Alert>
            </Snackbar>
        </div>
    )
}

export default Referrals
