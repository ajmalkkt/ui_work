import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//var hellElement = React.createElement('h1', {className:'greeting'},'Hlo  World');
//ReactDOM.render(hellElement,document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(hellElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
