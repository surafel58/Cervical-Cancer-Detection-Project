const { Router } = require("express");
const { 

    get_all_patients,
    get_single_patient,
    create_patient,
    delete_patient,
    update_patient
    
 } = require("../controllers/patientController");

 const { create_screening_result, delete_screening_result } = require("../controllers/screeningResultController");

const { isAuthenticated } = require("../controllers/authController");

const router = Router()

router.get("/", isAuthenticated, get_all_patients);
router.post("/", isAuthenticated, create_patient);

router.get("/:patientid", isAuthenticated, get_single_patient);
router.patch("/:patientid", isAuthenticated, update_patient);
router.delete("/:patientid", isAuthenticated, delete_patient);

router.post("/:patientid/screening-results", isAuthenticated, create_screening_result);
router.delete("/:patientid/screening-results/:resultid", isAuthenticated, delete_screening_result);

module.exports = router