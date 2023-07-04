const { Router } = require("express");
const { get_analysis } = require("../controllers/analyticsController");
const { isAuthenticated } = require("../controllers/authController");

const router = Router()

router.get("/", get_analysis);

module.exports = router