// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBhoACrFA_j8PWDkS7-lbvRz775kHm_Bk",
  authDomain: "musemate-dfd36.firebaseapp.com",
  projectId: "musemate-dfd36",
  storageBucket: "musemate-dfd36.appspot.com",
  messagingSenderId: "990147755555",
  appId: "1:990147755555:web:94c27220b53f3e3a313b96",
  measurementId: "G-BVCNDMXYR2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);