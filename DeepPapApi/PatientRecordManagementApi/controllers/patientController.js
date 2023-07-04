const { firestore } = require("firebase-admin")
const { db } = require("../db/db")
const { get_all_screening_results } = require("./screeningResultController")

// Retrieve all patient records
const get_all_patients = async (req, res, next) => {

    try {

        const uid = req.query.uid;
        const patient_ref = db.collection(`users/${uid}/patient_records`)
        const patient_snapshot = await patient_ref.get();
        const data  = [];
      
        if (patient_snapshot.empty){
            return res.status(200).json({messsage : "There is no data!"})
        }

        // append all the retrieved data and screeningResults 
        for (const doc of patient_snapshot.docs) {

            const path = `users/${uid}/patient_records/${doc.id}/screeningResults`;
            let doc_data = doc.data();
            doc_data.real_patient_id = doc.id;
            doc_data.screeningResults = await get_all_screening_results(path);
            data.push(doc_data);
        }

        res.status(200).json({ data });
    }

    catch (error) {
        next(error);
    }
}

// Create new patient record
const create_patient = async (req, res, next) => {

    try {
        const new_patient = req.body;
        const uid = req.query.uid;
        const patient_ref = db.collection(`users/${uid}/patient_records`)
        
        new_patient.createdAt = firestore.FieldValue.serverTimestamp();
 
        await patient_ref.doc().set(new_patient);

        res.status(201).json(new_patient);
    } 
    catch (error) {
        next(error);
    }
}

const get_single_patient = async(req, res, next) => {

    try {
        const patient_id = req.params.patientid;
        const uid = req.query.uid;

        const patient_ref = db.collection(`users/${uid}/patient_records`)
        const patient_snapshot = await patient_ref.doc(patient_id).get();

        if (patient_snapshot.empty){
            return res.status(400).json({message : "Patient doesn't exist!"})
        }

        res.status(200).json({data : patient_snapshot.data()})
    } 
    catch (error) {
        next(error)
    }
}

const update_patient = async(req, res, next) => {

    try 
    {
        const uid = req.query.uid;
        const patient_id = req.params.patientid
        const patient_ref = db.collection(`users/${uid}/patient_records`)
        const updated_patient = req.body
        const patient_snapshot = patient_ref.doc(patient_id)
        const modified_patient = await patient_snapshot.get()

        if (modified_patient.empty){
            return res.status(400).json({message : "Patient doesn't exist!"})
        }
        
        updated_patient.createdAt = firestore.FieldValue.serverTimestamp();

        await patient_snapshot.update(updated_patient);

        res.status(200).json(modified_patient.data())    

    } 

    catch (error) {
        next(error)    
    }
}

const delete_patient = async(req, res, next) => {
    
    try
    {
        const uid = req.query.uid;
        const patient_id = req.params.patientid
        const patient_ref = db.collection(`users/${uid}/patient_records`)
        const patient_snapshot = patient_ref.doc(patient_id)
        const deletedPatient = await patient_snapshot.get()

        if (deletedPatient.empty){
            return res.status(400).json({message : "Patient doesn't exist!"})
        }
        
        await patient_snapshot.delete()

        res.status(200).json(deletedPatient.data())
    } 
    catch (error) {
        next(error)
    }
}

module.exports = {
    get_all_patients,
    create_patient,
    get_single_patient,
    update_patient,
    delete_patient
}