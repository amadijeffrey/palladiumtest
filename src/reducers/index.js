import { combineReducers } from "@reduxjs/toolkit";
import patientReducer from "./patientReducer";

const rootreducer = combineReducers({
   patients: patientReducer
})

export default rootreducer