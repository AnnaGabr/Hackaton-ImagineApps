// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);