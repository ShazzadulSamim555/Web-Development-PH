// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgo0z3tcgESRBSzIGhxtsCMnLgciER9Is",
  authDomain: "simple-dimple-f4c81.firebaseapp.com",
  projectId: "simple-dimple-f4c81",
  storageBucket: "simple-dimple-f4c81.firebasestorage.app",
  messagingSenderId: "1030039116205",
  appId: "1:1030039116205:web:dd8ec7e32417951f2e6924"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth= getAuth(app);