// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4-UGtJ5TtokZ8zS2g6dREs9-Xkbp57Qk",
  authDomain: "email-password-auth-5ddc1.firebaseapp.com",
  projectId: "email-password-auth-5ddc1",
  storageBucket: "email-password-auth-5ddc1.firebasestorage.app",
  messagingSenderId: "838033428024",
  appId: "1:838033428024:web:4eae739ba3af6c8ac720cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);