// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCk5Mp0RpJc0arj_usP-fC17PiH3FiVEFo",
  authDomain: "fittracker-11b62.firebaseapp.com",
  projectId: "fittracker-11b62",
  storageBucket: "fittracker-11b62.appspot.com",
  messagingSenderId: "341302755639",
  appId: "1:341302755639:web:5beaa3ca074a4d31a49ab2",
  measurementId: "G-1C27TR1GT9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);