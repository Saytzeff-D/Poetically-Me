import React, { Fragment } from "react";
import User from '../assets/user.png'
import Logo from '../assets/poetically-me.png'

const Header = ()=>{
    return (
        <Fragment>
            <div className="d-flex justify-content-around">
                <div>
                    <img src={Logo} className="" height='70px' />
                </div>
                {/* <div className="">
                    <input className="form-control mt-3" placeholder="Search Poem" />
                </div>
                <div className="d-flex">
                    <div className="mt-5">
                        <img src={require('../assets/cart.png')} className="mx-3" height='25px' />
                    </div>
                    <div className="mt-5">
                        <p className="mx-3"><i className="fa fa-bell fa-lg"></i></p>
                    </div>
                    <button className="btn bg-poetical-orange text-white px-4 py-2 rounded-pill">
                        Mike <img src={User} height='30px' />
                    </button>
                </div> */}
            </div>
        </Fragment>
    )
}

export default Header