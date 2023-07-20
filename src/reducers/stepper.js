const initState = {
    activeStep: 0
}

const StepperReducer = (state=initState, action)=>{
    switch (action.type) {
        case 'nextStep':
            return {...state, activeStep: action.payload}
    
        default:
            return state
    }
}

export default StepperReducer