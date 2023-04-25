import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {GoogleOAuthProvider} from '@react-oauth/google';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <GoogleOAuthProvider clientId="1037589945816-cd3nncrqae3hh4phts7kf1ckpoj78feo.apps.googleusercontent.com">
            <App/></GoogleOAuthProvider>;
    </React.StrictMode>
);

reportWebVitals();
