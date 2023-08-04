import React, { Fragment, useEffect, useState } from "react";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import ProfileBg from '../assets/profile.png'
import DeleteIcon from '@mui/icons-material/Delete';
import { Alert, Button } from "@mui/material";
import { usePaystackPayment } from "react-paystack";
import { useNavigate } from "react-router";

const Cart = ()=>{
    const usersCart = JSON.parse(sessionStorage.getItem('cart'))
    const [cartTray, setCartTray] = useState([])
    const navigate = useNavigate()
    const config = {
        reference: new Date().getTime().toString(),
        email: 'ololadedavid15@gmail.com',
        amount: '90999',
        fullname: 'David',
        publicKey: 'pk_test_0a06aa24db1ed02e6787b0dc3ccd9caa537cbabc'
    }
    const onSuccess = (reference)=>{}
    const onClose = ()=>{}
    const initializePayment = usePaystackPayment(config)
    useEffect(()=>{
        usersCart !== null ? setCartTray(usersCart) : setCartTray([])
    }, [])
    const del = (i)=>{
        let delArray = cartTray.filter((each, ind)=> ind !== i)        
        setCartTray(delArray)
        sessionStorage.setItem('cart', JSON.stringify(delArray))
    }
    return(
        <Fragment>
            <Header />
                <img src={ProfileBg} className="w-100" height={'100px'} />
                <div className="container">
                    <div className="border-bottom my-4">
                        <p className="fs-2">Cart</p>
                    </div>
                    {
                        cartTray.length == 0
                        ?
                        <div>
                            <Alert severity="info" className="col-md-6">
                                Your cart is empty
                            </Alert>
                            <Button onClick={()=>navigate('/home')} className="my-5 btn-next fw-bold px-4 py-2">See Top Poems</Button>
                        </div>
                        :
                        <div className="row w-100 mb-4">
                            <div className="col-md-8">
                                <div className="table-responsive">
                                    <table className="table table-hover table-hover">
                                        <tbody>
                                            {
                                                cartTray.map((item, i)=>(
                                                    <tr key={i}>
                                                        <td>{item.title}</td>
                                                        <td>By {item.poet}</td>
                                                        <td>{item.price}</td>
                                                        <td>
                                                            <Button onClick={()=>del(i)} className="btn border-0 text-danger rounded-circle"><DeleteIcon fontSize="medium" /></Button>
                                                        </td>
                                                    </tr>                                        
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="border rounded p-3">
                                    <p className="fs-6">{cartTray.length} items in cart</p>
                                    <div className="d-flex justify-content-between">
                                        <p>Total: </p>
                                        <strong className="fs-3 text-poetical-orange">$9,000</strong>
                                    </div>
                                    <hr />
                                    <Button onClick={()=>initializePayment(onSuccess, onClose)} className="btn-next rounded fw-bold py-2 px-5">CheckOut</Button>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            <Footer />
        </Fragment>
    )
}

export default Cart