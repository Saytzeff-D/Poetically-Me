import React, { Fragment } from "react";
import User from '../assets/user.png'

const PoemBar = ()=>{
    return (
        <Fragment>
            <div className="d-flex justify-content-between">
                <div>
                    <input className="form-control" placeholder="Search Poem" />
                </div>
                {/* <div className="d-flex justify-content-between">
                    <div className="mt-3">
                        <img src={require('../assets/cart.png')} className=" mx-3" height='25px' />
                    </div>
                    <div className="mt-3">
                        <p className="mx-3"><i className="fa fa-bell fa-lg"></i></p>
                    </div>
                    <div className="bg-poetical-orange rounded-pill text-white px-4 py-3">
                        Mike <img src={User} height='30px' />
                    </div>
                </div> */}
            </div>
        </Fragment>
    )
}

export default PoemBar