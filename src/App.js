import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import ProductList from './features/pageList/components/ProductList';
import Home from './features/Pages/Home';
import LoginPage from './features/Pages/LoginPage';
import SignupPage from './features/Pages/SignupPage';
import Cart from './features/cart/Cart';
import CartPage from './features/Pages/CartPage';

import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Checkout from './features/Pages/Checkout';
import ProductDetailsPage from './features/Pages/ProductDetailsPage';
import Protected from './features/auth/Protected';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Protected>(<Home/>)</Protected> ,
  },
  {
    path: "/login",
    element: (<LoginPage/>),
  },
  {
    path: "/signup",
    element: (<SignupPage/>),
  },
  {
    path: "/cart",
    element: <Protected>(<CartPage/>)</Protected>,
  },
  {
    path: "/checkout",
    element: <Protected>(<Checkout/>)</Protected>,
  },
  {
    path: "/ProductDetails/:id",
    element: <Protected>(<ProductDetailsPage/>)</Protected>,
  },
]);


function App() {
  return (
    <div className="App">
     
     <RouterProvider router={router} />

      
    </div>
  );
}

export default App;
