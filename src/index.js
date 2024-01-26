import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const images = {
    img1: require('./components/images/sample_person.jpeg'),
}
export default images;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


