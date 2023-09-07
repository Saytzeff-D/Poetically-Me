import React, { Fragment } from "react";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Logo from '../assets/poetically-me.png'
import UploadPoem from "../components/steppers/UploadPoem";
import { useSelector } from "react-redux";
import AddTitle from "../components/steppers/AddTitle";
import OtherDetails from "../components/steppers/OtherDetails";
import SetOtherInfo from "../components/steppers/SetOtherInfo";

const PublishSteps = ()=>{    
    const activeStep = useSelector(state=>state.StepperReducer.activeStep)
    
    return (
        <Fragment>
            <div className="d-flex justify-content-center mt-md-5 pb-md-0 pb-5">
                <div className="col-md-6 col-lg-4 animate__animated animate__slow animate__fadeIn">
                    <div className="d-flex justify-content-center">
                        <img src={Logo} className="img-fluid" alt='logo' />
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
                        activeStep === 0
                        ?
                        <UploadPoem />
                        :
                        activeStep === 1
                        ?
                        <AddTitle />
                        :
                        activeStep === 2
                        ?
                        <SetOtherInfo />
                        :
                        activeStep === 3
                        ?
                        <OtherDetails />
                        :
                        ''
                    }
                </div>
            </div>
        </Fragment>
    )
}

export default PublishSteps