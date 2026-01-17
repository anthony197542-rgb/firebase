// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGXWqC1MVAOCb545jnQRPBDLFfOPgN_pM",
  authDomain: "fir-practise-e4a78.firebaseapp.com",
  projectId: "fir-practise-e4a78",
  storageBucket: "fir-practise-e4a78.firebasestorage.app",
  messagingSenderId: "401386225001",
  appId: "1:401386225001:web:caae8fd3f86b6fc6fbd1f8",
  measurementId: "G-J1DXQNXB5E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
