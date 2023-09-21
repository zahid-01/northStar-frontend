import { NavLink } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MotionComponent from "../Header/Animation";
import { URL } from "../../Assets/environment/url";
import { useLoaderData } from "react-router-dom";
import { useDispatch } from "react-redux";

import { cartSliceActions } from "../../Store/cartSlice";

const Product = (props) => {
  const dispatch = useDispatch();
  const { product } = useLoaderData().data;

  const [currentImage, setCurrentImage] = useState(0);
  const images = [...product.images];

  const prevImage = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const nextImage = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  async function addTOCartHandler() {
    const res = await axios({
      method: "POST",
      url: `${URL}people/addToCart`,
      data: {
        productId: this,
        count: 1,
      },
    });

    if (res.data.status === "Success") {
      const cart = res.data.newCart.cart;
      dispatch(
        cartSliceActions.addItems(res.data.newCart.cart[cart.length - 1])
      );
      dispatch(cartSliceActions.setCount(cart.length));
    }
  }

  return (
    <MotionComponent>
      <div className="container flex flex-col md:h-[80vh] mx-auto py-6 justify-center ">
        <div className="bg-slate-200 flex flex-col md:flex-row shadow-md p-4 rounded-lg shadow-green-300 ">
          <div className="md:w-1/2 md:mr-8 p-4">
            <img
              src={images[currentImage]}
              alt={`img ${currentImage + 1}`}
              className="w-auto h-64 mx-auto md:w-auto md:h-auto rounded-lg"
            />
            <div className="flex justify-center mt-4">
              <button
                onClick={prevImage}
                className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
              <button
                onClick={nextImage}
                className="ml-4 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-center tracking-[1px] md:w-1/2 mt-4 md:mt-0">
            <h1 className="text-4xl font-semibold mb-4">
              {product.productName}
            </h1>
            <p className="text-xl mb-4">{product.productDescription}</p>
            <div className="flex justify-between items-center ">
              <p className="text-xl font-semibold">
                &#8377; {product.productPrice}
              </p>
              <div
                className="flex space-x-4 "
                onClick={addTOCartHandler.bind(product._id)}
              >
                <button className="px-4 py-2 bg-blue-500 text-white rounded-full tracking-[2px] hover:bg-blue-800">
                  Add to Cart
                </button>
                <NavLink
                  className="px-4 py-2 bg-blue-500 text-white rounded-full text-center tracking-[2px] hover:bg-blue-800"
                  to="/checkout"
                  state={product}
                >
                  Buy Now
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MotionComponent>
  );
};

export default Product;

export const fetchProductDescription = async ({ params }) => {
  let product;

  await axios({
    method: "GET",
    url: `${URL}products/${params.id}`,
  })
    .then((res) => (product = res))
    .catch((e) => {
      throw new Error();
    });

  return product;
};
