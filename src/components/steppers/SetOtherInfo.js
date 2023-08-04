import { useFormik } from 'formik';
import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { otherInfoSchema } from '../../schemas';
import { Alert } from '@mui/material';

const SetOtherInfo = ()=>{
    const dispatch = useDispatch()
    const [poetryCategory,] = useState(['Rhymes', 'Epics', 'Sonnet', 'Soliloquy', 'Elegies', 'Ode', 'Ballad'])
    const formik = useFormik({
        initialValues: {
            category: '',
            lang: '',
            explicitContent: ''
        },
        validationSchema: otherInfoSchema,
        onSubmit: (values)=>{
            console.log(values)
            const { category, lang, explicitContent } = values
            let publish = JSON.parse(sessionStorage.getItem('publish'))
            sessionStorage.setItem('publish', JSON.stringify({...publish, category, lang, explicitContent}))
            dispatch({type: 'nextStep', payload: 3})
        }
    })
    return(
        <Fragment>
            <form className='px-md-5 px-3'>
                {
                    formik.errors.category
                    ?
                    <Alert severity='error'>
                        {formik.errors.category}
                    </Alert>
                    :
                    formik.errors.lang
                    ?
                    <Alert severity='error'>
                        {formik.errors.lang}
                    </Alert>
                    :
                    formik.errors.explicitContent
                    ?
                    <Alert severity='error'>
                        {formik.errors.explicitContent}
                    </Alert>
                    :
                    ''
                }
                <div className='form-group border border-dark rounded my-4'>
                    <select name='category' onChange={formik.handleChange} onBlur={formik.handleBlur} className='form-select'>
                        <option value={''}>Primary subject category</option>
                        {
                            poetryCategory.map((val, i)=>(
                                <option value={val} key={i}>{val}</option>
                            ))
                        }
                    </select>
                </div>
                {/* <div className='form-group border border-dark rounded my-4'>
                    <select className='form-select'>
                        <option>Interest age</option>
                    </select>
                </div> */}
                <div className='form-group mb-4'>
                    <label className='form-label'>
                        Language
                    </label>
                    <select name='lang' onChange={formik.handleChange} onBlur={formik.handleBlur} className='form-select border border-dark rounded'>
                        <option value={''}>Select Language</option>
                        <option value={'English'}>English</option>
                    </select>
                </div>
                <p className='fs-6 fw-less-bold'>Does your poem contain explicit contents?</p>
                <div className='d-flex'>
                    <div className='form-check me-4'>
                        <input name='explicitContent' onChange={formik.handleChange} onBlur={formik.handleBlur} type='radio' value={'Yes'} className='form-check-input' />
                        <label className='form-check-label'>Yes</label>
                    </div>
                    <div className='form-check me-4'>
                        <input name='explicitContent' onChange={formik.handleChange} onBlur={formik.handleBlur} type='radio' value={'No'} className='form-check-input' />
                        <label className='form-check-label'>No</label>
                    </div>
                </div>
                <button type='submit' onClick={formik.handleSubmit} className='btn btn-next py-2 w-100 my-2'>
                    Continue
                </button>
            </form>
        </Fragment>
    )
}

export default SetOtherInfo