import React, { useState } from "react";
import {useFormik} from 'formik'
import * as yup from 'yup'
import axios from "axios";
import { useSelector } from "react-redux";
import { Alert, Button, LinearProgress } from "@mui/material";

const Statements = ()=>{
    const api = useSelector(state=>state.ApiReducer.serverApi)
    const [statement, setStatement] = useState([])
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [type, setType] = useState('')
    const formik = useFormik({
        initialValues: {
            type: ''
        },
        validationSchema: yup.object().shape({
            type: yup.string().required('Required   ')
        }),
        onSubmit: (values)=>{
            console.log(values)
            setIsLoading(true)
            setType(values.type)
            if (values.type == 'Purchases') {
                axios.get(`${api}transaction/purchases`, {
                    headers: {
                        'authorization': `Bearer ${JSON.parse(sessionStorage.getItem('token'))}`,
                        'content-type': 'application/json'
                    }
                }).then(res=>{                    
                    setIsLoading(false)
                    setStatement(res.data.purchases)
                }).catch(err=>{
                    setIsLoading(false)
                    !err.response ? setError(err.name) : setError(err.response.data.message)
                })
            } else {                
                axios.get(`${api}transaction/sales`, {
                    headers: {
                        'authorization': `Bearer ${JSON.parse(sessionStorage.getItem('token'))}`,
                        'content-type': 'application/json'
                    }
                }).then(res=>{                    
                    setIsLoading(false)
                    setStatement(res.data.sales)
                }).catch(err=>{
                    setIsLoading(false)
                    !err.response ? setError(err.name) : setError(err.response.data.message)
                })
            }
        }
    })
    return (
        <div className="container">
            <p className="fs-4 fw-normal">
                Statements of Account
            </p>
            <p className="fs-6 fw-light">
                Your sales and purchases are here
            </p>
            <hr />
            <div>
                <div className="form-group d-flex flex-sm-row flex-column">
                    <select name="type" onChange={formik.handleChange} className="form-select mx-1">
                        <option value={''}>Select Statement Type</option>
                        <option>Purchases</option>
                        <option>Sales</option>
                    </select>
                    <Button disabled={isLoading} type="submit" onClick={formik.handleSubmit} className="btn btn-next px-4 fw-bold mx-1 py-2 my-md-0 my-2">Retrieve</Button>
                </div>
            </div>
            {
                isLoading
                ?
                <LinearProgress color="secondary" className="my-4" />
                :
                statement.length !== 0
                ?
                (
                    <div className="my-4">
                        <p>{type}</p>
                        <div className="table-responsive">
                            <table className="table table-striped table-light table-borderless">
                                <thead>
                                    <tr>
                                        <th>S/N</th>
                                        <th>Transaction Reference</th>
                                        <th>Poem Title</th>
                                        <th>ISBN</th>
                                        <th>Amount</th>
                                        <th>Publisher</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        statement.map((each, i)=>(
                                            <tr key={i}>
                                                <td>{i+1}</td>
                                                <td>{each.trx_ref}</td>
                                                <td> {each.title} </td>
                                                <td> {each.ISBN} </td>
                                                <td> {each.price} </td>
                                                <td> {each.publisherName} </td>
                                                <td> {new Date(each.transact_at).toDateString()} </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                )
                :
                error !== ''
                ?
                <Alert severity="error" className="my-3">
                    {error}
                </Alert>
                :
                statement.length == 0 && type !== ''
                ?
                <Alert severity="info" className="my-3">
                    You have no records of {type}
                </Alert>
                :
                ''
            }
        </div>
    )
}

export default Statements