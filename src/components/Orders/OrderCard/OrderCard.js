import { URL } from "../../../Assets/environment/url";
import classes from "./OrderCars.module.css";

const OrderCard = ({ orderItem }) => {
  console.log(orderItem);
  return (
    <>
      <div className={classes.BuyCont}>
        <div className={classes.BuyDes}>
          <img src={`${URL}/img/products/${orderItem.images[0]}`} alt="img" />
          <p>{orderItem.productName}</p>
          <p>&#8377;{orderItem.productPrice}</p>
          <p>Ordered on: {new Date().toLocaleDateString()}</p>
          {/* <p> Status</p> */}
        </div>
      </div>
    </>
  );
};

export default OrderCard;
