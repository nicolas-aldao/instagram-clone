import React from 'react'
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'
import { App } from './App';

const root = createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);