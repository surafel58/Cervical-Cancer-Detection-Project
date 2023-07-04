import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC7jXakAPOhkSkJVgbR90lVh03PFktU5Jw",
    authDomain: "ccss-c9cbb.firebaseapp.com",
    projectId: "ccss-c9cbb",
    storageBucket: "ccss-c9cbb.appspot.com",
    messagingSenderId: "661601479326",
    appId: "1:661601479326:web:09d8363ff280adbc8aa98f",
    measurementId: "G-XXYM95E9L0"
  };
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const storage = getStorage();
const db = getFirestore(app);

export default auth;

export { storage, db };