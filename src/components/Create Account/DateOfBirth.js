import React, { useState } from "react";
import Logo from '../../assets/poetically-me.png'
import LoadingGif from '../../assets/loading.png'
import Backdrop from '@mui/material/Backdrop';
import { useNavigate } from "react-router";

const DateOFBirth = ()=>{
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    return (
        <div className="d-flex justify-content-center my-md-5 py-3 mx-md-0 mx-4">
            <div className="bg-white col-md-5 col-lg-3 p-3 text-center rounded shadow-lg  animate__animated animate__slow animate__fadeIn">
                <img src={Logo} className="img-fluid" />
                <p className="my-3 fw-bold fs-5">
                    What is your date of birth
                </p>
                <p className="px-md-4 fs-6">
                    Your date of birth will enable us create a proper account for you
                </p>
                <div>
                    <div className="d-flex justify-content-between">
                        <div className="form-group my-4">
                            <label>Day</label>
                            <select className="form-select" placeholder="First Name" >
                                <option>02</option>
                            </select>
                        </div>
                        <div className="form-group my-4">
                            <label>Month</label>
                            <select className="form-select" placeholder="Last Name" >
                                <option>02</option>
                            </select>
                        </div>
                        <div className="form-group my-4">
                            <label>Year</label>
                            <select className="form-select" placeholder="Last Name" >
                                <option>2000</option>
                            </select>
                        </div>
                    </div>
                    <button onClick={()=>navigate('/join/password')} className="btn mb-4 btn-block w-100 py-2 fw-normal btn-next text-white">
                        Next
                    </button>
                </div>
            </div>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <img src={LoadingGif} className="img-fluid" width='50px' height='5px' />
            </Backdrop>
        </div>
    )
}

export default DateOFBirth