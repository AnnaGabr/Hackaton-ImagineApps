import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
/* import 'bootstrap/dist/css/bootstrap.min.css'; */
import { App } from './App.jsx';
import './index.css';
import firebaseConfig from './firebase/firebase-config.js';
import { FirebaseAppProvider } from 'reactfire';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense>
    <App />
  </Suspense>
);
