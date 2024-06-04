import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ContatosContextProvider } from './contexts/ContatosContext';
import './App.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContatosContextProvider>
        <App />
      </ContatosContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
