import React, { useState } from 'react';
import firebaseAppData from './firebase/firebase-config';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Auth } from './components/Auth';
import { Restaurante } from './components/Restaurante';
/* 
import { Header } from './components/Header';
import { Auth } from './components/Auth';
import { useFirebaseApp } from 'reactfire'; */

const auth = getAuth(firebaseAppData);

export function App() {
  const [alimentos, setAlimentos] = useState([]);

  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (userFirebase) => {
    if (userFirebase) {
      setUser(userFirebase);
    } else {
      setUser(null);
    }
  });

  return <>{user ? <Restaurante /> : <Auth />}</>;
}
