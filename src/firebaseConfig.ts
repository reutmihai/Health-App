// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOpKqeJ8iSbMFNu5eeScE5QFmDjVWszUY",
  authDomain: "health-app-39779.firebaseapp.com",
  projectId: "health-app-39779",
  storageBucket: "health-app-39779.firebasestorage.app",
  messagingSenderId: "1039874566459",
  appId: "1:1039874566459:web:ee1923bd43aca715ccaf1e",
  measurementId: "G-FJB033ZQZL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);