import React, { Fragment, useEffect, useState } from "react";
import User from '../../assets/user.png'
import { useNavigate } from "react-router";
import axios from "axios";
import { useSelector } from "react-redux";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from "@mui/material";

const PoemBar = (props)=>{
    const api = useSelector(state=>state.ApiReducer.serverApi)
    const cartArr = JSON.parse(sessionStorage.getItem('cart'))
    const [jwt, setJwt] = useState('')
    const navigate = useNavigate()
    const [cartTray, setCartTray] = useState(0)

    const handlePublish = ()=>{
        navigate('/publish')
        sessionStorage.setItem('purpose', 'publish')
    }
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
            <div className="poem-bar py-3">
                <div className="d-md-block d-none">
                    <input className="form-control" placeholder="Search Poem" />
                </div>
                <div className="d-flex justify-content-between">
                    <div className="mt-3 mx-3 cursor-pointer" onClick={()=>navigate('/cart')} >
                        <Badge badgeContent={cartTray} color="secondary">
                            <ShoppingCartIcon className="text-dark fs-4" />
                        </Badge>
                    </div>
                    <div className="mt-3">
                        <p className="mx-3"><i className="fa fa-bell text-dark fa-lg"></i></p>
                    </div>
                    {
                        jwt !== ''
                        ?
                        <div onClick={()=>navigate('/profile')} className="bg-poetical-orange user-pill text-white px-3 rounded-pill cursor-pointer">
                            {jwt.firstName} <img src={jwt.picture} width='30px' height='30px' className="ms-2 rounded-circle" />
                        </div>
                        :
                        <button onClick={handlePublish} className="btn btn-next rounded-pill">
                            Join / Publish
                        </button>
                    }                
                </div>
            </div>
        </Fragment>
    )
}

export default PoemBar