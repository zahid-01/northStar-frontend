import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactForm = () => {
  return (
    <section className="min-h-screen bg-blue-500/80">
      <div className="container px-6 py-10 mx-auto">
        <div className="lg:flex lg:items-center lg:-mx-10">
          <div className="lg:w-1/2 lg:mx-10">
            <h1 className="text-2xl font-semibold text-gray-800 capitalize dark:text-white lg:text-3xl">
              Let’s talk
            </h1>

            <p className="mt-4 text-white tracking-wider">
              Ask us everything and we would love to hear from you
            </p>

            <form className="mt-12">
              <div className="-mx-2 md:items-center md:flex">
                <div className="flex-1 px-2">
                  <label className="block mb-2 text-md text-white tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Basit Bhat"
                    className="block w-full px-5 py-3 mt-2 placeholder-gray-200 bg-white border border-gray-200 rounded-md dark:placeholder-gray-400  dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="flex-1 px-2 mt-4 md:mt-0">
                  <label className="block mb-2 text-md text-white tracking-wider">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="example@example.com"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600  dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
              </div>

              <div className="w-full mt-4">
                <label className="block mb-2 text-md text-white tracking-wider">
                  Message
                </label>
                <textarea
                  className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-56 dark:placeholder-gray-600 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Message"
                ></textarea>
              </div>

              <button className="w-full px-6 py-3 mt-4 text-lg  font-medium tracking-wider text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                get in touch
              </button>
            </form>
          </div>

          <div className="mt-12 lg:flex lg:mt-0 lg:flex-col lg:items-center lg:w-1/2 lg:mx-10">
            <img
              className="hidden object-cover mx-auto rounded-full lg:block shrink-0 w-96 h-96"
              src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="logo"
            />

            <div className="mt-6 space-y-8 md:mt-8">
              <p className="flex items-start -mx-2">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="w-6 h-6 mx-2 text-white"
                />

                <span className="mx-2 text-white tracking-wider">
                  Mir Mall Complex opposite District Police Lines Srinagar J&K
                  190001
                </span>
              </p>

              <p className="flex items-start -mx-2">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="w-6 h-6 mx-2 text-white"
                />

                <a
                  href="tel:9797979797"
                  className="mx-2 text-white tracking-wider truncate w-72 "
                >
                  9797979797
                </a>
              </p>

              <p className="flex items-start -mx-2">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="w-6 h-6 mx-2 text-white"
                />

                <a
                  href="mailto:acb@example.com"
                  className="mx-2 text-white tracking-wider truncate w-72"
                >
                  acb@example.com
                </a>
              </p>
            </div>

            <div className="mt-6 w-80 md:mt-8">
              <h3 className="text-white text-lg tracking-wider ">Follow us</h3>

              <div className="flex mt-4 -mx-2.5 gap-4 ">
                <a
                  className="mx-1.5 dark:hover:text-blue-400 text-white transition-colors duration-300 transform hover:text-blue-500"
                  href="/"
                >
                  <i className="fa fa-twitter fa-2x"></i>
                </a>

                <a
                  className="mx-1.5 dark:hover:text-red-500 text-white transition-colors duration-300 transform hover:text-red-500"
                  href="/"
                >
                  <i className="fa fa-instagram fa-2x"></i>
                </a>

                <a
                  className="mx-1.5 dark:hover:text-red-600 text-white transition-colors duration-300 transform hover:text-blue-500"
                  href="/"
                >
                  <i className="fa fa-youtube fa-2x"></i>
                </a>

                <a
                  className="mx-1.5 dark:hover:text-blue-400 text-white transition-colors duration-300 transform hover:text-blue-500"
                  href="/"
                >
                  <i className="fa fa-facebook fa-2x"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactForm;
