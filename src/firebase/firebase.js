// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJd9B1_bNORxUGYH0AHIciuSJZ53UeRLw",
  authDomain: "e-comerce-website-f8205.firebaseapp.com",
  projectId: "e-comerce-website-f8205",
  storageBucket: "e-comerce-website-f8205.appspot.com",
  messagingSenderId: "184540149280",
  appId: "1:184540149280:web:e833043d21faa1b898ee45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
  
  
export { db };
