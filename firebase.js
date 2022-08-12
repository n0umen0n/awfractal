// Import the functions you need from the SDKs you need
import firebase from "firebase";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfpAT5H1OreavHYZx5R3sMNJJVWfX7ARw",
  authDomain: "awfractal.firebaseapp.com",
  projectId: "awfractal",
  storageBucket: "awfractal.appspot.com",
  messagingSenderId: "36667356770",
  appId: "1:36667356770:web:6eef04d1f6b895b64ac33b",
  measurementId: "G-NQ0P375V87",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebase;
