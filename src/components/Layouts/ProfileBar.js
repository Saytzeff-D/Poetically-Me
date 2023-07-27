import React, { Fragment } from "react";
import User from '../../assets/no_picture.png'
import Logo from '../../assets/poetically-me.png'
import { useSelector } from "react-redux";

const ProfileBar = ()=>{
    const currentUser = useSelector(state=>state.UserReducer.userInfo)
    return (
        <Fragment>
            <div className="poem-bar py-3">
                <div>
                    <img src={Logo} className="" height='70px' />
                </div>
                <div className="d-flex justify-content-between">
                    <div className="mt-3 d-md-block d-none">
                        <img src={require('../../assets/cart.png')} className="mx-3" height='25px' />
                    </div>
                    <div className="mt-3 d-md-block d-none">
                        <p className="mx-3"><i className="fa fa-bell text-dark fa-lg"></i></p>
                    </div>
                    <div className="dropdown cursor-pointer">
                        <div className="bg-poetical-orange dropdown-toggle user-pill text-white px-3 py-3 rounded-pill" data-bs-toggle="dropdown" aria-expanded="false">
                            {currentUser.firstName} <img src={currentUser.picture} height='30px' className="ms-2" />                    
                        </div> 
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/">Logout</a></li>                            
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ProfileBar