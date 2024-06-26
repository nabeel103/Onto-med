// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserProvider } from './UserContext'; 

const images = {
    person: require('./components/images/sample_person.jpeg'),
    login: require('./components/images/login.png'),
    arabesque: require('./components/images/arabesque.jpg'),
    arabesque2: require('./components/images/arabesque2.jpg'),
};
export default images;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);
