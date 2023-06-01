import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./Pages/authentication/Login/Login";
import Signup from "./Pages/authentication/SignUp/Signup";
import LandingPage from "./components/MainPage/LandingPage";
import FooterPart from "./components/Footer/FooterPart";

import "./App.css";
import MainLayout from "./UI/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <Signup />,
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
