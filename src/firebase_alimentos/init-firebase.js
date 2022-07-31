// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiB4JzE9PTt92TLgxw3wlKu2UY1l71egg",
  authDomain: "hambre-cero-9f5d8.firebaseapp.com",
  projectId: "hambre-cero-9f5d8",
  storageBucket: "hambre-cero-9f5d8.appspot.com",
  messagingSenderId: "718687578547",
  appId: "1:718687578547:web:d612da1b8b3fdc4e5983c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 export const db = getFirestore(app)