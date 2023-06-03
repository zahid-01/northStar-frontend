import { useLoaderData } from "react-router-dom";

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
          {/* <div className={classes.productDetails}>
            <img className={classes.productImg} src={img1} alt="product img" />
            <div className={classes.productBio}>
              <p>HP Notebook G7 340s</p>
              <p>&#8377; 70,000</p>
              <div className={classes.btnBox}>
                <button className={classes.btn}>Buy Now</button>
                <button className={classes.btn}>Add to Cart</button>
              </div>
            </div>
          </div> */}
          {products.map((el) => {
            return (
              <div className={classes.productDetails} key={el.productCode}>
                <img
                  className={classes.productImg}
                  src={el.images[1]}
                  alt="product img"
                />
                <div className={classes.productBio}>
                  <p>{el.productName}</p>
                  <p>&#8377; {el.productPrice}</p>
                  <div className={classes.btnBox}>
                    <button className={classes.btn}>Buy Now</button>
                    <button className={classes.btn}>Add to Cart</button>
                  </div>
                </div>
              </div>
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
