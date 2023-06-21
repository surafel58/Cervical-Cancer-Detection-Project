const auth = require("../config/config"); 

// API endpoint for creating user
const createNewUser = async (req, res, next) => {

  try {
    const { email, password, displayName, photoURL } = req.body;

    // Create a new user with email and password
    const userRecord = await auth.createUser({
      email: email,
      password: password,
      displayName : displayName,
      photoURL : photoURL
    });

    res.status(201).json(userRecord.toJSON());
  } 
  catch (error) {
    next(error);
  }

}

// API endpoint to get user details
const getUserById = async (req, res, next) => {

    try {
      const { userId } = req.params;
  
      // Get user details using the provided user ID
      const userRecord = await auth.getUser(userId);
  
      res.status(200).json(userRecord.toJSON());
    } 
    catch (error) {
        next(error);
    }
}

// API endpoint to update user details
const updateUserById = async (req, res, next) => {
    try {
      const { userId } = req.params;
      const { email, password, displayName, photoURL } = req.body;
  
      // Update user details using the provided user ID
      await auth.updateUser(userId, {
        email,
        password,
        displayName,
        photoURL
      });
  
      res.status(200).json({ message: 'User updated successfully' });

    } catch (error) {
        next(error);
    }
  }

// API endpoint to delete a user
const deleteUserById = async (req, res) => {
    try {
      const { userId } = req.params;
  
      // Delete the user using the provided user ID
      await auth.deleteUser(userId);
  
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createNewUser,
    getUserById,
    updateUserById,
    deleteUserById
}