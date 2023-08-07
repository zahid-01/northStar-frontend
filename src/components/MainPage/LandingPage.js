import { useLoaderData, defer, Await } from "react-router-dom";
import { Suspense, useState } from "react";

import classes from "./LandingPage.module.css";
import Carousel from "../Header/Carousel";
import { SliderData } from "../Header/SliderData";
import Filter from "./Filter";
import axios from "axios";
import Testimonial from "./Testimonial";
import { URL } from "../../Assets/environment/url";
import ProductCard from "../ProductCard/ProductCard";
import ContactForm from "./Contact";
import MotionComponent from "../Header/Animation";

const LandingPage = () => {
  const { product } = useLoaderData();
  const [category, setCategory] = useState();

  const categoryDisplay = (category = "monitors") => {
    setCategory(category);
  };

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
      <Filter filter={categoryDisplay} />
      <MotionComponent>
        <div className={classes.landingCont}>
          <div className={classes.productsCont}>
            <Await resolve={product}>
              {({ products }) => (
                <ProductCard products={products} filterValue={category} />
              )}
            </Await>
          </div>
        </div>
      </MotionComponent>

      <Testimonial />
      <ContactForm />
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
