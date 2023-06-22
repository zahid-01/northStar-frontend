import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";

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
import { URL } from "./Assets/environment/url";
import { loginSliceActions } from "./Store/loginSlice";

import "./App.css";
import MainLayout from "./UI/MainLayout";

axios.defaults.withCredentials = true;

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
  const dispatch = useDispatch();

  useEffect(() => {
    const checkLoginState = async () => {
      await axios({
        method: "GET",
        url: `${URL}user/isLoggedIn`,
      })
        .then((res) => {
          console.log(res);
          if (res.statusText === "OK") {
            dispatch(loginSliceActions.setLogin(true));
            dispatch(loginSliceActions.setUserInfo(res.data.userData));
          } else {
            dispatch(loginSliceActions.setLogin(false));
            dispatch(loginSliceActions.setUserInfo(null));
          }
        })
        .catch((e) => console.log(e));
    };

    checkLoginState();
  }, [dispatch]);
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
