
export const FIND_PATIENT = "find_patient"

const findPatient = (id) => {
    return {
        type: FIND_PATIENT,
        payload: id
    }
}

export { findPatient }