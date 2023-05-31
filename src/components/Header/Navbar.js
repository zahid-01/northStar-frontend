import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

import { loginSliceActions } from "../../Store/loginSlice";

import classes from "./Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.login);

  const logoutHandler = () => {
    dispatch(loginSliceActions.setLogin(false));
  };

  return (
    <div className={classes.header}>
      <div className={classes.headerCont}>
        <img
          src=""
          alt="Logo"
          onClick={() => {
            navigate("/");
          }}
        />
        <h2>Welcome to North Star</h2>
        <div className={classes.headerBtn}>
          {!isLoggedIn && (
            <>
              <NavLink className={[classes.btn]} to="login">
                Login
              </NavLink>
              <NavLink className={classes.btn} to="signUp">
                Sign up
              </NavLink>
            </>
          )}
          {isLoggedIn && (
            <button className={classes.btn} onClick={logoutHandler}>
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
