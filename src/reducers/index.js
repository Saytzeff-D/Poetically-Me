import { combineReducers } from "redux";
import ApiReducer from "./api";
import StepperReducer from './stepper';
import UserReducer from "./user";

const appReducer = combineReducers({ ApiReducer, StepperReducer, UserReducer })

export default appReducer