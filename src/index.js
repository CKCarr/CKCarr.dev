import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import { ThemeProvider } from '@material-tailwind/react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Font Awesome
import 'animate.css/animate.min.css'; // Animate.css
// Import Bootstrap Icons CSS
import 'bootstrap-icons/font/bootstrap-icons.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
