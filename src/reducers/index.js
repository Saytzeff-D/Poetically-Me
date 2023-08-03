import { combineReducers } from "redux";
import ApiReducer from "./api";
import StepperReducer from './stepper';
import UserReducer from "./user";
import PoemReducer from "./poem";

const appReducer = combineReducers({ ApiReducer, StepperReducer, UserReducer, PoemReducer })

export default appReducer