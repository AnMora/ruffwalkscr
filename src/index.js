import React from 'react';
import ReactDOM from 'react-dom/client';
import "./CSS/bootstrap.min.css";
import './CSS/styles.css';
import reportWebVitals from './reportWebVitals';

import RuffWalksCR from './components/App'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RuffWalksCR />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
