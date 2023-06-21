// GET /cancer-percentage -> getCancerPercentage
// GET /age-groups-affected -> getAgeGroupAffected
// GET /total-test -> getTotalTests
// GET /total-positive-test -> getTotalPositiveTest
// GET /total-negative-test -> getTotalNegativeTest

const { Router } = require("express");
const { get_analysis } = require("../controllers/analyticsController");
const { isAuthenticated } = require("../controllers/authController");

const router = Router()

router.get("/get-analysis", isAuthenticated, get_analysis);

module.exports = router