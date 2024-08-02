import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

import { BrowserRouter as Router } from 'react-router-dom';
import { CartProvider, FilterProvider } from "./context";
import { ScrollToTop } from "./components";
import { ToastContainer } from 'react-toastify';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <CartProvider>
        <FilterProvider>
          <ToastContainer position="bottom-right" autoClose={2000} hideProgressBar={true} theme="light" />
          <ScrollToTop />
          <App />
        </FilterProvider>
      </CartProvider>
    </Router>
  </React.StrictMode>
);