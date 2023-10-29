import React, { useEffect } from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import ProductList from "./features/pageList/components/ProductList";
import Home from "./features/Pages/Home";
import LoginPage from "./features/Pages/LoginPage";
import SignupPage from "./features/Pages/SignupPage";
import Cart from "./features/cart/Cart";
import CartPage from "./features/Pages/CartPage";

import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Checkout from "./features/Pages/Checkout";
import ProductDetailsPage from "./features/Pages/ProductDetailsPage";
import Protected from "./features/auth/Protected";
import { useDispatch, useSelector } from "react-redux";
import { fetchItemsByUserId } from "./features/cart/cartAPI";
import { selectLoggedInUser } from "./features/auth/authSlice";
import { fetchItemsByUserIdAsync } from "./features/cart/cartSlice";
import Page_404 from "./features/Pages/Page_404";
import OrderSuccessPage from "./features/Pages/OrderSuccessPage";
import UserOrdersPage from "./features/Pages/UserOrdersPage";
import UserProfilePage from "./features/Pages/UserProfilePage";
import { fetchedLoggedInUserAsync } from "./features/user/userSlice";
import Logout from "./features/auth/Components/Logout";
import ForgotPasswordPage from "./features/Pages/ForgotPasswordPage";
import ProtectedAdmin from "./features/auth/ProtectedAdmin";
import AdminHome from "./features/Pages/AdminHome";
import AdminProductDetailsPage from "./features/Pages/AdminProductDetailsPage";
import ProductForm from "./features/AdminProductList/components/ProductForm";
import AdminProductFormPage from "./features/Pages/AdminProductFormPage";
import AdminOrders from "./features/AdminProductList/components/AdminOrders";
import AdminOrdersPage from "./features/Pages/AdminOrdersPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        <Home />
      </Protected>
    ),
  },
  {
    path: "/admin",
    element: (
      <ProtectedAdmin>
        <AdminHome/>
      </ProtectedAdmin>
     
    ),
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/cart",
    element: (
      <Protected>
        <CartPage />
      </Protected>
    ),
  },
  {
    path: "/checkout",
    element: (
      <Protected>
        <Checkout />
      </Protected>
    ),
  },
  {
    path: "/ProductDetails/:id",
    element: (
      <Protected>
        <ProductDetailsPage />
      </Protected>
    ),
  },
  {
    path: "/admin/ProductDetails/:id",
    element: (
     <ProtectedAdmin>
        <AdminProductDetailsPage/>
      </ProtectedAdmin>
      
    ),
  },
  {
    path: '/admin/product-form',
    element: (
      <ProtectedAdmin>
        <AdminProductFormPage></AdminProductFormPage>
      </ProtectedAdmin>
    ),
  },
  {
    path: '/admin/product-form/edit/:id',
    element: (
      <ProtectedAdmin>
        <AdminProductFormPage></AdminProductFormPage>
      </ProtectedAdmin>
    ),
  },
  {
    path: '/admin/orders',
    element: (
      <ProtectedAdmin>
        <AdminOrdersPage></AdminOrdersPage>
      </ProtectedAdmin>
    ),
  },
  {
    path: "/order-success/:id",
    element: <OrderSuccessPage></OrderSuccessPage>,
  },
  {
    path: "/orders",
    element: <UserOrdersPage></UserOrdersPage>,
  },
  {
    path: "/profile",
    element: <UserProfilePage></UserProfilePage>,
  },
  {
    path: "/logout",
    element: <Logout></Logout>,
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordPage></ForgotPasswordPage>,
  },
  {
    path: "*",
    element: <Page_404></Page_404>,
  },
]);

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);

  useEffect(() => {
    if (user) {
      dispatch(fetchItemsByUserIdAsync());
      // we can get req.user by token on backend so no need to give in front-end
      dispatch(fetchedLoggedInUserAsync());
    }
  }, [dispatch, user]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
