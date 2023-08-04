import React, { Fragment } from "react";
import Logo from '../../assets/poetically-me.png'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from "@mui/material";

const ProfileBar = ()=>{
    const navigate = useNavigate()
    const currentUser = useSelector(state=>state.UserReducer.userInfo)
    const logout = ()=>{
        sessionStorage.removeItem('token')
        navigate('/home')
    }
    return (
        <Fragment>
            <div className="poem-bar py-3">
                <div>
                    <img src={Logo} className="" height='70px' />
                </div>
                <div className="d-flex justify-content-between">
                    <div className="mt-3 d-md-block d-none" onClick={()=>navigate('/cart')}>
                        <Badge badgeContent={4} color="secondary">
                            <ShoppingCartIcon color="action" />
                        </Badge>
                    </div>
                    <div className="mt-3 d-md-block d-none">
                        <p className="mx-3"><i className="fa fa-bell text-dark fa-lg"></i></p>
                    </div>
                    <div className="dropdown cursor-pointer">
                        <div className="bg-poetical-orange dropdown-toggle user-pill text-white px-3 py-3 rounded-pill" data-bs-toggle="dropdown" aria-expanded="false">
                            {currentUser.firstName} <img src={currentUser.picture} height='30px' width={'30px'} className="ms-2 rounded-circle" />                    
                        </div> 
                        <ul className="dropdown-menu cursor-pointer" onClick={logout}>
                            <li><a className="dropdown-item">Logout</a></li>                            
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ProfileBar