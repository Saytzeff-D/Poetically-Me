import React, { Fragment, useEffect, useState } from "react";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import ProfileBg from '../assets/profile.png'
import DeleteIcon from '@mui/icons-material/Delete';
import { Alert, Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { usePaystackPayment } from "react-paystack";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import getSymbolFromCurrency from "currency-symbol-map";
import currency from 'currency.js'
import axios from "axios";

const Cart = ()=>{
    const api = useSelector(state=>state.ApiReducer.serverApi)
    const usersCart = JSON.parse(sessionStorage.getItem('cart'))
    const [cartTray, setCartTray] = useState([])
    const currentUser = useSelector(state=>state.UserReducer.userInfo)
    const [dialogOpen, setDialogOpen] = useState(false)
    const navigate = useNavigate()
    const [totalAmount, setTotalAmount] = useState(0)
    const config = {
        reference: new Date().getTime().toString(),
        email: currentUser.email,
        amount: totalAmount + '00',
        fullname: 'David',
        publicKey: 'pk_test_0a06aa24db1ed02e6787b0dc3ccd9caa537cbabc'
    }
    const onSuccess = (reference)=>{
        let poem_id = []
        let seller_id = []
        cartTray.map((each, i)=>{
            poem_id = [...poem_id, each.poem_id]
            seller_id = [...seller_id, each.user_id]
        })
        const payload = {trx_ref: reference.trxref, poem_id, buyer_id: currentUser.user_id, seller_id }
        axios.post(`${api}transaction/addTransaction`, payload).then(res=>{
            console.log(res.data)
        }).catch(err=>{
            console.log(err)
        })
        console.log(payload)
    }
    const onClose = ()=>{}
    const initializePayment = usePaystackPayment(config)
    useEffect(()=>{
        // usersCart !== null ? setCartTray(usersCart) : setCartTray([])
        if (usersCart !== null) {
            setCartTray(usersCart)
            usersCart.map((each, i)=>{
                setTotalAmount(eval(parseInt(each.price) + totalAmount))
            })
        } else {
            setCartTray([])
        }
    }, [])
    const del = (i)=>{
        let delArray = cartTray.filter((each, ind)=> ind !== i)        
        setCartTray(delArray)
        sessionStorage.setItem('cart', JSON.stringify(delArray))
    }
    const checkOut = ()=>{
        if (!config.email) {
            setDialogOpen(true)
        } else {
            initializePayment(onSuccess, onClose) 
        }
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
                                        <strong data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter fs-3 text-poetical-orange">
                                            {currency(totalAmount, {symbol: getSymbolFromCurrency('NGN')}).format()}
                                        </strong>
                                    </div>
                                    <hr />
                                    <Button onClick={checkOut} className="btn-next rounded fw-bold py-2 px-5">CheckOut</Button>
                                </div>
                            </div>
                        </div>
                    }
                </div>
                <Dialog open={dialogOpen} className="" maxWidth={'xs'} fullWidth={true} >
                    <DialogTitle className="text-dark fs-4 fw-light">
                        You are not logged in...
                    </DialogTitle>
                    <DialogContent>
                        <Button onClick={()=>navigate('/join/in')} className="btn-next mx-1 fs-8 fw-bold rounded-0">Create Account</Button>
                        <Button onClick={()=>navigate('/login')} className="btn-next mx-1 fs-8 fw-bold rounded-0">Log In</Button>
                    </DialogContent>
                </Dialog>
            <Footer />
        </Fragment>
    )
}

export default Cart