import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./Pages/authentication/Login/Login";
import Signup from "./Pages/authentication/SignUp/Signup";
import LandingPage, { fetchProducts } from "./components/MainPage/LandingPage";
import FooterPart from "./components/Footer/FooterPart";
import ErrorPage from "./Pages/Error/errorPage";
import Product from "./components/Products/Products";
import { fetchProductDescription } from "./components/Products/Products";

import "./App.css";
import MainLayout from "./UI/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
        loader: fetchProducts,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <Signup />,
      },
      {
        path: "product/:id",
        element: <Product />,
        loader: fetchProductDescription,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <FooterPart />
    </>
  );
}

export default App;
