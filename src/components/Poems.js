import React, { Fragment } from "react";
import Picture from '../assets/profile.jpg'
import { useState } from "react";

const Poems = ()=>{
    const [poemTray, setPoemTray] = useState([0,1,1,2,3,3])
    return (
        <Fragment>
            <div className="row w-100">
                {
                    poemTray.map((each, index)=>(
                        <div className="col-md-7 border bg-poem shadow p-4">
                            <div className="d-flex">
                                <img src={Picture} width='50px' height='50px' className="rounded-circle" />
                                <div className="mx-2">
                                    <p className="mb-0 fw-light">Dan Elison</p>
                                    <p className="fw-lighter">Sep. 29</p>
                                </div>
                            </div>
                            <p className="fw-normal fs-6">
                                Nothing Gold Can Stay
                            </p>
                            <div className="fw-light pt-4">
                                <p>Nature's first green is gold,</p>
                                <p>Her hardest hue to hold.</p>

                                <p>Her early leaf's a flower;</p>
                                <p>But only so an hour...</p>
                            </div>
                            <a href="/poet-board" className="text-decoration-none">Read More <i className="fa fa-arrow-right"></i></a>
                            <div className="my-3">
                                <div className="row">
                                    <div className="col-10">
                                        <textarea className="form-control" placeholder="Comment on this poem" rows='1' />
                                    </div>
                                    <div className="col-2">
                                        <button className="btn btn-secondary">
                                            <i className="fa fa-comment-o"></i> 70
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </Fragment>
    )
}

export default Poems