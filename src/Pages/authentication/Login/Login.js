import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { loginSliceActions } from "../../../Store/loginSlice";

import { cartSliceActions } from "../../../Store/cartSlice";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { URL } from "../../../Assets/environment/url";
import img from "../../../Assets/Imgs/796994.png";
import MotionComponent from "../../../components/Header/Animation";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginError, setLoginError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const loginHandler = async (e) => {
    e.preventDefault();

    await axios({
      method: "POST",
      url: `${URL}user/login`,
      data: {
        email,
        password,
      },
      withCredentials: true,
    })
      .then((res) => {
        if (res.status === 200) {
          dispatch(loginSliceActions.setLogin(true));
          dispatch(loginSliceActions.setUserInfo(res.data.userData));
          dispatch(cartSliceActions.setItems(res.data.userData.cart));
          dispatch(cartSliceActions.setCount(res.data.userData.cart.length));
          navigate("/");
        }

        if (res.status === 203) {
          setLoginError(true);
          setErrorMessage(res.data.message);
          setTimeout(() => {
            setLoginError(false);
            setErrorMessage("");
          }, 5000);
        }
      })
      .catch((e) => {
        console.log(e);
        setLoginError(true);
        setErrorMessage(e.response.data.message);
        setTimeout(() => {
          setLoginError(false);
          setErrorMessage("");
        }, 5000);
      });
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-t from-blue-500 to-white ">
      <MotionComponent>
        <div className="bg-white rounded-lg shadow-md p-6 sm:w-96 w-full">
          <div className="text-center">
            <img src={img} alt="NorthStar Logo" className="w-32 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Sign-In
            </h3>
            {loginError && (
              <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
            )}
          </div>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium">
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="border border-gray-300 rounded-md p-2 w-full focus:ring focus:ring-blue-500"
                placeholder="Your Email"
                onChange={emailChangeHandler}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium">
                Password:
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="border border-gray-300 rounded-md p-2 w-full focus:ring focus:ring-blue-500"
                  placeholder="Your Password"
                  onChange={passwordChangeHandler}
                />
                <span
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
                >
                  {showPassword ? (
                    <FontAwesomeIcon icon={faEye} />
                  ) : (
                    <FontAwesomeIcon icon={faEyeSlash} />
                  )}
                </span>
              </div>
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-400 w-full"
                onClick={loginHandler}
              >
                Sign-In
              </button>
            </div>
            <div className="mt-4">
              <p className="font-bold text-xl text-center mb-4">or</p>
              <button className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-700 w-full mb-2">
                <i className="fa fa-google mr-2"></i>
                Sign-In with Google
              </button>
              <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-800 w-full mb-2">
                <i className="fa fa-facebook mr-2"></i>
                Sign-In with Facebook
              </button>
              <button className="bg-blue-400 text-white py-2 px-4 rounded-md hover:bg-blue-700 w-full">
                <i className="fa fa-twitter mr-2"></i>
                Sign-In with Twitter
              </button>
            </div>
            <p className="text-center mt-4 text-gray-600 text-sm">
              Don't have an account?{" "}
              <NavLink
                to="/signUp"
                className="text-red-500 tracking-[1px] hover:underline"
              >
                Create one here
              </NavLink>
            </p>
          </form>
        </div>
      </MotionComponent>
    </div>
  );
};

export default Login;
