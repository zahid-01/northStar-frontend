import { NavLink } from "react-router-dom";
import classes from "./ProductCard.module.css";

const ProductCard = ({ products }) => {
  return products.map((el) => {
    return (
      <NavLink
        className={classes.productDetails}
        key={el.productCode}
        to={`product/${el._id}`}
      >
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
      </NavLink>
    );
  });
};

export default ProductCard;
