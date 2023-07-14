import { URL } from "../../../Assets/environment/url";
import classes from "./OrderCars.module.css";

// const OrderCard = ({ product, status, date }) => {
const OrderCard = ({ orderItem }) => {
  return (
    <>
      <div className={classes.BuyCont}>
        <div className={classes.BuyDes}>
          <img
            src={`${URL}img/products/${orderItem.product.images[0]}`}
            alt="img"
          />
          <p>{orderItem.product.productName}</p>
          <p>&#8377;{orderItem.product.productPrice}</p>
          <p>Ordered on: {new Date(orderItem.date).toLocaleDateString()}</p>
        </div>
      </div>
    </>
  );
};

export default OrderCard;
