import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';

const Third = ()=>{
    const dispatch = useDispatch()
    return(
        <Fragment>
            <form className='px-5'>
                <div className='form-group my-4'>
                    <select className='form-select'>
                        <option>Primary subject category</option>
                    </select>
                </div>
                <div className='form-group my-4'>
                    <select className='form-select'>
                        <option>Interest age</option>
                    </select>
                </div>
                <div className='form-group mb-4'>
                    <label className='form-label'>
                        Language
                    </label>
                    <select className='form-select'>
                        <option>English</option>
                    </select>
                </div>
                <p className='fs-6 fw-less-bold'>Does your poem contain explicit contents?</p>
                <div className='d-flex'>
                    <div className='form-check me-4'>
                        <input type='radio' className='form-check-input' />
                        <label className='form-check-label'>Yes</label>
                    </div>
                    <div className='form-check me-4'>
                        <input type='radio' className='form-check-input' />
                        <label className='form-check-label'>No</label>
                    </div>
                </div>
                <button onClick={()=>dispatch({type: 'nextStep', payload: 3})} className='btn btn-next py-2 w-100'>
                    Continue
                </button>
            </form>
        </Fragment>
    )
}

export default Third