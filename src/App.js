import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./Pages/authentication/Login/Login";
import Signup from "./Pages/authentication/SignUp/Signup";
import LandingPage, { fetchProducts } from "./components/MainPage/LandingPage";
import FooterPart from "./components/Footer/FooterPart";
import ErrorPage from "./Pages/Error/errorPage";
import Product from "./components/Products/Products";
import { fetchProductDescription } from "./components/Products/Products";
import InventoryPage from "./components/Inventory/InventoryInterface/InventoryPage";
import ProductUpload from "./components/Inventory/ProductUploads/ProductUpload";
import MyOrders from "./components/Orders/MyOrders/MyOrders";
import { tokenLoader } from "./Utilities/tokenLoader";

import "./App.css";
import MainLayout from "./UI/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    loader: tokenLoader,
    id: "token",
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
      {
        path: "/inventory",
        element: <InventoryPage />,
      },
      {
        path: "/addProduct",
        element: <ProductUpload />,
      },
      {
        path: "/myOrders",
        element: <MyOrders />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="boddy">
      <div className="content">
        <RouterProvider router={router} />
        <FooterPart />
      </div>
    </div>
  );
}

export default App;
