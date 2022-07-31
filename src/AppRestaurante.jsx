import React, { useState } from 'react';
import firebaseAppData from './firebase/firebase-config';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Auth } from './components/Auth';
import AppFundaciones from './AppFundaciones';

const auth = getAuth(firebaseAppData);

export function AppRestaurante() {
  const [alimentos, setAlimentos] = useState([]);

  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (userFirebase) => {
    if (userFirebase) {
      setUser(userFirebase);
    } else {
      setUser(null);
    }
  });

  return <>{user ? <AppFundaciones /> : <Auth />}</>;
}
