// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKrjtK7MTY4MDZubPj2EsO2sBPRg3Okk8",
  authDomain: "expense-tracker-a325a.firebaseapp.com",
  projectId: "expense-tracker-a325a",
  storageBucket: "expense-tracker-a325a.firebasestorage.app",
  messagingSenderId: "454703807713",
  appId: "1:454703807713:web:9272b160beb884db5a4ba0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db };
