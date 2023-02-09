import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebase from 'firebase/app'
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVzP3FFLLKDaPs1QoF_UKP71UMSHEukt4",
  authDomain: "cart-cc5c3.firebaseapp.com",
  projectId: "cart-cc5c3",
  storageBucket: "cart-cc5c3.appspot.com",
  messagingSenderId: "107949969876",
  appId: "1:107949969876:web:1237be51f65751e755c641"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

