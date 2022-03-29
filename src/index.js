import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './App';

const rootEl = document.getElementById('root')
const app = ReactDOMClient.createRoot(rootEl);

app.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);