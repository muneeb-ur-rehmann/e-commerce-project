// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8mDIQwrzdBA2cVU1lX95C2VAeOCU6muM",
  authDomain: "hackathone-3cd56.firebaseapp.com",
  projectId: "hackathone-3cd56",
  storageBucket: "hackathone-3cd56.appspot.com",
  messagingSenderId: "962176382131",
  appId: "1:962176382131:web:36cc05747eb718c6fe6cc6",
  measurementId: "G-K33GP5JN19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);


export { db };
