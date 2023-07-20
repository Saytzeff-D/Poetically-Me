import { combineReducers } from "redux";
import ApiReducer from "./api";
import StepperReducer from './stepper';

const appReducer = combineReducers({ ApiReducer, StepperReducer })

export default appReducer