import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { loginSliceActions } from "../../../Store/loginSlice";
import MotionComponent from "../../../components/Header/Animation";
import classes from "./Signup.module.css";
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
      alert("Please Fill the fields");
      return;
    }
    if (!validatePassword(password)) {
      alert("Password should be at least 7 digit ");
      return;
    }
    if (!validateEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
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
    <>
      <div className={classes.mainDiv1}>
        <MotionComponent>
          <div className={classes.container}>
            <h3 className="logo-3">Sign-up</h3>
            <form className={classes.signup}>
              <div className={`${classes.userName} `}>
                <label>Name:</label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  onChange={nameChangeHandler}
                  required
                ></input>
              </div>
              <div className={classes.userEmail}>
                <label>Email:</label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  onChange={emailChangeHandler}
                  required
                ></input>
              </div>
              <div className={`${classes.userPassword} ${classes.userPass1}`}>
                <label>Password:</label>

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  onChange={passwordChangeHandler}
                  required
                />

                {showPassword ? (
                  <FontAwesomeIcon
                    icon={faEye}
                    onClick={togglePasswordVisibility}
                    className={classes.eye}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faEyeSlash}
                    onClick={togglePasswordVisibility}
                    className={classes.eye}
                  />
                )}
              </div>
              <div className={`${classes.userPassword}`}>
                <label>Confirm:</label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  onChange={confirmPasswordChangeHandler}
                  required
                ></input>
              </div>
              <div className={`${classes.usernumber}`}>
                <label>Phone:</label>
                <input
                  type="number"
                  placeholder="Enter Phone No"
                  onChange={phoneChangeHandler}
                  required
                ></input>
              </div>
              <div className={`${classes.useraddress}`}>
                <label>Address:</label>
                <input
                  type="text"
                  placeholder="Enter Address"
                  onChange={addressChangeHandler}
                  required
                ></input>
              </div>
            </form>
            <div className={classes.btnDiv}>
              <button
                type="submit"
                className={classes.btn}
                onClick={submitHandler}
              >
                Sign Up
              </button>
            </div>
          </div>
        </MotionComponent>
      </div>
    </>
  );
};
export default Signup;
