import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {  UserContextProvider } from './UserContext';
import {  CartContextProvider } from './CartContext';
import { AddressContextProvider } from './AddressContext';
import { ProductContextProvider } from './ProductContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <ProductContextProvider>
      <AddressContextProvider>
    <CartContextProvider>
    <UserContextProvider>
    <BrowserRouter>
         <App/>
    </BrowserRouter>
    </UserContextProvider>
   </CartContextProvider>
  </AddressContextProvider>
  </ProductContextProvider>
  </React.StrictMode>
    
);


