const express = require("express");
const patient_routes = require("./routes/patientRoutes");
const errHandler = require("./errorHandlers/errorHandler");
const notFound = require("./errorHandlers/notFound");
const cors = require("cors");
const app = express(); // Initialize express app

// middlewares

app.use(cors());

app.use("/front", express.static("front"));

app.use(express.json());

require('dotenv').config(); // load custom enviroment variables

// Start the server
app.listen(process.env.PORT, () => console.log("Server is listening on port " + process.env.PORT));


// routes
app.use("/api/patient-records", patient_routes);

// Handle error
app.use(errHandler);

// 404
app.use(notFound);