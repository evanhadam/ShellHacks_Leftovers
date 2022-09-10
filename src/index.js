// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtzjp10EABXBfqd0g3Ld2AieTE4CKZVkc",
  authDomain: "leftovers-40d06.firebaseapp.com",
  databaseURL: "https://leftovers-40d06-default-rtdb.firebaseio.com",
  projectId: "leftovers-40d06",
  storageBucket: "leftovers-40d06.appspot.com",
  messagingSenderId: "799115290124",
  appId: "1:799115290124:web:1804f7f0353ab68e4fb029",
  measurementId: "G-FXW9SKT4LB"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const database = getDatabase(firebaseConfig)
