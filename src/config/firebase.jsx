// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACNwHvtowyn_XeTVVLh3WHQIunYC-loGs",
  authDomain: "msc-announcement.firebaseapp.com",
  projectId: "msc-announcement",
  storageBucket: "msc-announcement.firebasestorage.app",
  messagingSenderId: "949413026709",
  appId: "1:949413026709:web:214fa865f68d6c36af749c",
  measurementId: "G-L9R48B5FMK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();


export const db = getFirestore(app)