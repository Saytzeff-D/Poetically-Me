import React, { Fragment } from "react";
import User from '../../assets/user.png'

const PoemBar = ()=>{
    return (
        <Fragment>
            <div className="poem-bar py-3">
                <div className="d-md-block d-none">
                    <input className="form-control" placeholder="Search Poem" />
                </div>
                <div className="d-flex justify-content-between">
                    <div className="mt-3">
                        <img src={require('../../assets/cart.png')} className="mx-3" height='25px' />
                    </div>
                    <div className="mt-3">
                        <p className="mx-3"><i className="fa fa-bell text-dark fa-lg"></i></p>
                    </div>
                    <div className="bg-poetical-orange user-pill text-white px-3 rounded-pill">
                        Mike <img src={User} height='30px' className="ms-2" />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default PoemBar