import React,{useEffect} from "react";
import { useParams } from "react-router-dom";
import { findPatient } from "../actions/findpatients";
import { useSelector, useDispatch } from "react-redux";

export default function PatientDetails(){
    const {id} = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
       dispatch(findPatient(id))
    }, [])

    const patient = useSelector(({ patients }) => {
        return patients
    })

   console.log(patient)

    return(
        <div>
            <h4>Patient Info</h4>
            <button>Edit details</button>
            <ul>
               <li>{`name: ${patient.name}`}</li>
           </ul>

        </div>
    )
}