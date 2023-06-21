const { db } = require('../db/db');
const admin = require("firebase-admin")

// Get all patient records
const get_all = async () => {

    let collection_ref = db.collection('users');
    const document_refs = await collection_ref.listDocuments();
    const document_snapshots = await db.getAll(...document_refs);
    const patient_records = await populate_patients(document_snapshots);

    return patient_records
}

// Get all patient records and populate patient records array
const populate_patients = async (document_snapshots) => {

        const patient_records = []

        for(let props in document_snapshots)
        {   
            const data = await get_patient(document_snapshots[props].id)
            patient_records.push(...data)
        }

        return patient_records
}

// Get a set of patient records found under a single user
const get_patient = async(id) => {

    try {
        
        const patient_ref = db.collection(`users/${id}/patient_records`)
        const patient_snapshot = await patient_ref.get()

        if (patient_snapshot.empty){
            return
        }

        const data  = patient_snapshot.docs.map(doc => doc.data())
        return data
        
    } catch (error) {
        console.log(error)
    }
}

module.exports = { get_all }