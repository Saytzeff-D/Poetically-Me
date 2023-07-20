import React, { Fragment } from 'react';

const Fourth = ()=>{
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
                <button className='btn btn-next py-2 w-100'>
                    Upload Poem
                </button>
            </form>
        </Fragment>
    )
}

export default Fourth