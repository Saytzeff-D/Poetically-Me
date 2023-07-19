import React, { Fragment } from "react";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Logo from '../assets/poetically-me.png'
import UploadPoem from "../components/UploadPoem";

const PublishSteps = ()=>{
    return (
        <Fragment>
            <div className="d-flex justify-content-center mt-5 mx-md-0 mx-4">
                <div className="col-md-7 col-lg-4 text-center">
                    <img src={Logo} className="img-fluid" />
                    <p className="my-1 fw-bold fs-5">
                        Publish poem in 4 easy steps
                    </p>
                    <Stepper activeStep={0} alternativeLabel>
                        <Step key='Upload Poem'>
                            <StepLabel>Upload Poem</StepLabel>
                            <UploadPoem />
                        </Step>
                        <Step key='Add Title'>
                            <StepLabel>Add Title</StepLabel>
                        </Step>
                        <Step key='Set Other info'>
                            <StepLabel>Set Other info</StepLabel>
                        </Step>
                        <Step key='Other details'>
                            <StepLabel>Other details</StepLabel>
                        </Step>
                    </Stepper>
                </div>
            </div>
        </Fragment>
    )
}

export default PublishSteps