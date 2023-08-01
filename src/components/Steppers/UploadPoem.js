import { useFormik } from "formik";
import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { uploadPoemSchema } from "../../schemas";
import { Alert } from "@mui/material";

const UploadPoem = ()=>{
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [fileStatus, setFileStatus]= useState({bookFile: false, coverImage: false})
    const formik = useFormik({
        initialValues: {
            bookFile: '',
            coverImage: ''
        },
        validationSchema: uploadPoemSchema,
        onSubmit: (values)=>{    
            sessionStorage.setItem('publish', JSON.stringify(values))
            dispatch({type: 'nextStep', payload: 1})
        }
    })
    const pickFile = (e)=>{
        const file = e.target.files[0]
        const fs = new FileReader()
        if (file) {
            fs.readAsDataURL(file)
            fs.onload = ()=>{
                console.log(e.target.name)
                if (e.target.name == 'bookFile') {
                    setFileStatus({...fileStatus, bookFile: true})
                    formik.values.bookFile = fs.result
                } else {
                    setFileStatus({...fileStatus, coverImage: true})
                    formik.values.coverImage = fs.result
                }
            }
        } else {
            console.log('No file chosen')
        }
    }
    const clickFileInput = (id)=>{
        document.getElementById(id).click()
    }
    return (
        <Fragment>
            <div className="px-md-5 px-3">
                {
                    formik.errors.bookFile
                    ?
                    <Alert className="my-1" severity="error">
                        {formik.errors.bookFile}
                    </Alert>
                    :
                    formik.errors.coverImage
                    ?
                    <Alert className="my-1" severity="error">
                        {formik.errors.coverImage}
                    </Alert>
                    :
                    ''
                }
                <div className="border border-dark cursor-pointer py-1 px-3 rounded my-4 d-flex justify-content-between">
                    <p onClick={()=>clickFileInput('bookFile')} className="fs-7 pb-0 text-start pt-2 pb-0">
                        <span className="border px-2 py-1 border-dark rounded-circle"><i className="fa fa-file-o"></i></span>
                        <span className="px-2">Choose a book file...</span>
                        <input className="d-none" type="file" onChange={(e)=>pickFile(e)} name="bookFile" id="bookFile" />
                    </p>
                    {
                        fileStatus.bookFile
                        &&
                        <p className="text-end pt-2 pb-0 px-1 btn">
                            <i className="fa fa-trash fw-lighter fs-6 text-danger"></i>
                        </p>
                    }
                </div>
                {/* <div className="border border-dark px-2 py-2 rounded my-4">
                    <p className="fs-7 pb-0 text-start pt-2">
                        <span className="border px-2 py-1 border-dark rounded-circle"><i className="fa fa-file-o"></i></span>
                        <span className="px-2">Choose a sample file...</span>
                    </p>
                </div> */}
                <div className="border border-dark cursor-pointer px-2 py-2 rounded my-4 d-flex justify-content-between">
                    <p onClick={()=>clickFileInput('coverImage')} className="fs-7 pb-0 text-start pt-2">
                        <span className="border px-2 py-1 border-dark rounded-circle"><i className="fa fa-file-o"></i></span>
                        <span className="px-2">Choose a cover image...</span>
                        <input className="d-none" type="file" onChange={(e)=>pickFile(e)} name="coverImage" id="coverImage" />
                    </p>
                    {
                        fileStatus.coverImage
                        &&
                        <p className="text-end pt-2 pb-0 px-1 btn">
                            <i className="fa fa-trash fw-lighter fs-6 text-danger"></i>
                        </p>
                    }
                </div>
                <button onClick={formik.handleSubmit} className="btn btn-next text-white py-2 w-100">
                    Continue
                </button>   
            </div>
        </Fragment>
    )
}

export default UploadPoem