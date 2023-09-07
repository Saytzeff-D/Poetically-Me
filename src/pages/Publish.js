import React from "react";
import Logo from '../assets/poetically-me.png'
import { useNavigate } from "react-router";

const Publish = ()=>{
    const navigate = useNavigate()
    
    return (
        <div className="d-flex justify-content-center pt-5 mt-4 mx-4 mx-md-0">
            <div className="col-md-5 col-lg-3 text-center animate__animated animate__slow animate__fadeIn">
                <img src={Logo} className="img-fluid" alt='logo' />
                <p className="fw-bold fs-4">
                    Publish to Poetically Me
                </p>
                <p className="px-2">
                    To upload your EPUB sign in with your poetically me details
                </p>
                <button onClick={()=> navigate('/join/in')} className="btn border border-dark border-1 w-100 text-next py-2">
                    Create Account
                </button>
                <button onClick={()=>{
                    sessionStorage.setItem('purpose', 'publish')
                    navigate('/login')
                }} className="btn btn-next w-100 text-white my-4 py-2">
                    Continue
                </button>
                <hr className="my-0" />
                <p className="pt-2 mb-0 pb-0 fs-7">
                    Already a member? <a href="#" onClick={()=>{
                        sessionStorage.setItem('purpose', 'login')
                        navigate('/login')
                    }} className="text-decoration-none cursor-pointer">Sign In</a>
                </p>
            </div>
        </div>
    )
}

export default Publish