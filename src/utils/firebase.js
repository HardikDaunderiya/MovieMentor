// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJ7Hs9ruC-Khg2bkjkGOzBQhr8_BZjpis",
  authDomain: "moviementor-b6f42.firebaseapp.com",
  projectId: "moviementor-b6f42",
  storageBucket: "moviementor-b6f42.appspot.com",
  messagingSenderId: "229452966436",
  appId: "1:229452966436:web:63fffcdabd8103e54e06b1",
  measurementId: "G-ELF753Y9EM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();