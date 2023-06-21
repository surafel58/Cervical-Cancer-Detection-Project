const errHandler = (err,req, res, next) => {
    
    console.log(err)

    if (err instanceof admin.auth.AuthError) {
        
        message = 'Firebase Auth Error:' + err.code + err.message;
        
        // Handle specific Firebase Auth errors
        
        if (err.code === 'auth/email-already-exists') {
            // Email already exists, handle accordingly
            message = "Email Already Exists!"
        } 
        else if (err.code === 'auth/weak-password') {
            // Weak password, handle accordingly
            message = "Weak Password!"
        }

        else if( err.code === 'auth/invalid-photo-url'){
            message = " Invalid Photo URL"
        }

        res.status(500).json(message);
    }

    res.status(500).json("Something Went Wrong :(")
}

module.exports = errHandler