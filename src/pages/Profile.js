import React, { Fragment } from "react";
import Header from "../components/Header";
import ProfileBg from '../assets/profile.png'

const Profile = ()=>{
    return (
        <Fragment>
            <Header />
            <div>
                <img src={ProfileBg} className="img-fluid" />
            </div>
        </Fragment>
    )
}

export default Profile