import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import "./styles/index.scss";
import "leaflet/dist/leaflet.css"


ReactDOM.render(
  <React.StrictMode>
    <Router>
     <App />
    </Router> 
  </React.StrictMode>,
  document.getElementById('root')
);
