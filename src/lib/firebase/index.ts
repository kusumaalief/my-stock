// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5PZ8sCKqZz5QYvODB-jGFgBR56xDTLso",
  authDomain: "mystock-dccf5.firebaseapp.com",
  projectId: "mystock-dccf5",
  storageBucket: "mystock-dccf5.appspot.com",
  messagingSenderId: "449312965890",
  appId: "1:449312965890:web:6b05099509e06e0aa56e1b",
  measurementId: "G-FRT0N3NK5D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app };
