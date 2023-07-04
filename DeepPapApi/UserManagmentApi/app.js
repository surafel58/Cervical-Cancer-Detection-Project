const express = require("express")
const userRouter = require("./routes/userRouter");
const cors = require("cors");
const errHandler = require("./errorHandlers/errorHandler")
const notFound = require("./errorHandlers/notFound");

const app = express(); // Initialize express app

app.use(cors());

app.use('/front', express.static("front"))

require('dotenv').config(); // load custom enviroment variables

// Start the server
app.listen(process.env.PORT, () => console.log("Server is listening on port " + process.env.PORT))

// middlewares
app.use(express.json())

// routes
app.use("/api/users", userRouter)

// Handle error
app.use(errHandler);

// 404
app.use(notFound);