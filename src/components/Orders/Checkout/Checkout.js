import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { URL } from "../../../Assets/environment/url";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faClose } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "react-modal";

Modal.setAppElement("#root");

const Checkout = () => {
  const { state: product } = useLocation();
  const [quantity, setQuantity] = useState(1);
  const subtotal = product.productPrice * quantity;
  const discount = 0;
  const shipping = 0;
  const taxPercentage = 0;

  const calculatedDiscount = subtotal * discount;
  const calculatedTax =
    (subtotal - calculatedDiscount + shipping) * taxPercentage;
  const calculatedTotal =
    subtotal - calculatedDiscount + shipping + calculatedTax;

  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const navigate = useNavigate();
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  function checkOutHandler() {
    if (!isLoggedIn) {
      setShowLoginPopup(true);
      return;
    }
    axios({
      method: "GET",
      url: `${URL}orders/get-checkout-session/${this}`,
    })
      .then((res) => {
        window.location.replace(res.data.url);
      })
      .catch((e) => console.log(e));
  }

  return (
    <>
      <div className="container mx-auto p-4 md:p-6 lg:p-8 xl:p-10">
        <div className="bg-slate-200 flex flex-col shadow-md shadow-green-300 p-4 justify-center md:p-6 lg:p-8 xl:p-10 rounded-lg">
          <h2 className="text-4xl text-blue-600 text-center font-semibold mb-8">
            Delivery
          </h2>
          <div className="flex flex-col md:flex-row ">
            <div className="md:w-1/3">
              <img
                src={product.images[0]}
                alt="product"
                className="w-full rounded-full lg:rounded-3xl"
              />
            </div>
            <div className="text-center flex flex-col py-8 text-xl justify-center md:w-2/3 mt-4 md:mt-0 md:ml-4">
              <div className="mb-2">
                <p className="font-semibold">Product Name:</p>
                <p>{product.productName}</p>
              </div>
              <div className="mb-2">
                <p className="font-semibold">Product Details:</p>
                <p>{product.productDescription}</p>
              </div>
              <div className="mb-2">
                <p className="font-semibold">Price:</p>
                <p className="text-blue-500 font-bold text-2xl">
                  &#8377; {product.productPrice}
                </p>
              </div>
              <div className="mb-2">
                <label className="font-semibold mx-4">Quantity:</label>
                <select
                  className="border rounded-md px-2 py-1 w-1/2 text-center"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                >
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:p-6 lg:p-8 xl:p-10">
        <div className="bg-slate-200 shadow-md p-4 md:p-6 lg:p-8 xl:p-10 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Summary</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>&#8377;{subtotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p>Shipping</p>
              <p>&#8377;{shipping.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p>Discount</p>
              <p className="text-bold text-green-500 text-lg">
                &#8377;{calculatedDiscount.toFixed(2)}
              </p>
            </div>
            <div className="flex justify-between">
              <p>Estimated Tax</p>
              <p>&#8377;{calculatedTax.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p className="font-semibold">Estimated Total</p>
              <p className="font-semibold text-xl text-blue-500 tracking-[1px]">
                &#8377;{calculatedTotal.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 md:p-6 lg:p-8 xl:p-10">
        <div className="bg-white shadow-md p-4 md:p-6 lg:p-8 xl:p-10 rounded-lg">
          <div className="text-center">
            <button
              onClick={checkOutHandler.bind(product._id)}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg inline-flex items-center"
            >
              Place Order
              <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-sm" />
            </button>
          </div>
        </div>
      </div>
      <Modal
        isOpen={showLoginPopup}
        onRequestClose={() => setShowLoginPopup(false)}
        contentLabel="Login Popup"
        className="modal-content"
        overlayClassName="modal-overlay fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-40"
      >
        <div className="modal-container bg-gradient-to-r from-blue-300 to-white  w-96 p-6 rounded-xl">
          <div className="modal-header flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Login Required</h2>
            <button
              className="text-gray-700 hover:text-gray-900 cursor-pointer"
              onClick={() => setShowLoginPopup(false)}
            >
              <FontAwesomeIcon icon={faClose} className="w-8 h-6" />
            </button>
          </div>
          <div className="modal-body text-center mb-4 tracking-wider">
            <p className="p-4">Please log in to proceed.</p>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 tracking-wider"
              onClick={() => navigate("/login")}
            >
              Go to Login
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Checkout;
