import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";

import classes from "./Product.module.css";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MotionComponent from "../Header/Animation";
import { URL } from "../../Assets/environment/url";

const Product = (props) => {
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
  return (
    <>
      <MotionComponent>
        <div className={classes.productCont}>
          <div className={classes.corousel}>
            <img
              src={images[currentImage]}
              alt={`img ${currentImage + 1}`}
              className={classes.carouselimage}
            />
            <div className={classes.productBtn}>
              <button onClick={prevImage} className={classes.corouselbutton}>
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
              <button onClick={nextImage} className={classes.corouselbutton}>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
          <div className={classes.desCont}>
            <p className={classes.description}>{product.productDescription}</p>
            <div className={classes.productPrice}>
              <p className={classes.price}>&#8377; {product.productPrice}</p>
              <div className={classes.productBtn}>
                <button className={classes.btn}>Add to Cart</button>
                <NavLink className={classes.btn} to="/checkout" state={product}>
                  Buy Now
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </MotionComponent>
    </>
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
