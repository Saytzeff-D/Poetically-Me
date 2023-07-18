import React, { Fragment, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Poems from "../components/Poems";
import Compose from "../components/Compose";

const Dashboard = ()=>{
    const [key, setKey] = useState('poems')
    return (
        <Fragment>
            <div className="bg-poet-board">
                <div className="container py-5">
                    <div className="d-flex justify-content-between">
                        <p className="brand-text fs-1 fw-light">
                            PoeticallyMe
                        </p>
                        <p className="fw-light fs-2">
                            User
                        </p>
                    </div>
                    <hr />
                    <Tabs id='profile-tab' variant='pills' className='my-4' activeKey={key} onSelect={(k)=>setKey(k)} >
                        <Tab tabClassName="text-dark fs-6 fw-lighter" eventKey="poems" title="Poems">
                            {/* <hr /> */}
                            <Poems />
                        </Tab>
                        <Tab tabClassName="text-dark fs-6 fw-lighter" eventKey="compose" title="Compose">
                            {/* <hr /> */}
                            <Compose />
                        </Tab>
                        <Tab tabClassName="text-dark fs-6 fw-lighter" eventKey="publish" title="Publish">
                            {/*  */}
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </Fragment>
    )
}

export default Dashboard