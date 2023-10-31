// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9KDLovvtRhktVupo4ThndjLVbONVVR9o",
  authDomain: "oneant-a95ca.firebaseapp.com",
  projectId: "oneant-a95ca",
  storageBucket: "oneant-a95ca.appspot.com",
  messagingSenderId: "557588441440",
  appId: "1:557588441440:web:e773703f2071ae06a01605",
  measurementId: "G-NBMZS5F7XM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);