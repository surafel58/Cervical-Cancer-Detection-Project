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
                console.log(user.uid)
                console.log(token)
            }
        )
        
    } catch (error) {
        console.log(error)
    }
}

const signUpUser = (email, password) => {

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        
        user = userCredential.user;
        token = user.accessToken
        console.log(user.uid)
        
    })
    .catch((error) => {
        console.log(error)
    });
}

const login = document.getElementById("login");
const signup = document.getElementById("signup");
const email = document.getElementById("email");
const password = document.getElementById("password");
const getAll = document.getElementById("GET");

getAll.addEventListener("click", (ev) =>{

    const header = new Headers();
    header.append('Content-Type', 'application/json');
    header.append('Authorization', `Bearer ${token}`);

    fetch(`http://localhost:3000/api/patientrecords`, {
        method : "GET",
        headers : header
        
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
})

login.addEventListener(("click"), (ev) => {
    ev.preventDefault()
    loginUser(email.value, password.value)
});

signup.addEventListener(("click"), (ev) => {
    ev.preventDefault()
    signUpUser(email.value, password.value)
});