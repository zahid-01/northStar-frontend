import { useSelector, useDispatch } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";

import { loginSliceActions } from "../../Store/loginSlice";

import classes from "./Navbar.module.css";
import logo from "../../Assets/Imgs/796994.png";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn, userInfo } = useSelector((state) => state.login);

  const logoutHandler = () => {
    localStorage.removeItem("JWT");
    dispatch(loginSliceActions.setLogin(false));
    dispatch(loginSliceActions.setUserInfo(null));
  };

  return (
    <div className={classes.header}>
      <div className={classes.headerCont}>
        <img
          src={logo}
          alt="Logo"
          onClick={() => {
            navigate("/");
          }}
        />
        <h2>North Star</h2>
        <div className={classes.headerBtn}>
          {isLoggedIn && (
            <>
              <NavLink className={classes.btn} to="inventory">
                Inventory
              </NavLink>
              <NavLink className={classes.btn} to="myOrders">
                My Orders
              </NavLink>
            </>
          )}
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
            <>
              <NavLink className={classes.user}>{userInfo.name}</NavLink>
              <button className={classes.btn} onClick={logoutHandler}>
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
