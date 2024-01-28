import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const images = {
    person: require('./components/images/sample_person.jpeg'),
    login: require('./components/images/login.png'),
    arabesque: require('./components/images/arabesque.jpg'),
}
export default images;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


