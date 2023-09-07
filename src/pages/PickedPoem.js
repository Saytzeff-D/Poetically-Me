import React, { Fragment, useEffect, useState } from "react";
import { Alert, Button, Dialog, DialogContent, DialogTitle, Snackbar } from "@mui/material";
// import getSymbolFromCurrency from "currency-symbol-map";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import axios from "axios";

const PickedPoem = ()=>{
    const api = useSelector(state=>state.ApiReducer.serverApi)
    const currentUser = useSelector(state=>state.UserReducer.userInfo)
    const [book, setBook] = useState('')
    const pickedBook = JSON.parse(sessionStorage.getItem('book'))
    const navigate = useNavigate()
    const [dialogOpen, setDialogOpen] = useState(false)
    const [openSnackbar, setOpenSnackbar] = useState(false)
    const [message, setMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    useEffect(()=>{
        pickedBook == null ? navigate('/home') : setBook(pickedBook)        
    }, [navigate, pickedBook])
    const addToCart = ()=>{
        let arr = []
        const storedCart = JSON.parse(sessionStorage.getItem('cart'))
        // let newCart = storedCart == null ? [...arr, book] : [...storedCart, book]
        if (storedCart == null) {
            let newCart = [...arr, book]
            sessionStorage.setItem('cart', JSON.stringify(newCart))
            sessionStorage.removeItem('book')
            navigate('/cart')
        } else {
            let bookExistInCart = storedCart.find((each, i)=>(each.poem_id === book.poem_id))
            if (bookExistInCart === undefined) {
                let newCart = [...storedCart, book]
                sessionStorage.setItem('cart', JSON.stringify(newCart))
                sessionStorage.removeItem('book')
                navigate('/cart')
            } else {
                setMessage('Item already in cart')
                setOpenSnackbar(true)
            }
        }        
    }
    const handleClose = (event, reason)=>{
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false)
    }
    const addToLibrary = ()=>{
        let payload = { poem_id: book.poem_id, reader_id: currentUser.user_id }
        if (currentUser.user_id === undefined) {
            setDialogOpen(true)
        } else {
            setIsLoading(true)
            axios.post(`${api}library/addLibrary`, payload).then(res=>{
                setIsLoading(false)
                setMessage('Added Successfully')
                navigate('/profile/my-library')
                setOpenSnackbar(true)
            }).catch(err=>{
                setIsLoading(false)
                setOpenSnackbar(true)
                !err.response ? setMessage(err.name) : setMessage(err.response.data.message)
            })
        }
    }
    return (
        <Fragment>
            <div className="container mt-5">
                <p className="fs-4 pt-4">Buy Book <i className="fa fa-book"></i> </p>
                <hr />
                <div className="row w-100 my-5 border-bottom">
                    <div className="col-md-4 pb-3">
                        <div className="mb-4">
                            <img src={book.coverImage} alt='cover' />
                        </div>
                        <Button onClick={addToLibrary} disabled={isLoading} className="bg-poetical-orange text-dark fw-bold py-2 px-4 border-0">                           
                           {
                            isLoading
                            ?
                            <>
                                <span className="spinner-border spinner-border-sm"></span> <span className="ps-1">Please wait...</span>
                            </>
                            :
                            <>Add to Library</>
                           }
                        </Button>
                    </div>
                    <div className="col-md-8 border-start my-5 my-md-0">                        
                        <p>Title: <span className="fw-light">{book.title}</span></p>
                        <p>Author: <span className="fw-light">{book.poet}</span></p>
                        <p>Language: <span className="fw-light">{book.lang}</span></p>
                        <p>Publisher: <span className="fw-light">{book.publisherName}</span></p>
                        <p>ISBN: <span className="fw-light">{book.ISBN}</span></p>
                        <p>Description: <span className="fw-light">{book.poem_desc}</span></p>
                        <div className="d-flex justify-content-end">
                            <Button onClick={addToCart} className="btn-next fw-bold py-2 px-4 border-0">Add to Cart</Button>
                        </div>
                    </div>
                </div>
            </div>

            <Dialog open={dialogOpen} className="" maxWidth={'xs'} fullWidth={true} >
                <DialogTitle className="text-dark fs-4 fw-light">
                    You are not logged in...
                </DialogTitle>
                <DialogContent>
                    <Button onClick={()=>{
                        navigate('/login')
                        sessionStorage.setItem('purpose', 'library')
                    }} className="btn-next mx-1 fs-8 fw-bold rounded-0">Log In</Button>
                    <Button onClick={()=>setDialogOpen(false)} className="btn-next mx-1 fs-8 fw-bold rounded-0">Close</Button>
                </DialogContent>
            </Dialog>

            <Snackbar open={openSnackbar} onClose={handleClose} autoHideDuration={4000} anchorOrigin={{horizontal: 'center', vertical: 'bottom'}} >
                <Alert severity={message.includes('Successfully') ? 'success' : 'error'} onClose={handleClose}>
                    {message}
                </Alert>
            </Snackbar>
        </Fragment>
    )
}

export default PickedPoem