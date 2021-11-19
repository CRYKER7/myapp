// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzYppajeLeLNnLeXyOJsrUtpXCYSFrtYc",
  authDomain: "reduxyfirebase-3f854.firebaseapp.com",
  projectId: "reduxyfirebase-3f854",
  storageBucket: "reduxyfirebase-3f854.appspot.com",
  messagingSenderId: "108939177750",
  appId: "1:108939177750:web:62b61561c8eb5df518ea37",
  measurementId: "G-EBX7MH0KGR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export {db};