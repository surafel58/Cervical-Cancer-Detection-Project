const express = require("express");
const analytics_routes = require("./routes/analyticsRoutes");
const errHandler = require("./errorHandlers/errorHandler");
const notFound = require("./errorHandlers/notFound");
const cors = require('cors')

const app = express(); // Initialize express app

app.use(cors());

require('dotenv').config(); // load custom enviroment variables

// Start the server
app.listen(process.env.PORT, () => console.log("Server is listening on port " + process.env.PORT));

// middlewares
app.use("/front", express.static("front"));
app.use(express.json());

// routes
app.use("/api/data-analytics", analytics_routes);

// Handle error
app.use(errHandler);

// 404
app.use(notFound);