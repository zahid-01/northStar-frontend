import { NavLink } from "react-router-dom";
import logo from "../../Assets/Imgs/796994.png";

import { animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faHeart } from "@fortawesome/free-solid-svg-icons";
const FooterPart = () => {
  function scrollToTop() {
    scroll.scrollToTop();
  }
  return (
    <>
      <footer class="bg-gray-100">
        <div class="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
          <div class="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
            <NavLink
              class="inline-block rounded-full bg-teal-600 p-2 text-white shadow transition hover:bg-teal-500 sm:p-3 lg:p-4"
              onClick={scrollToTop}
            >
              <FontAwesomeIcon
                icon={faChevronUp}
                className="bg-blue-500 p-2 rounded-full text-white"
              />
            </NavLink>
          </div>

          <div class="lg:flex lg:items-end lg:justify-between">
            <div>
              <div class="flex justify-center text-teal-600 lg:justify-start">
                <a href="/">
                  <img src={logo} alt="logo" />
                </a>
              </div>

              <p class="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Incidunt consequuntur amet culpa cum itaque neque.
              </p>
            </div>

            <ul class="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
              <li>
                <a
                  class="text-gray-700 transition hover:text-gray-700/75"
                  href="/"
                >
                  Shipping Policy
                </a>
              </li>

              <li>
                <a
                  class="text-gray-700 transition hover:text-gray-700/75"
                  href="/"
                >
                  Refund Policy
                </a>
              </li>

              <li>
                <a
                  class="text-gray-700 transition hover:text-gray-700/75"
                  href="/"
                >
                  Return Policy
                </a>
              </li>

              <li>
                <a
                  class="text-gray-700 transition hover:text-gray-700/75"
                  href="/"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-between">
            <p class="mt-12 text-center text-md text-gray-500 lg:text-right">
              Copyright &copy; {new Date().getFullYear()} All rights reserved.
            </p>
            <NavLink
              to={"developer"}
              key={1}
              className="text-md text-gray-700 mt-10"
            >
              Developers Link
              <FontAwesomeIcon icon={faHeart} className="ml-1" />
            </NavLink>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterPart;
