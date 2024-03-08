// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './styles/tailwind.css'; // Import Tailwind CSS
import App from './App';
import { AuthProvider } from './context/AuthContext';

ReactDOM.render(
  <Provider store={store}>
    <AuthProvider>
    <App />
    </AuthProvider>
   
  </Provider>,
  document.getElementById('root')
);
