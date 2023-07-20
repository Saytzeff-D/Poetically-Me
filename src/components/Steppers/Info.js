import { Dialog, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import React, { Fragment } from "react";
import { useNavigate } from "react-router";

const Info = (props)=>{
    const { open } = props
    const navigate = useNavigate()
    return (
        <Fragment>
            <Dialog open={open} fullWidth={true} maxWidth={'xs'}>
                <DialogTitle>
                    <p className="text-center pt-5 fs-5 fw-bold">You are almost done!</p>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText className="text-center">
                        <p className="text-center fs-6 text-dark fw-less-bold px-md-5">
                            Go to your profile to add release date, pricing and other information for your poem
                        </p>
                        <button onClick={()=>navigate('/dashboard')} className="btn btn-next w-100 mb-5 mt-3 py-2">
                            Go to Profile
                        </button>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </Fragment>
    )
}

export default Info