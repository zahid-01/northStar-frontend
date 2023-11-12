import { NavLink } from "react-router-dom";
import logo from "../../Assets/Imgs/796994.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faHeart,
  faArrowCircleUp,
} from "@fortawesome/free-solid-svg-icons";
import { animateScroll as scroll } from "react-scroll";
const FooterPart = () => {
  function scrollToTop() {
    scroll.scrollToTop();
  }
  return (
    <>
      <div className="relative py-8 bg-slate-300">
        <div className="container flex flex-col gap-4 md:flex-row justify-between items-center px-4">
          <a href="/">
            <img alt="Logo" src={logo} className="w-16 h-16 md:w-32 md:h-20" />
          </a>
          <div className="flex justify-between gap-8 md:space-x-6 text-black mt-4 md:mt-0">
            <div className="md:w-1/2 text-sm lg:text-lg">
              <h6 className="text-lg font-semibold mb-2">Address</h6>
              <p className="mb-2">
                Mir Mall Complex opposite
                <br /> District Police Lines Srinagar
              </p>
              <p className="mb-2">J&K 190001</p>
              <a href="tel:9797979797" className="flex items-center mb-2">
                <FontAwesomeIcon
                  icon={faPhone}
                  beat
                  className="text-blue-500 mr-2"
                  style={{ fontSize: "14px" }}
                />
                9797979797
              </a>
              <a
                href="mailto:northstar@gmail.com"
                className="flex items-center"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  beat
                  className="text-blue-500 mr-2"
                />
                Northstar@gmail.com
              </a>
            </div>
            <div className="mt-4 md:mt-0 text-sm lg:text-lg">
              <h6 className="text-lg font-semibold mb-2">Links</h6>
              <a href="privacy" className="block mb-1">
                Privacy Policy
              </a>
              <a href="refund" className="block mb-1">
                Refund
              </a>
              <a href="terms" className="block mb-1">
                Terms & Conditions
              </a>
              <a href="about" className="block">
                About Us
              </a>
            </div>
          </div>
        </div>
        <span
          role="button"
          onClick={scrollToTop}
          className="absolute bottom-0 lg:left-[95%] left-[80%]"
        >
          <FontAwesomeIcon
            icon={faArrowCircleUp}
            className="h-10 lg:h-16 w-16 text-orange-500 animate-pulse"
          />
        </span>
      </div>
      <div className="bg-blue-800 flex justify-between p-4 text-white text-center">
        <p className="text-md lg:text-xl mb-2">
          &copy; Copyright All rights reserved NorthStar
        </p>
        <NavLink to={"developer"} key={1} className="text-sm lg:text-xl">
          Developers Link
          <FontAwesomeIcon icon={faHeart} className="ml-1" />
        </NavLink>
      </div>
    </>
  );
};

export default FooterPart;
