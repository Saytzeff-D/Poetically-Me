import React, { Fragment, useState } from 'react';
import Info from './Info';

const Fourth = ()=>{
    const [open, setOpen] = useState(false)
    const upload = (e)=>{
        e.preventDefault()
        setOpen(true)
    }
    return(
        <Fragment>
            <form className='px-5'>
                <div className='form-group my-4'>
                    <input className='form-control border border-dark' placeholder='Publisher name' />
                </div>
                <div className='form-group my-4'>
                    <input className='form-control border border-dark' placeholder='ISBN Number' />
                </div>
                <div className='form-group mb-4'>
                    <label className='form-label'>
                        Original Publication Date
                    </label>
                    <input type='date' className='form-control border border-dark' placeholder="Original Publication Date" />
                </div>
                <button onClick={(e)=>upload(e)} className='btn btn-next py-2 w-100'>
                    Upload Poem
                </button>
            </form>
            <Info open={open} />
        </Fragment>
    )
}

export default Fourth