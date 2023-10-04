// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjZVhUNwRL-CNUqIO2g0jy0mioIuCRnIE",
  authDomain: "memory-bd8d1.firebaseapp.com",
  projectId: "memory-bd8d1",
  storageBucket: "memory-bd8d1.appspot.com",
  messagingSenderId: "356858396307",
  appId: "1:356858396307:web:5f49916991f2ebb0d21766",
  measurementId: "G-0PYJBTDWSS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
