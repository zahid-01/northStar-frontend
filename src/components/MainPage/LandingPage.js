import { useLoaderData, defer, Await } from "react-router-dom";
import { Suspense } from "react";

import classes from "./LandingPage.module.css";
import Carousel from "../Header/Carousel";
import { SliderData } from "../Header/SliderData";
import Filter from "./Filter";
import axios from "axios";
import Testimonial from "./Testimonial";
import { URL } from "../../Assets/environment/url";
import ProductCard from "../ProductCard/ProductCard";

const LandingPage = () => {
  const { product } = useLoaderData();

  return (
    <Suspense
      fallback={
        <div className={classes.container}>
          <div className={classes.loaderContainer}>
            <div className={classes.spinner}></div>
          </div>
        </div>
      }
    >
      <Carousel slides={SliderData} />
      <Filter />
      <div className={classes.landingCont}>
        <div className={classes.productsCont}>
          <Await resolve={product}>
            {({ products }) => <ProductCard products={products} />}
          </Await>
        </div>
      </div>
      <Testimonial />
    </Suspense>
  );
};
export default LandingPage;

const loadProducts = async () => {
  const products = await axios({
    method: "GET",
    url: `${URL}products`,
  }).catch((e) => {
    throw new Error();
  });

  return products.data;
};

export const fetchProducts = () => {
  return defer({
    product: loadProducts(),
  });
};
