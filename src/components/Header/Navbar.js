import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
import { loginSliceActions } from "../../Store/loginSlice";
import { URL } from "../../Assets/environment/url";
import logo from "../../Assets/Imgs/796994.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

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
          window.location.href = "/";
        }
      })
      .catch((e) => {
        alert("Oops, something went wrong!");
      });
  };

  return (
    <div
      className={`backdrop-blur-md p-2 md:p-4 lg:p-6 sticky top-0 z-50 shadow-lg`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="cursor-pointer w-24 h-12"
            onClick={() => navigate("/")}
          />
        </div>
        <h2 className="text-green-500 ml-2 text-3xl md:text-2xl lg:text-4xl font-bold tracking-[1px]">
          NORTH STAR
        </h2>
        <div className="hidden md:flex items-center space-x-2 text-lg md:space-x-4 lg:space-x-6">
          {isLoggedIn && (
            <>
              {userInfo.role === "ns-admin" && (
                <NavLink
                  to="inventory"
                  className="text-black hover:underline font-semibold"
                >
                  Inventory
                </NavLink>
              )}
              <NavLink
                to="myOrders"
                className="text-black hover:underline font-semibold"
              >
                My Orders
              </NavLink>
              <NavLink
                to="cart"
                className="text-center text-black block hover:underline font-semibold"
              >
                Cart
              </NavLink>
            </>
          )}
          {!isLoggedIn && (
            <>
              <NavLink
                to="login"
                className="text-black hover:underline font-semibold"
              >
                Login
              </NavLink>
              <NavLink
                to="signUp"
                className="text-black hover:underline font-semibold"
              >
                Sign up
              </NavLink>
            </>
          )}
          {isLoggedIn && (
            <div className="flex items-center">
              <NavLink
                to="#"
                className="text-green-500 text-xl tracking-[1px] font-semibold underline"
              >
                {userInfo.name}
              </NavLink>
              <button
                onClick={logoutHandler}
                className="bg-black text-red-500 px-3 py-2 rounded-full font-semibold hover:bg-blue-100 ml-2"
              >
                Logout
              </button>
            </div>
          )}
        </div>

        <div className="md:hidden">
          <button
            className="text-black"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMobileMenuOpen ? (
              <FontAwesomeIcon icon={faClose} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden py-2">
          <div className="container mx-auto space-y-4">
            {isLoggedIn && (
              <>
                {userInfo.role === "ns-admin" && (
                  <NavLink
                    to="inventory"
                    className="text-center text-black block hover:underline font-semibold"
                  >
                    Inventory
                  </NavLink>
                )}
                <NavLink
                  to="myOrders"
                  className="text-center text-black block hover:underline font-semibold"
                >
                  My Orders <i className="fa fa-gift ml-1"></i>
                </NavLink>
                <NavLink
                  to="cart"
                  className="text-center text-black block hover:underline font-semibold"
                >
                  Cart <i className="fa fa-shopping-cart ml-1"></i>
                </NavLink>
              </>
            )}
            {!isLoggedIn && (
              <>
                <NavLink
                  to="login"
                  className="text-center text-black block hover:underline text-[18px] font-bold tracking-[1px]"
                >
                  Login
                </NavLink>
                <NavLink
                  to="signUp"
                  className="text-center text-black block hover:underline text-[18px] font-bold tracking-[1px]"
                >
                  Sign up
                </NavLink>
              </>
            )}
            {isLoggedIn && (
              <div className="flex items-center justify-center">
                <NavLink
                  to="#"
                  className="text-green-500 font-semibold tracking-[1px] hover:underline"
                >
                  {userInfo.name} 🙂
                </NavLink>
                <button
                  onClick={logoutHandler}
                  className="bg-blue-500 text-white px-2 py-1 rounded-full font-semibold hover:bg-red-500 ml-2"
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
