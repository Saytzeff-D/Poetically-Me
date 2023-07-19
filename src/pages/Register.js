import React, { Fragment } from "react";
import { Outlet } from "react-router";

const Register = ()=>{
    return (
        <Fragment>
            <div className="bg-register">
                <Outlet />
            </div>
        </Fragment>
    )
}

export default Register