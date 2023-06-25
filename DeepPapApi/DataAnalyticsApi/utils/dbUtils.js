const { db } = require('../db/db');
const admin = require("firebase-admin")

// Get all patient records
const get_all = async () => {

    let collection_ref = db.collection('users');
    const document_refs = await collection_ref.listDocuments();
    const document_snapshots = await db.getAll(...document_refs);
    const patient_records = await populate_patients(document_snapshots);

    console.log(patient_records)


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
const get_patient = async (id) => {

    const patient_ref = db.collection(`users/${id}/patient_records`)
    const patient_snapshot = await patient_ref.get();
    const data  = [];
    
    if (patient_snapshot.empty){
        return data;
    }

    // append all the retrieved data and screeningResults 
    for (const doc of patient_snapshot.docs) {

        const path = `users/${id}/patient_records/${doc.id}/screeningResults`;
        let doc_data = doc.data();
        doc_data.screeningResults = await get_all_screening_results(path);
        data.push(doc_data);
    }

    return data;

}

// Retrieve all screening results under a specific patient record
const get_all_screening_results = async (path) => { 

    const results_ref = db.collection(path);
    const results_snapshot = await results_ref.get();
    let screeningResults = null;
    
    if (!results_snapshot.empty){
        screeningResults = results_snapshot.docs.map((doc) => doc.data());
    }
    
    return screeningResults;
}

module.exports = { get_all }