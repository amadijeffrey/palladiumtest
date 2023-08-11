import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate} from "react-router-dom"

export default function Home() {
    const navigate = useNavigate()

    const patients = useSelector(({ patients }) => {
        return patients
    })

    return (
        <div  style={{ width: "100%"}}>
            <h3>Patient List</h3>
            <div style={{ margin: "0px auto"}}>
                <table style={{backgroundColor: "gray", padding: "5px", width: "80vw"}}>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Sex</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        patients.map(patient => {
                            return <tr key={patient.id} style={{backgroundColor: "lightgray"}} onClick={() => navigate(`/patients/${patient.id}`)}>
                                <td >{patient.name}</td>
                                <td>{patient.age}</td>
                                <td>{patient.sex}</td>
                                <td>{patient.phone}</td>
                                <td>{patient.email}</td>
                            </tr>
                        })
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}