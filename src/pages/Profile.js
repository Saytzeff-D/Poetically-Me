import React, { Fragment } from "react";
import Header from "../components/Layouts/Header";
import ProfileBg from '../assets/profile.png'
import Footer from "../components/Layouts/Footer";

const Profile = ()=>{
    return (
        <Fragment>
            <Header />
            <div>
                <img src={ProfileBg} className="img-fluid" />
            </div>
            <p>Me</p>
            <Footer />
        </Fragment>
    )
}

export default Profile