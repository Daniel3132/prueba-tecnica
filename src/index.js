import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './containers/App';
import './styles/home.css'
import './styles/index.css'
import './styles/tutorial.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);