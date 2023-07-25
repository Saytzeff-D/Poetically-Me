import React, { Fragment } from "react";
import User from '../../assets/user.png'
import { useNavigate } from "react-router";

const PoemBar = (props)=>{
    const { jwt } = props
    const navigate = useNavigate()

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
                    {
                        jwt !== null
                        ?
                        <div className="bg-poetical-orange user-pill text-white px-3 rounded-pill">
                            Mike <img src={User} height='30px' className="ms-2" />
                        </div>
                        :
                        <button onClick={()=>navigate('/publish')} className="btn btn-next rounded-pill">
                            Publish Now
                        </button>
                    }                
                </div>
            </div>
        </Fragment>
    )
}

export default PoemBar