import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';

const Second = ()=>{
    const dispatch = useDispatch()
    return(
        <Fragment>
            <form className='px-5'>
                <div className='form-group my-4'>
                    <input className='form-control border border-dark' placeholder='Title' />
                </div>
                <div className='form-group my-4'>
                    <input className='form-control border border-dark' placeholder='Subtitle' />
                </div>
                <div className='form-group my-4'>
                    <input className='form-control border border-dark' placeholder="Poet's name" />
                </div>
                <div className='form-group my-4'>
                    <textarea className='form-control border border-dark' rows={3} placeholder='Description(at least 50 characters)'></textarea>
                </div>
                <button onClick={()=>dispatch({type: 'nextStep', payload: 2})} className='btn btn-next py-2 w-100'>
                    Continue
                </button>
            </form>
        </Fragment>
    )
}

export default Second