import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { loginSliceActions } from "../../../Store/loginSlice";
import MotionComponent from "../../../components/Header/Animation";
import { URL } from "../../../Assets/environment/url";
import { NavLink } from "react-router-dom";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const nameChangeHandler = (e) => {
    const nameInput = e.target.value;
    setName(nameInput);
  };

  const emailChangeHandler = (e) => {
    const emailInput = e.target.value;
    setEmail(emailInput);
  };

  const passwordChangeHandler = (e) => {
    const passwordInput = e.target.value;
    setPassword(passwordInput);
  };

  const confirmPasswordChangeHandler = (e) => {
    const confirmPasswordInput = e.target.value;
    setConfirmPassword(confirmPasswordInput);
  };

  const phoneChangeHandler = (e) => {
    const phoneInput = e.target.value;
    setPhone(phoneInput);
  };

  const addressChangeHandler = (e) => {
    const addressInput = e.target.value;
    setAddress(addressInput);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const validatePassword = (password) => {
    return password.length >= 7;
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !phone || !address) {
      alert("Please fill in all fields.");
      return;
    }

    if (!validatePassword(password)) {
      alert("Password should be at least 7 characters long.");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const res = await axios({
      method: "POST",
      url: `${URL}user/signUp`,
      data: {
        name,
        email,
        password,
        phone,
        address,
      },
    });

    if (res.statusText === "OK") {
      dispatch(loginSliceActions.setLogin(true));
      dispatch(loginSliceActions.setUserInfo(res.data.userData));
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center  shadow-md ">
      <MotionComponent>
        <div className="bg-zinc-300 p-8 md:p-12 lg:p-16 w-full rounded-xl">
          <p className="w-full lg:w-1/4 mx-auto text-center text-2xl font-bold text-gray-800 mb-10 p-2 rounded-xl bg-gradient-to-t from-blue-300 to-white shadow-md shadow-black uppercase">
            Sign-up 👇
          </p>
          <form className="lg:grid container lg:w-screen lg:grid-cols-2 gap-4">
            <div className="mb-4">
              <label htmlFor="name" className="block text-md font-medium">
                Name:
              </label>
              <input
                type="text"
                id="name"
                className="border rounded-md p-2 w-full focus:ring focus:ring-blue-500"
                placeholder="Enter Your Name"
                onChange={nameChangeHandler}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-md font-medium">
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="border rounded-md p-2 w-full focus:ring focus:ring-blue-500"
                placeholder="Enter Your Email"
                onChange={emailChangeHandler}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-md font-medium">
                Password:
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="border rounded-md p-2 w-full focus:ring focus:ring-blue-500"
                  placeholder="Enter Password"
                  onChange={passwordChangeHandler}
                  required
                />
                <span
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
                >
                  {showPassword ? (
                    <FontAwesomeIcon icon={faEye} className="text-gray-500" />
                  ) : (
                    <FontAwesomeIcon
                      icon={faEyeSlash}
                      className="text-blue-500"
                    />
                  )}
                </span>
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-md font-medium"
              >
                Confirm Password:
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="border rounded-md p-2 w-full focus:ring focus:ring-blue-500"
                placeholder="Confirm Password"
                onChange={confirmPasswordChangeHandler}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="phone" className="block text-md font-medium">
                Phone:
              </label>
              <input
                type="number"
                id="phone"
                className="border rounded-md p-2 w-full focus:ring focus:ring-blue-500"
                placeholder="Enter Phone No"
                onChange={phoneChangeHandler}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="address" className="block text-md font-medium">
                Address:
              </label>
              <input
                type="text"
                id="address"
                className="border rounded-md p-2 w-full focus:ring focus:ring-blue-500"
                placeholder="Enter Address"
                onChange={addressChangeHandler}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-md font-medium">
                Show Password:
              </label>
              <input
                type="checkbox"
                onChange={togglePasswordVisibility}
                className="form-checkbox h-5 w-5 text-blue-500"
              />

              <p className="mt-4">
                Already have an account?
                <NavLink
                  to="/login"
                  className="text-green-900 font-bold tracking-[1px] ml-2 hover:underline hover:cursor-pointer"
                >
                  Click here!
                </NavLink>
              </p>
            </div>

            <div className="col-span-2 mx-auto w-full flex  justify-center">
              <button
                type="submit"
                className="text-xl bg-blue-500 text-white p-4 rounded-full tracking-[2px] hover:bg-blue-600 w-full lg:w-1/4 "
                onClick={submitHandler}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </MotionComponent>
    </div>
  );
};

export default Signup;
