import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './pages/Screen_1/Screen.module.css'
import './pages/Screen_2/ScreenTwo.modules.css'
import App from './App';

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