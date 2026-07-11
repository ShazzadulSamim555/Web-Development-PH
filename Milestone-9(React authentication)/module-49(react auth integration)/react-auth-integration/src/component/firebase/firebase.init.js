// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtWVVKpSM3waX9NOLNPGMDeDzofyAr9G4",
  authDomain: "react-firebase-auth-a18ee.firebaseapp.com",
  projectId: "react-firebase-auth-a18ee",
  storageBucket: "react-firebase-auth-a18ee.firebasestorage.app",
  messagingSenderId: "784617106693",
  appId: "1:784617106693:web:f93df9fe10689c31cc9b6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);