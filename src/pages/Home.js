import React, { Fragment } from "react";

const Home = ()=>{
    return(
        <Fragment>
            <div className="bg-home">
                <div className="container">
                    <div className="d-flex justify-content-between pt-2">
                        <p className="py-2">PoeticallyMe</p>
                        <p>
                            Already a member? <button className="btn btn-light shadow">Login</button>
                        </p>
                    </div>
                    <div className="bg-secondary text-white p-5 text-center border border-dark">
                        <p className="fs-1 fw-bold">Join the largest poetry community</p>
                        <p className="fs-6 fw-light">Over 50,000 poets get feedback and improve their poetry</p>
                        <p className="fs-6 fw-light">Totally free with optional paid memberships.</p>
                        <button className="btn btn-light fw-lighter">Publish your poem now</button>
                    </div>
                    <p className="text-center pt-4 fs-4 fw-light">Made for any poet - from beginners to experts</p>
                    <p className="text-center fs-5 fw-lighter">Encouragement with friendly comments</p>
                </div>
            </div>
        </Fragment>
    )
}

export default Home