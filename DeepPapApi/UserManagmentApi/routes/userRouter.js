const { Router } = require('express'); // Load Express

const { isAuthenticated } = require("../controllers/authControllers");

const {
	
	createNewUser,
	getUserById,
	updateUserById,
	deleteUserById

} = require('../controllers/userControllers');

const userRouter = Router();

// /users
userRouter.get("/", getUserById);
userRouter.post("/", createNewUser);

// /users/:userid
userRouter.patch("/:userid", updateUserById);
userRouter.delete("/:userid", deleteUserById);

module.exports = userRouter;