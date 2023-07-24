import React, { useEffect } from "react";
import { useNavigate } from "react-router";

const Redirect  = ()=>{
    const navigate = useNavigate()
    useEffect(()=>{
        navigate('/home')
    })
}

export default Redirect