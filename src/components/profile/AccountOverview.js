import React, { Fragment, useEffect, useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import Save from '@mui/icons-material/Save';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Alert, Snackbar } from '@mui/material';

const AccountOverview = ()=> {
    const dispatch = useDispatch()
    const currentUser = useSelector(state=>state.UserReducer.userInfo)
    const [picture, setPicture] = useState()
    const [isUploading, setIsUploading] = useState(false)
    const [isDisabled, setIsDisabled] = useState(true)
    const api = useSelector(state=>state.ApiReducer.serverApi)
    const token = JSON.parse(sessionStorage.getItem('token'))
    const [open, setOpen] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const pickPicture = ()=>{
        document.getElementById('fileInput').click()
    }
    const handleChange = (e)=>{
        const file = e.target.files[0]
        if (file) {
            const fs = new FileReader()
            fs.readAsDataURL(file)
            fs.onload = ()=>{            
                setPicture(fs.result)
                setIsDisabled(false)
            }
        } else { }
    }
    const changePicture = ()=>{
        setIsUploading(true)
        axios.post(
            `${api}user/profilePicture`,
            {picture},
            {
                headers: {
                    'authorization': `Bearer ${token}`,
                    'content-type': 'application/json'
                }
            }
        ).then(res=>{
            if(res.data.status){
                dispatch({type: 'userInfo', payload: res.data.user})
                setError('')
                setSuccess(res.data.message)
                setOpen(true)
                setIsUploading(false)
            }else{
                setError(res.data.message)
                setIsUploading(false)
                setOpen(true)
            }
        }).catch(err=>{
            console.log(err)
            setError(err.response.data.message || err.message)
            setOpen(true)
            setIsUploading(false)
        })
    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }    
        setOpen(false);
    }

    useEffect(()=>{
        setPicture(currentUser.picture)
    }, [currentUser])
    return (
        <Fragment>
            <Tabs className='my-2' variant='pills' defaultActiveKey={1}>
                <Tab tabClassName='text-dark' eventKey={1} title="My Profile">
                    <hr />
                    <form>
                        <div className='row mt-5'>
                            <div className='form-group my-1 col-md-4'>
                                <label className='form-label'>First Name</label>
                                <input value={currentUser.firstName} className='form-control border-0 border-bottom rounded-0 border-dotted middle' />
                            </div>
                            <div className='form-group my-1 col-md-4'>
                                <label className='form-label'>Last Name</label>
                                <input value={currentUser.lastName} className='form-control border-0 border-bottom rounded-0 border-dotted middle' />
                            </div>
                            <div className='form-group my-1 col-md-4'>
                                <label className='form-label'>User Name</label>
                                <input value={currentUser.username} className='form-control border-0 border-bottom rounded-0 border-dotted middle' />
                            </div>
                        </div>
                        <div className='row my-4'>
                            <div className='form-group my-1 col-md-4'>
                                <label className='form-label'>Address</label>
                                <input value={currentUser.state + ', ' + currentUser.country} className='form-control border-0 border-bottom rounded-0 border-dotted middle' />
                            </div>
                            <div className='form-group my-1 col-md-4'>
                                <label className='form-label'>Email Address</label>
                                <input value={currentUser.email} className='form-control border-0 border-bottom rounded-0 border-dotted middle' />
                            </div>
                            <div className='form-group my-1 col-md-4'>
                                <label className='form-label'>Phone Number</label>
                                <input value={currentUser.phoneNum} className='form-control border-0 border-bottom rounded-0 border-dotted middle' />
                            </div>
                        </div>
                        <div className='d-flex justify-content-end'>
                            <Fab className='btn-next mx-1' aria-label="add">
                                <Save />
                            </Fab>
                            <Fab className='btn-next mx-1' aria-label="add">
                                <EditIcon />
                            </Fab>
                        </div>
                    </form>
                </Tab>
                <Tab tabClassName='text-dark' eventKey={2} title="Profile Picture">
                    <hr />
                    <p className='fs-6 fw-light'>
                        Click on the image to pick your desired picture
                    </p>
                    <div className="thumbnail mx-1" onClick={pickPicture}>
                        <input type='file' className='d-none' id='fileInput' onChange={(e)=>handleChange(e)} />
                        <div className="icon">
                            <i className="fa fa-plus fa-2x" aria-hidden="true"></i>
                        </div>
                        <img src={picture} className='rounded-circle img-fluid picture' />
                    </div>
                        <button onClick={changePicture} className={isUploading ? 'btn disabled py-2 mx-1 rounded-0' : 'btn btn-next py-2 mx-1'} disabled={isDisabled} >
                            {
                                isUploading 
                                ? 
                                (
                                    <div>
                                        <span className='spinner-border spinner-border-sm'></span> Uploading
                                    </div>
                                ) 
                                : 
                                'Change Picture'
                            }
                        </button>
                        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                            <Alert onClose={handleClose} severity={error !== '' ? 'error' : 'success'} variant='filled' sx={{ width: '100%' }}>
                                {
                                    error !== ''
                                    ?
                                    error
                                    :
                                    success
                                }
                            </Alert>
                        </Snackbar>
                </Tab>
            </Tabs>
        </Fragment>
    )
}

export default AccountOverview
