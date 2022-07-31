import React from 'react';
import ReactDOM from 'react-dom/client';
/* import 'bootstrap/dist/css/bootstrap.min.css'; */
import { AppRestaurante } from './AppRestaurante.jsx';
import './index.css';
import AppFundaciones from './AppFundaciones';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppFundaciones />
    <AppRestaurante />
  </React.StrictMode>
);