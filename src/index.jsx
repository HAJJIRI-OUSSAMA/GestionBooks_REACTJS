import React from 'react'; // creer les elements
import ReactDOM from 'react-dom/client'; // interagir avec le dom (virtual DOM)
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import reportWebVitals from './reportWebVitals';

import App from './App.js';

// creation des element html en utilisent JS => on utilise JSX a sa place 
// const myElem = React.createElement("h1", null, "Bonjour")

//JSX



const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();

