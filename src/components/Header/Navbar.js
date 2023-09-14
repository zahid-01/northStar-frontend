import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
import { loginSliceActions } from "../../Store/loginSlice";
import { URL } from "../../Assets/environment/url";
import logo from "../../Assets/Imgs/796994.png";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn, userInfo } = useSelector((state) => state.login);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const logoutHandler = async () => {
    await axios({
      method: "GET",
      url: `${URL}user/logout`,
    })
      .then((res) => {
        if (res.data.status === "Success") {
          dispatch(loginSliceActions.setLogin(false));
          dispatch(loginSliceActions.setUserInfo(null));
        }
      })
      .catch((e) => {
        alert("Oops, something went wrong!");
      });
  };

  return (
    <div
      className={`bg-blue-500 p-2 md:p-4 lg:p-6 sticky top-0 z-50 shadow-md`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="cursor-pointer w-full h-12"
            onClick={() => navigate("/")}
          />
        </div>
        <h2 className="text-green-200 ml-2 text-3xl md:text-2xl lg:text-4xl font-bold">
          North Star
        </h2>
        <div className="hidden md:flex items-center space-x-2 text-lg md:space-x-4 lg:space-x-6">
          {isLoggedIn && (
            <>
              {userInfo.role === "ns-admin" && (
                <NavLink
                  to="inventory"
                  className="text-white hover:underline font-semibold"
                >
                  Inventory
                </NavLink>
              )}
              <NavLink
                to="myOrders"
                className="text-white hover:underline font-semibold"
              >
                My Orders
              </NavLink>
            </>
          )}
          {!isLoggedIn && (
            <>
              <NavLink
                to="login"
                className="text-white hover:underline font-semibold"
              >
                Login
              </NavLink>
              <NavLink
                to="signUp"
                className="text-white hover:underline font-semibold"
              >
                Sign up
              </NavLink>
            </>
          )}
          {isLoggedIn && (
            <div className="flex items-center">
              <NavLink
                to="#"
                className="text-white font-semibold hover:underline"
              >
                {userInfo.name}
              </NavLink>
              <button
                onClick={logoutHandler}
                className="bg-white text-blue-500 px-2 py-1 rounded-full font-semibold hover:bg-blue-100 ml-2"
              >
                Logout
              </button>
            </div>
          )}
        </div>

        <div className="md:hidden">
          <button
            className="text-white"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-500 py-2">
          <div className="container mx-auto space-y-4">
            {isLoggedIn && (
              <>
                {userInfo.role === "ns-admin" && (
                  <NavLink
                    to="inventory"
                    className="text-center text-white block hover:underline font-semibold"
                  >
                    Inventory
                  </NavLink>
                )}
                <NavLink
                  to="myOrders"
                  className="text-center text-white block hover:underline font-semibold"
                >
                  My Orders
                </NavLink>
              </>
            )}
            {!isLoggedIn && (
              <>
                <NavLink
                  to="login"
                  className="text-center text-white block hover:underline text-[18px] font-bold tracking-[1px]"
                >
                  Login
                </NavLink>
                <NavLink
                  to="signUp"
                  className="text-center text-white block hover:underline text-[18px] font-bold tracking-[1px]"
                >
                  Sign up
                </NavLink>
              </>
            )}
            {isLoggedIn && (
              <div className="flex items-center justify-center">
                <NavLink
                  to="#"
                  className="text-white font-semibold hover:underline"
                >
                  {userInfo.name}
                </NavLink>
                <button
                  onClick={logoutHandler}
                  className="bg-white text-blue-500 px-2 py-1 rounded-full font-semibold hover:bg-blue-100 ml-2"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
