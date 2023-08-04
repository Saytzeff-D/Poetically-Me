import React, { Fragment, useEffect, useState } from "react";
import Logo from '../../assets/poetically-me.png'
import User from '../../assets/user.png'
import { useSelector } from "react-redux";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router";

const Header = ()=>{
    const navigate = useNavigate()
    const api = useSelector(state=>state.ApiReducer.serverApi)
    const currentUser = useSelector(state=>state.UserReducer.userInfo)
    const cartArr = JSON.parse(sessionStorage.getItem('cart'))
    const [jwt, setJwt] = useState('')
    const [cartTray, setCartTray] = useState(0)

    useEffect(()=>{
        cartArr !== null ? setCartTray(JSON.parse(sessionStorage.getItem('cart')).length) : setCartTray(0)
        axios.get(`${api}user/currentUser`, {
            headers: {
                'Authorization': `Bearer ${JSON.parse(sessionStorage.getItem('token'))}`,
                'Content-Type': 'application/json'
            }
        }).then(res=>{
            console.log(res.data)
            setJwt(res.data.user)
        }).catch(err=>{
            setJwt('')
        })
    }, [])
    return (
        <Fragment>
            <div className="d-flex justify-content-around w-100 m-0">
                <a href="/"> 
                    <img src={Logo} className="" height='70px' />
                </a>
                <div className="d-md-block d-none">
                    <input className="form-control mt-3" placeholder="Search Poem" />
                </div>
                <div className="d-flex justify-content-between mt-3">
                    <div className="mt-3 mx-3 cursor-pointer" onClick={()=>navigate('/cart')}>
                        <Badge badgeContent={cartTray} color="secondary">
                            <ShoppingCartIcon color="action" />
                        </Badge>
                    </div>
                    <div className="mt-3">
                        <p className="mx-3"><i className="fa fa-bell text-dark fa-lg"></i></p>
                    </div>
                    {
                        jwt !== ''
                        ?
                        <div className="dropdown cursor-pointer">
                            <div className="bg-poetical-orange dropdown-toggle user-pill text-white px-3 py-3 rounded-pill" data-bs-toggle="dropdown" aria-expanded="false">
                                {currentUser.firstName} <img src={currentUser.picture} height='30px' width={'30px'} className="ms-2 rounded-circle" />                    
                            </div> 
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/">Logout</a></li>                            
                            </ul>
                        </div>
                        :
                        <button onClick={()=>navigate('/publish')} className="btn btn-next rounded-pill">
                            Join / Publish
                        </button>
                    }
                </div>
            </div>
        </Fragment>
    )
}

export default Header