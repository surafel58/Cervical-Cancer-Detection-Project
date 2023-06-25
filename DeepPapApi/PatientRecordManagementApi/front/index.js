import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyC7jXakAPOhkSkJVgbR90lVh03PFktU5Jw",
    authDomain: "ccss-c9cbb.firebaseapp.com",
    projectId: "ccss-c9cbb",
    storageBucket: "ccss-c9cbb.appspot.com",
    messagingSenderId: "661601479326",
    appId: "1:661601479326:web:09d8363ff280adbc8aa98f",
    measurementId: "G-XXYM95E9L0"
};

var token = ""
var user = ""

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth()

const loginUser = (email, password) => {

    try {
        signInWithEmailAndPassword(auth, email, password).then(
            (userCredential) => {
                user = userCredential.user;
                token = user.accessToken
                
                const p = document.createElement('p');

                p.textContent = "Login successful";

                document.body.appendChild(p);

                document.getElementById("token").value = token;
            }
        )
        
    } catch (error) {
        
        const p = document.createElement('p');

        p.textContent = "Something went wrong";

        document.body.appendChild(p);
    }
}

const signUpUser = (email, password, displayName, photoURL) => {
    
    const data = `{
        "email" : "${email}",
        "password" : "${password}",
        "displayName" : "${displayName}",
        "photoURL" : "${photoURL}"
      }`;
      
      fetch('http://localhost:5000/api/users', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: data,
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Handle the response data
    })
    .catch(error => {
        console.log("Error:", error);
        // Handle the error
    });

}

const login = document.getElementById("login");
const signup = document.getElementById("signup");
const email = document.getElementById("email");
const password = document.getElementById("password");
const username = document.getElementById("username");
const photoURL = document.getElementById("photoURL");

login.addEventListener(("click"), (ev) => {
    ev.preventDefault();
    loginUser(email.value, password.value);
});

signup.addEventListener(("click"), (ev) => {
    ev.preventDefault()
    signUpUser(email.value, password.value, username.value, photoURL.value)
});