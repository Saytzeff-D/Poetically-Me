import React, { Fragment } from "react";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Logo from '../assets/poetically-me.png'
import First from "../components/Steppers/First";
import { useSelector } from "react-redux";
import Second from "../components/Steppers/Second";
import Fourth from "../components/Steppers/Fourth";
import Third from "../components/Steppers/Third";

const PublishSteps = ()=>{
    const activeStep = useSelector(state=>state.StepperReducer.activeStep)
    
    return (
        <Fragment>
            <div className="d-flex justify-content-center mt-5">
                <div className="col-md-6 col-lg-4 animate__animated animate__slow animate__fadeIn">
                    <div className="d-flex justify-content-center">
                        <img src={Logo} className="img-fluid" />
                    </div>
                    <p className="my-1 text-center fw-bold fs-5">
                        Publish poem in 4 easy steps
                    </p>
                    <Stepper activeStep={activeStep} alternativeLabel>
                        <Step key='Upload Poem'>
                            <StepLabel>Upload Poem</StepLabel>
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
                    {
                        activeStep == 0
                        ?
                        <First />
                        :
                        activeStep == 1
                        ?
                        <Second />
                        :
                        activeStep == 2
                        ?
                        <Third />
                        :
                        activeStep == 3
                        ?
                        <Fourth />
                        :
                        ''
                    }
                </div>
            </div>
        </Fragment>
    )
}

export default PublishSteps