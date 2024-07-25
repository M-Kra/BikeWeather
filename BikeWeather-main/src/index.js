import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './styles/leaflet.css'

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
      
  </React.StrictMode>
);
} else {
    console.error('Root nie znaleziony');
}