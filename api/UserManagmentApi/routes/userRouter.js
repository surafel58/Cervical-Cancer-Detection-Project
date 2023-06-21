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
userRouter.get("/", isAuthenticated, getUserById);
userRouter.post("/", createNewUser);

// /users/:userid
userRouter.patch("/:userid", isAuthenticated, updateUserById);
userRouter.delete("/:userid", isAuthenticated, deleteUserById);

module.exports = userRouter;