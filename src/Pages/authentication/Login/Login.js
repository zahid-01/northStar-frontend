import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import { loginSliceActions } from "../../../Store/loginSlice";
import { URL } from "../../../Assets/environment/url";

import classes from "./Login.module.css";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginError, setLoginError] = useState(false);

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
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
          navigate("/");
        }
      })
      .catch((e) => {
        console.log(e);
        setLoginError(true);
        setTimeout(() => {
          setLoginError(false);
        }, 5000);
      });
  };

  return (
    <>
      <div className={classes.mainDiv}>
        <div className={classes.container}>
          <h3 className="logo-3">Login</h3>
          {loginError && <p>Something went wrong</p>}
          <form>
            <div className={classes.user}>
              <label>Username</label>
              <input type="text" onChange={emailChangeHandler}></input>
            </div>
            <div className={classes.userPass}>
              <label>Password</label>
              <input type="password" onChange={passwordChangeHandler}></input>
            </div>
          </form>
          <div className={classes.btnDiv}>
            <button
              type="submit"
              className={classes.btn}
              onClick={loginHandler}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
