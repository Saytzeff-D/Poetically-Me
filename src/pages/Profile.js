import React, { Fragment } from "react";
import Header from "../components/Layouts/Header";
import ProfileBg from '../assets/profile.png'
import Footer from "../components/Layouts/Footer";
import { useNavigate } from "react-router";

const Profile = ()=>{
    const navigate = useNavigate()
    return (
        <Fragment>
            <Header />
            <div>
                <img src={ProfileBg} className="img-fluid" />
            </div>
            <p className="display-5 py-5 text-center">
                This page is currently under development
            </p>
            <div className="d-flex justify-content-center my-5">
                <button onClick={()=>navigate('/summary')} className="btn btn-next px-5 rounded-pill">
                    Continue to Summary
                </button>
            </div>
            <Footer />
        </Fragment>
    )
}

export default Profile