import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { loginSliceActions } from "../../../Store/loginSlice";
import { URL } from "../../../Assets/environment/url";
import { Suspense } from "react";
import classes from "./Login.module.css";
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
    <>
      <Suspense
        fallback={
          <div className={classes.container}>
            <div className={classes.loaderContainer}>
              <div className={classes.spinner}></div>
            </div>
          </div>
        }
      ></Suspense>
      <div className={classes.mainDiv}>
        <MotionComponent>
          <div className={classes.container}>
            <h3 className="logo-3">Login</h3>
            {loginError && <p>{errorMessage}</p>}
            <form>
              <div className={classes.user}>
                <label>Username:</label>
                <input type="email" onChange={emailChangeHandler}></input>
              </div>
              <div className={classes.userPass}>
                <label>Password:</label>
                <input
                  type={showPassword ? "text" : "password"}
                  onChange={passwordChangeHandler}
                ></input>
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
        </MotionComponent>
      </div>
    </>
  );
};
export default Login;
