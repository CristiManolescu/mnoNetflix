// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzza36RPE8dlgYK9lZRwqpJFcSztohGsw",
  authDomain: "mnonetflix-6d110.firebaseapp.com",
  projectId: "mnonetflix-6d110",
  storageBucket: "mnonetflix-6d110.appspot.com",
  messagingSenderId: "747673461706",
  appId: "1:747673461706:web:2372ab6578e36d5c7a6533",
  measurementId: "G-CMNL2DXFJC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
