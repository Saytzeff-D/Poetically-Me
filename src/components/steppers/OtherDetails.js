import React, { Fragment, useEffect, useState } from 'react';
import Info from './ModalBox';
import { Backdrop, CircularProgress } from '@mui/material';
import { useFormik } from 'formik';
import { OtherDetailsSchema } from '../../schemas';
import { Alert } from '@mui/material';
import axios from 'axios';
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { useSelector } from 'react-redux';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { useNavigate } from 'react-router';

const OtherDetails = ()=>{
    const [open, setOpen] = useState(false)
    const [backdrop, setBackdrop] = useState(false)
    const api = useSelector(state=>state.ApiReducer.serverApi)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    useEffect(()=>{            
        if (sessionStorage.getItem('action') !== null && sessionStorage.getItem('action') == 'aboutPublishing') {
            upload(JSON.parse(sessionStorage.getItem('publish')))
        } else {
            console.log('me')
        }
    }, [])
    const formik = useFormik({
        initialValues: {
            publisherName: '',
            ISBN: '',
            publicationDate: ''
        },
        validationSchema: OtherDetailsSchema,
        onSubmit: (values)=>{
            let { publisherName, ISBN, publicationDate } = values            
            console.log(values)
            let publish = JSON.parse(sessionStorage.getItem('publish'))
            const publishObj = {...publish, publisherName, ISBN, publicationDate: new Date(publicationDate).toLocaleDateString() }
            sessionStorage.setItem('publish', JSON.stringify(publishObj))
            upload(publishObj)
        }
    })
    const upload = (publishObj)=>{
        setBackdrop(true)
            axios.post(
                `${api}poem/upload`,
                publishObj,
                {
                    headers: {
                        'Authorization': `Bearer ${JSON.parse(sessionStorage.getItem('token'))}`,
                        'Content-Type': 'application/json'
                    }
                }
            ).then(res=>{
                sessionStorage.removeItem('action')
                setBackdrop(false)
                console.log(res.data)
                if (res.data.status) {
                    setOpen(true)
                } else {
                    setError('Unable to upload poem')
                }
            }).catch(err=>{
                setBackdrop(false)
                console.log(err)
                if (err.response) {
                    if (err.response.data.message == 'Token Expired' || err.response.data.message == 'Invalid Token') {
                        sessionStorage.setItem('action', 'aboutPublishing')
                        navigate('/login')
                    } else {                        
                        setError(err.response.data.message + '. Submit again!')
                    }
                } else {
                    setError(err.message)
                }
            })
    }
    return(
        <Fragment>
            <div className='px-3 px-md-5'>
                {
                    formik.errors.publisherName
                    ?
                    <Alert severity='error'>
                        {formik.errors.publisherName}
                    </Alert>
                    :
                    formik.errors.ISBN
                    ?
                    <Alert severity='error'>
                        {formik.errors.ISBN}
                    </Alert>
                    :
                    formik.errors.publicationDate
                    ?
                    <Alert severity='error'>
                        {formik.errors.publicationDate}
                    </Alert>
                    :
                    error !== ''
                    &&
                    <Alert severity='error'>
                        {error}
                    </Alert>
                }
                <div className='form-group my-4'>
                    <input onChange={formik.handleChange} onBlur={formik.handleBlur} name='publisherName' className='form-control border border-dark' placeholder='Publisher name' />
                </div>
                <div className='form-group my-4'>
                    <input onChange={formik.handleChange} onBlur={formik.handleBlur} name='ISBN' className='form-control border border-dark' placeholder='ISBN Number' />
                </div>
                <div className='form-group mb-4'>
                    <label className='form-label'>
                        Original Publication Date
                    </label>
                    <input onChange={formik.handleChange} onBlur={formik.handleBlur} name='publicationDate' type='date' className='form-control border border-dark' placeholder="Original Publication Date" />
                </div>
               {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    label="Controlled picker"
                    name='publicationDate'
                    onChange={formik.handleChange}
                    />
               </LocalizationProvider> */}
                <button type='submit' onClick={formik.handleSubmit} className='btn btn-next py-2 w-100'>
                    Upload Poem
                </button>
            </div>
            <Info open={open} />
            <Backdrop color='#fff' open={backdrop}>
                <span className='spinner-border text-white fs-7'></span>
            </Backdrop>
        </Fragment>
    )
}

export default OtherDetails