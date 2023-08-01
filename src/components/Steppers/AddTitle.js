import { useFormik } from 'formik';
import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { addTitleSchema } from '../../schemas';
import { Alert } from '@mui/material';

const AddTitle = ()=>{
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            title: '',
            poet: '',
            desc: ''
        },
        validationSchema: addTitleSchema,
        onSubmit: (values)=>{    
            const { title, poet, desc } = values
            let publish = JSON.parse(sessionStorage.getItem('publish'))
            sessionStorage.setItem('publish', JSON.stringify({...publish, title, poet, desc}))
            dispatch({type: 'nextStep', payload: 2})
        }
    })
    return(
        <Fragment>
            <form className='px-md-5 px-3'>
                {
                    formik.errors.title
                    ?
                    <Alert severity='error'>
                        {formik.errors.title}
                    </Alert>
                    :
                    formik.errors.poet
                    ?
                    <Alert severity='error'>
                        {formik.errors.poet}
                    </Alert>
                    :
                    formik.errors.desc
                    ?
                    <Alert severity='error'>
                        {formik.errors.desc}
                    </Alert>
                    :
                    ''
                }
                <div className='form-group my-4'>
                    <input className='form-control border border-dark' onChange={formik.handleChange} onBlur={formik.handleBlur} name='title' placeholder='Title' />
                </div>
                {/* <div className='form-group my-4'>
                    <input className='form-control border border-dark' placeholder='Subtitle' />
                </div> */}
                <div className='form-group my-4'>
                    <input className='form-control border border-dark' onChange={formik.handleChange} onBlur={formik.handleBlur} name='poet' placeholder="Poet's name" />
                </div>
                <div className='form-group my-4'>
                    <textarea className='form-control border border-dark' onChange={formik.handleChange} onBlur={formik.handleBlur} name='desc' rows={3} placeholder='Description(at least 50 characters)'></textarea>
                </div>
                <button type='submit' onClick={formik.handleSubmit} className='btn btn-next py-2 w-100'>
                    Continue
                </button>
            </form>
        </Fragment>
    )
}

export default AddTitle