import { useLoaderData, NavLink } from "react-router-dom";

import classes from "./LandingPage.module.css";

import Filter from "./Filter";
import axios from "axios";

import { URL } from "../../Assets/environment/url";

const LandingPage = () => {
  const products = useLoaderData();
  return (
    <>
      <Filter />
      <div className={classes.landingCont}>
        <div className={classes.productsCont}>
          {products.map((el) => {
            return (
              <NavLink
                className={classes.productDetails}
                key={el.productCode}
                to={`product/${el._id}`}
              >
                <img
                  className={classes.productImg}
                  src={el.images[1]}
                  alt="product img"
                />
                <div className={classes.productBio}>
                  <p>{el.productName}</p>
                  <p>&#8377; {el.productPrice}</p>
                  <p>{el.productDescription}</p>
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default LandingPage;

export const fetchProducts = async () => {
  const products = await axios({
    method: "GET",
    url: `${URL}products`,
  }).catch((e) => console.log(e));

  return products.data.products;
};
