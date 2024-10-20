import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx'; // Correct the import to use a relative path
import './app.css'; // This is correct

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
