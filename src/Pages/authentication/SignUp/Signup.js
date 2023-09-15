// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import axios from "axios";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
// import { loginSliceActions } from "../../../Store/loginSlice";
// import MotionComponent from "../../../components/Header/Animation";
// // import classes from "./Signup.module.css";
// import { URL } from "../../../Assets/environment/url";

// const Signup = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [phone, setPhone] = useState("");
//   const [address, setAddress] = useState("");
//   const [showPassword, setShowPassword] = useState(false);

//   const nameChangeHandler = (e) => {
//     const nameInput = e.target.value;
//     setName(nameInput);
//   };

//   const emailChangeHandler = (e) => {
//     const emailInput = e.target.value;
//     setEmail(emailInput);
//   };

//   const passwordChangeHandler = (e) => {
//     const passwordInput = e.target.value;
//     setPassword(passwordInput);
//   };

//   const confirmPasswordChangeHandler = (e) => {
//     const confirmPasswordInput = e.target.value;
//     setConfirmPassword(confirmPasswordInput);
//   };
//   const phoneChangeHandler = (e) => {
//     const phoneInput = e.target.value;
//     setPhone(phoneInput);
//   };

//   const addressChangeHandler = (e) => {
//     const addressInput = e.target.value;
//     setAddress(addressInput);
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword((prevState) => !prevState);
//   };
//   const validatePassword = (password) => {
//     return password.length >= 7;
//   };
//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     return emailRegex.test(email);
//   };

//   const submitHandler = async (e) => {
//     e.preventDefault();

//     if (!name || !email || !password || !phone || !address) {
//       alert("Please Fill the fields");
//       return;
//     }
//     if (!validatePassword(password)) {
//       alert("Password should be at least 7 digit ");
//       return;
//     }
//     if (!validateEmail(email)) {
//       alert("Please enter a valid email address");
//       return;
//     }

//     if (password !== confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }

//     const res = await axios({
//       method: "POST",
//       url: `${URL}user/signUp`,
//       data: {
//         name,
//         email,
//         password,
//         phone,
//         address,
//       },
//     });

//     if (res.statusText === "OK") {
//       dispatch(loginSliceActions.setLogin(true));
//       dispatch(loginSliceActions.setUserInfo(res.data.userData));
//       navigate("/");
//     }
//   };

//   return (
//     <>
//       <div className={classes.mainDiv1}>
//         <MotionComponent>
//           <div className={classes.container}>
//             <h3 className="logo-3">Sign-up</h3>
//             <form className={classes.signup}>
//               <div className={`${classes.userName} `}>
//                 <label>Name:</label>
//                 <input
//                   type="text"
//                   placeholder="Enter Your Name"
//                   onChange={nameChangeHandler}
//                   required
//                 ></input>
//               </div>
//               <div className={classes.userEmail}>
//                 <label>Email:</label>
//                 <input
//                   type="email"
//                   placeholder="Enter Your Email"
//                   onChange={emailChangeHandler}
//                   required
//                 ></input>
//               </div>
//               <div className={`${classes.userPassword} ${classes.userPass1}`}>
//                 <label>Password:</label>

//                 <input
//                   type={showPassword ? "text" : "password"}
//                   placeholder="Enter Password"
//                   onChange={passwordChangeHandler}
//                   required
//                 />

//                 {showPassword ? (
//                   <FontAwesomeIcon
//                     icon={faEye}
//                     onClick={togglePasswordVisibility}
//                     className={classes.eye}
//                   />
//                 ) : (
//                   <FontAwesomeIcon
//                     icon={faEyeSlash}
//                     onClick={togglePasswordVisibility}
//                     className={classes.eye}
//                   />
//                 )}
//               </div>
//               <div className={`${classes.userPassword}`}>
//                 <label>Confirm:</label>
//                 <input
//                   type="password"
//                   placeholder="Confirm Password"
//                   onChange={confirmPasswordChangeHandler}
//                   required
//                 ></input>
//               </div>
//               <div className={`${classes.usernumber}`}>
//                 <label>Phone:</label>
//                 <input
//                   type="number"
//                   placeholder="Enter Phone No"
//                   onChange={phoneChangeHandler}
//                   required
//                 ></input>
//               </div>
//               <div className={`${classes.useraddress}`}>
//                 <label>Address:</label>
//                 <input
//                   type="text"
//                   placeholder="Enter Address"
//                   onChange={addressChangeHandler}
//                   required
//                 ></input>
//               </div>
//             </form>
//             <div className={classes.btnDiv}>
//               <button
//                 type="submit"
//                 className={classes.btn}
//                 onClick={submitHandler}
//               >
//                 Sign Up
//               </button>
//             </div>
//           </div>
//         </MotionComponent>
//       </div>
//     </>
//   );
// };
// export default Signup;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { loginSliceActions } from "../../../Store/loginSlice";
import MotionComponent from "../../../components/Header/Animation";
import { URL } from "../../../Assets/environment/url";

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-t from-blue-500 to-white shadow-md">
      <MotionComponent>
        <div className="bg-white mt-6 p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20 rounded-lg shadow-md w-full sm:w-96">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Sign-up</h3>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium">
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
              <label htmlFor="email" className="block text-sm font-medium">
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
              <label htmlFor="password" className="block text-sm font-medium">
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
                    <FontAwesomeIcon icon={faEye} className="text-gray-400" />
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
                className="block text-sm font-medium"
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
              <label htmlFor="phone" className="block text-sm font-medium">
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
              <label htmlFor="address" className="block text-sm font-medium">
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
              <label className="block text-sm font-medium">
                Show Password:
              </label>
              <input
                type="checkbox"
                onChange={togglePasswordVisibility}
                className="form-checkbox h-5 w-5 text-blue-500"
              />
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 w-full"
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
