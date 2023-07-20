import React, { useEffect, useState } from "react";
import Logo from '../assets/poetically-me.png'
import axios from "axios";
import { useNavigate } from "react-router";

const Country = ()=>{
    const navigate = useNavigate()
    const [countries, setCountries] = useState([])
    useEffect(()=>{
        axios.get('https://restcountries.com/v3.1/all?fields=name,flags')
            .then((res)=>{
                console.log(res.data)
                setCountries(res.data)
            })
    }, [])
    return(
        <div className="d-flex justify-content-center mt-5 pt-5 mx-md-0 mx-4">
            <div className="bg-white col-md-5 col-lg-3 p-3 text-center rounded shadow-lg  animate__animated animate__slow animate__fadeIn">
                <img src={Logo} className="img-fluid" />
                <p className="my-3 fw-bold fs-5">
                    What country are you from?
                </p>
                <p className="px-4 fs-6">
                    It's neccessary you provide us with your country to aid the registration process
                </p>
                <form>
                    <div className="form-group my-4">
                        <select className="form-select">
                            {
                                countries.map((each, index)=>(
                                    <option key={index}>{each.name.common}</option>
                                ))
                            }
                        </select>
                    </div>
                    <button onClick={()=>navigate('/join/state')} className="btn mb-4 btn-block w-100 py-2 fw-normal btn-next text-white">
                        Next
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Country