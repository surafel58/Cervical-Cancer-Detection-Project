const { firestore } = require("firebase-admin")
const { db } = require("../db/db")

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

// Create new screening result
const create_screening_result = async (req, res, next) => {
    
    try {
        const uid = req.query.uid;
        const results_ref = db.collection(`users/${uid}/patient_records/${req.params.patientid}/screeningResults`);
        const new_result = req.body;
        
        new_result.createdAt = firestore.FieldValue.serverTimestamp();
 
        await results_ref.doc().set(new_result);

        res.status(201).json(new_result);
    }

    catch (error) {
        next(error);
    }
}

const delete_screening_result = async(req, res, next) => {
    
    try
    {
        const uid = req.query.uid;
        const result_ref = db.collection(`users/${uid}/patient_records/${req.params.patientid}/screeningResults/${req.params.resultid}`)
        const result_snapshot = result_ref.doc(patient_id)
        const deleted_result= await result_snapshot.get()

        if (deleted_result.empty){
            return res.status(400).json({message : "Screening result doesn't exist!"})
        }
        
        await result_snapshot.delete()

        res.status(200).json(deleted_result.data())
    } 
    
    catch (error) {
        next(error)
    }
}



module.exports = {

    get_all_screening_results,
    create_screening_result,
    delete_screening_result

};