const { Router } = require("express");
const { 

    get_all_patients,
    get_single_patient,
    create_patient,
    delete_patient,
    update_patient
    
 } = require("../controllers/patientController");

 const { create_screening_result, delete_screening_result } = require("../controllers/screeningResultController");

// const { isAuthenticated } = require("../controllers/authController");

const router = Router()

router.get("/", get_all_patients);
router.post("/", create_patient);

router.get("/:patientid", get_single_patient);
router.patch("/:patientid", update_patient);
router.delete("/:patientid", delete_patient);

router.post("/:patientid/screening-results", create_screening_result);
router.delete("/:patientid/screening-results/:resultid", delete_screening_result);

module.exports = router