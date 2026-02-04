import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAEgQmPkSyH3kHvzaPXjNG7qA2LxhqMvnQ",
  authDomain: "parnasoapp.firebaseapp.com",
  projectId: "parnasoapp",
  storageBucket: "parnasoapp.firebasestorage.app",
  messagingSenderId: "331667201572",
  appId: "1:331667201572:web:3bbb1054418ad2fb7142b1",
  measurementId: "G-5ZGNY5TWBG"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
