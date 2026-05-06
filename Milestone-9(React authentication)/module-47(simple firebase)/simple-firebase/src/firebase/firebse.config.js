import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCAgSqzjq459wRpxghk6V7vnAWFE7DviAg",
  authDomain: "simple-firebase-auth-e4681.firebaseapp.com",
  projectId: "simple-firebase-auth-e4681",
  storageBucket: "simple-firebase-auth-e4681.firebasestorage.app",
  messagingSenderId: "180045657260",
  appId: "1:180045657260:web:c5db5031dca73bc1dc9b09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);