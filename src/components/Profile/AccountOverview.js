import React, { Fragment, useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import Save from '@mui/icons-material/Save';
// import { FileCopyOutlined, Save } from '@mui/icons-material';

const AccountOverview = ()=> {
    return (
        <Fragment>
            <Tabs className='my-2' variant='pills' defaultActiveKey={1}>
                <Tab tabClassName='text-dark' eventKey={1} title="My Profile">
                    <hr />
                    <form>
                        <div className='row'>
                            <div className='form-group my-1 col-md-4'>
                                <label className='form-label'>First Name</label>
                                <input className='form-control border-0 border-bottom rounded-0 border-dotted middle' />
                            </div>
                            <div className='form-group my-1 col-md-4'>
                                <label className='form-label'>Last Name</label>
                                <input className='form-control border-0 border-bottom rounded-0 border-dotted middle' />
                            </div>
                            <div className='form-group my-1 col-md-4'>
                                <label className='form-label'>User Name</label>
                                <input className='form-control border-0 border-bottom rounded-0 border-dotted middle' />
                            </div>
                        </div>
                        <div className='row my-4'>
                            <div className='form-group my-1 col-md-4'>
                                <label className='form-label'>Address</label>
                                <input className='form-control border-0 border-bottom rounded-0 border-dotted middle' />
                            </div>
                            <div className='form-group my-1 col-md-4'>
                                <label className='form-label'>Email Address</label>
                                <input className='form-control border-0 border-bottom rounded-0 border-dotted middle' />
                            </div>
                            <div className='form-group my-1 col-md-4'>
                                <label className='form-label'>Phone Number</label>
                                <input className='form-control border-0 border-bottom rounded-0 border-dotted middle' />
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
                Tab 2 content
                </Tab>
            </Tabs>
        </Fragment>
    )
}

export default AccountOverview