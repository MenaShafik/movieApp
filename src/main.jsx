import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import ProivderMovie from './context/ProivderMovie.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(
  <ProivderMovie>
    <BrowserRouter>
              <App />
    </BrowserRouter>
  </ProivderMovie>

)
