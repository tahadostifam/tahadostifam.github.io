import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';
import './index.scss';

const rootEl = document.getElementById('root');
const app = ReactDOMClient.createRoot(rootEl);

app.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
