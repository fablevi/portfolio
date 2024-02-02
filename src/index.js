import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom'
import './Style/index.css'
import './Style/AnimateCursor.css'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <App />
  </React.StrictMode>
);

/*
<HashRouter>
      <App />
    </HashRouter>
*/
