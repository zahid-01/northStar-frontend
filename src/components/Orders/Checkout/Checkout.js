import { useLocation } from "react-router-dom";
import axios from "axios";
import { URL } from "../../../Assets/environment/url";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Checkout = () => {
  const { state: product } = useLocation();
  const subtotal = product.productPrice;
  const discount = 10;
  const shipping = 100;
  const taxPercentage = 0.18;

  const calculatedDiscount = subtotal * (discount / 100);
  const calculatedTax =
    (subtotal - calculatedDiscount + shipping) * taxPercentage;
  const calculatedTotal =
    subtotal - calculatedDiscount + shipping + calculatedTax;

  function checkOutHandler() {
    axios({
      method: "GET",
      url: `${URL}orders/get-checkout-session/${this}`,
    })
      .then((res) => {
        console.log(res.data.url);
        window.location.replace(res.data.url);
      })
      .catch((e) => console.log(e));
  }

  return (
    <>
      <div className="container mx-auto p-4 md:p-6 lg:p-8 xl:p-10">
        <div className="bg-white flex flex-col shadow-md shadow-green-300 p-4 justify-center md:p-6 lg:p-8 xl:p-10 rounded-lg">
          <h2 className="text-4xl text-blue-600 text-center font-semibold mb-8">
            Delivery
          </h2>
          <div className="flex flex-col md:flex-row ">
            <div className="md:w-1/3">
              <img src={product.images[0]} alt="product" className="w-full" />
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
                <select className="border rounded-md px-2 py-1 w-1/2 text-center">
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
        <div className="bg-white shadow-md p-4 md:p-6 lg:p-8 xl:p-10 rounded-lg">
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
    </>
  );
};

export default Checkout;
