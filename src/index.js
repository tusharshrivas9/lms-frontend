import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import store from './Redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
  <BrowserRouter>
    <App />
    <Toaster/>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);



