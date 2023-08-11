// import CREATE_PATIENT
import { FIND_PATIENT } from "../actions/findpatients"

const initialState = [
    {
        id: 1,
        name: "chibuike",
        age: 12,
        sex: "male",
        phone: "08033100996",
        email: "amadichibuike72@gmail.com"
    },
    {
        id: 2,
        name: "jeffrey",
        age: 17,
        sex: "male",
        phone: "08064375220",
        email: "amadichibuike@gmail.com"
    },
    {
        id: 3,
        name: "victor",
        age: 8,
        sex: "male",
        phone: "08033744427",
        email: "amadichibuike72@gmail.com"
    },
    {
        id: 4,
        name: "favour",
        age: 10,
        sex: "female",
        phone: "08025020549",
        email: "amadichibuike72@gmail.com"
    }
]

export default function patientReducer(state=initialState, action){
  switch(action.type){
    case FIND_PATIENT: return state.filter(patient => patient.id === action.payload)
    
    // case CREATE_PATIENT  : return [...state, action.payload]
    default: return state
  }
}