const auth = require('../config/config');

// Middleware to get authentication token
const getAuthToken = (req, res) => {

    let auth_token = null

    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer')
    {
        auth_token = req.headers.authorization.split(' ')[1];
    }

    return auth_token
}

// Middleware to check if the user is authenticated
const isAuthenticated = async(req, res, next) => {

    try {

        let auth_token = getAuthToken(req, res);
        const user_info = await auth.verifyIdToken(auth_token);

        req.authId = user_info.uid;
        next()

    } catch (error) {
        res.status(401).json("You are not authorized to make this request");
    }
}

module.exports = { isAuthenticated }