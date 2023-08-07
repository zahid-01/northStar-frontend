import { NavLink } from "react-router-dom";
import classes from "./ProductCard.module.css";
import MotionComponent from "../Header/Animation";
const ProductCard = ({ products, filterValue }) => {
  console.log(filterValue);

  if (filterValue)
    return products.map((el) => {
      if (el.productCategory === filterValue)
        return (
          <NavLink
            className={classes.productDetails}
            key={el.productCode}
            to={`product/${el._id}`}
          >
            <MotionComponent>
              <img
                className={classes.productImg}
                src={el.images[0]}
                alt="product img"
              />
              <div className={classes.productBio}>
                <p className={classes.pName}>{el.productName}</p>
                <p className={classes.pPrice}>&#8377;{el.productPrice}</p>
                <p className={classes.pDes}>{el.productDescription}</p>
              </div>
            </MotionComponent>
          </NavLink>
        );
      return null;
    });
  return products.map((el) => {
    return (
      <NavLink
        className={classes.productDetails}
        key={el.productCode}
        to={`product/${el._id}`}
      >
        <MotionComponent>
          <img
            className={classes.productImg}
            src={el.images[0]}
            alt="product img"
          />
          <div className={classes.productBio}>
            <p className={classes.pName}>{el.productName}</p>
            <p className={classes.pPrice}>&#8377;{el.productPrice}</p>
            <p className={classes.pDes}>{el.productDescription}</p>
          </div>
        </MotionComponent>
      </NavLink>
    );
  });
};

export default ProductCard;
