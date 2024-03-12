// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAff_-wA580-ny-9Hc1rCMM8bnq2FzktOg",
  authDomain: "react-cursos-9d83e.firebaseapp.com",
  projectId: "react-cursos-9d83e",
  storageBucket: "react-cursos-9d83e.appspot.com",
  messagingSenderId: "804683633724",
  appId: "1:804683633724:web:faf190d13f0fab8cf7df39"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);