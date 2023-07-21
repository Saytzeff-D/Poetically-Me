import React, { Fragment } from "react";
import Logo from '../../assets/poetically-me.png'
import User from '../../assets/user.png'

const Header = ()=>{
    return (
        <Fragment>
            <div className="d-flex justify-content-around w-100 m-0">
                <div>
                    <img src={Logo} className="" height='70px' />
                </div>
                <div className="d-md-block d-none">
                    <input className="form-control mt-3" placeholder="Search Poem" />
                </div>
                <div className="d-flex justify-content-between">
                    <div className="mt-3">
                        <img src={require('../../assets/cart.png')} className="mx-3" height='25px' />
                        </div>
                        <div className="mt-3">
                            <p className="mx-3"><i className="fa fa-bell text-dark fa-lg"></i></p>
                        </div>
                        <div className="bg-poetical-orange user-pill text-white my-2 ps-2 rounded-pill">
                            Mike <img src={User} height='30px' className="mx-2" />
                        </div>
                    </div>
            </div>
        </Fragment>
    )
}

export default Header