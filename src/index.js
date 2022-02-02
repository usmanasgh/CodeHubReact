import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Genie from './GenieComponent';
//import Genie from './GenieComponent';
import GenieJSX from './GenieJSX'
import HookTest from './Advance/HookTest'
import reportWebVitals from './reportWebVitals';

/* ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); */

// MUA: Calling one 'APP' Component.
ReactDOM.render(
  <HookTest/>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
