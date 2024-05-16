
// Import the functions you need from the SDKs you need|
// // Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey:  process.env.REACT_APP_FIREBASE_API,
  authDomain: "stock-monitoring-18d95.firebaseapp.com",
  projectId: "stock-monitoring-18d95",
  storageBucket: "stock-monitoring-18d95.appspot.com",
  messagingSenderId: "656495083233",
  appId: "1:656495083233:web:edd32eba456aa9b6fc01a0",
  measurementId: "G-2PWMX52S1P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
