import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

import { loginSliceActions } from "../../../Store/loginSlice";

import classes from "./Signup.module.css";
import { URL } from "../../../Assets/environment/url";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const phoneChangeHandler = (e) => {
    setPhone(e.target.value);
  };

  const addressChangeHandler = (e) => {
    setAddress(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !phone || !address) return;

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
        <div className={classes.container}>
          <h3 className="logo-3">Sign-up</h3>
          <form className={classes.signup}>
            <div className={`${classes.userName} `}>
              <label>Name</label>
              <input
                type="text"
                placeholder="NorthStar"
                onChange={nameChangeHandler}
              ></input>
            </div>
            <div className={classes.userEmail}>
              <label>Email</label>
              <input
                type="email"
                placeholder="NorthStar@example.com"
                onChange={emailChangeHandler}
              ></input>
            </div>
            <div className={`${classes.userPassword} ${classes.userPass1}`}>
              <label>Password</label>
              <input
                type="password"
                placeholder="*****"
                onChange={passwordChangeHandler}
              ></input>
            </div>
            <div className={`${classes.userPassword}`}>
              <label>Confirm</label>
              <input type="password" placeholder="*****"></input>
            </div>
            <div className={`${classes.usernumber}`}>
              <label>Phone</label>
              <input
                type="number"
                placeholder="9797979797"
                onChange={phoneChangeHandler}
              ></input>
            </div>
            <div className={`${classes.useraddress}`}>
              <label>Address</label>
              <input
                type="text"
                placeholder="Srinagar"
                onChange={addressChangeHandler}
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
      </div>
    </>
  );
};
export default Signup;
