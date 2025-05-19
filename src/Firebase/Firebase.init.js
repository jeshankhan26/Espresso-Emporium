// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAL-nHnysrQ_-7XA-fAhxd0pqyzUcO7Djc",
  authDomain: "coffee-60527.firebaseapp.com",
  projectId: "coffee-60527",
  storageBucket: "coffee-60527.firebasestorage.app",
  messagingSenderId: "357506085161",
  appId: "1:357506085161:web:fef40cd0d0efa4f6518738"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);