import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Root file
// DOM creation
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

// Render React App into DOM
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
