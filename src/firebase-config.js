// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey : process.env.REACT_APP_API_KEY,

  authDomain: "blogsite-487f3.firebaseapp.com",

  projectId: "blogsite-487f3",

  storageBucket: "blogsite-487f3.appspot.com",

  messagingSenderId: "1041698437861",

  appId: "1:1041698437861:web:b90c64c4006548d49e720c"
  
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();