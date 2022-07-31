import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
/* import 'bootstrap/dist/css/bootstrap.min.css'; */
import { AppRestaurante } from './AppRestaurante.jsx';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense>
    <AppRestaurante />
  </Suspense>
);
