import img1 from "../../Assets/Imgs/p1.jpg";
import img2 from "../../Assets/Imgs/p2.jpg";
import img3 from "../../Assets/Imgs/p3.jpg";
import classes from "./LandingPage.module.css";
import Filter from "./Filter";

const LandingPage = () => {
  return (
    <>
      <Filter />
      <div className={classes.landingCont}>
        <div className={classes.productsCont}>
          <div className={classes.productDetails}>
            <img className={classes.productImg} src={img1} alt="product img" />
            <div className={classes.productBio}>
              <p>HP Notebook G7 340s</p>
              <p>&#8377; 70,000</p>
              <div className={classes.btnBox}>
                <button className={classes.btn}>Buy Now</button>
                <button className={classes.btn}>Add to Cart</button>
              </div>
            </div>
          </div>
          <div className={classes.productDetails}>
            <img className={classes.productImg} src={img2} alt="product img" />
            <div className={classes.productBio}>
              <p>HP Notebook G7 340s</p>
              <p>&#8377; 70,000</p>
              <div className={classes.btnBox}>
                <button className={classes.btn}>Buy Now</button>
                <button className={classes.btn}>Add to Cart</button>
              </div>
            </div>
          </div>
          <div className={classes.productDetails}>
            <img className={classes.productImg} src={img3} alt="product img" />
            <div className={classes.productBio}>
              <p>HP Notebook G7 340s</p>
              <p>&#8377; 70,000</p>
              <div className={classes.btnBox}>
                <button className={classes.btn}>Buy Now</button>
                <button className={classes.btn}>Add to Cart</button>
              </div>
            </div>
          </div>
          <div className={classes.productDetails}>
            <img className={classes.productImg} src={img3} alt="product img" />
            <div className={classes.productBio}>
              <p>HP Notebook G7 340s</p>
              <p>&#8377; 70,000</p>
              <div className={classes.btnBox}>
                <button className={classes.btn}>Buy Now</button>
                <button className={classes.btn}>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LandingPage;
