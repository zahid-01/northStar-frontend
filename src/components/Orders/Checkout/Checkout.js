import { useLocation } from "react-router-dom";

import classes from "./Checkout.module.css";
import img from "../../../Assets/Imgs/p3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
function Checkout() {
  const { state: product } = useLocation();
  const subtotal = 100;
  const discount = 10;
  const shipping = 100;
  const taxPercentage = 0.18;

  const calculatedDiscount = subtotal * (discount / 100);
  const calculatedTax =
    (subtotal - calculatedDiscount + shipping) * taxPercentage;
  const calculatedTotal =
    subtotal - calculatedDiscount + shipping + calculatedTax;

  return (
    <>
      <div className={classes.deliveryBox}>
        <h2>Delivery</h2>
        <div className={classes.deliveryDetail}>
          <div className={classes.imgBox}>
            <img src={product.images[0]} alt="product" />
          </div>
          <div className={classes.detailBox}>
            <div className={classes.details}>
              <p>Product Name: </p>
              <span>{product.productName}</span>
              <p>Product Details: </p>
              <span>{product.productDescription}</span>
              <p>Price:</p>
              <span>&#8377; {product.productPrice}</span>

              <select>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.summary}>
        <div className={classes.summaryDetails}>
          <h2>Summary</h2>
          <div className={classes.subTotal}>
            <p>Subtotal</p>
            <span>{subtotal.toFixed(2)}</span>
          </div>

          <div className={classes.shipping}>
            <p>Shipping</p>
            <span>{shipping.toFixed(2)}</span>
          </div>
          <div className={classes.discount}>
            <p>Discount</p>
            <span>{calculatedDiscount.toFixed(2)}</span>
          </div>
          <div className={classes.tax}>
            <p>Estimated Tax</p>
            <span>{calculatedTax.toFixed(2)}</span>
          </div>

          <div className={classes.estimated}>
            <p>Estimated Total</p>
            <span className={classes.total}>
              &#8377;{calculatedTotal.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
      <div className={classes.payment}>
        <div className={classes.options}>
          <h2>Select payment Mode:</h2>
          <div className={classes.select}>
            <input type="radio" />
            <span>UPI</span>
            <input type="radio" />
            <span>Credit or debit Card</span>
            <input type="radio" />
            <span>Net Banking</span>
          </div>
          <div className={classes.payBtn}>
            <button>
              Place Order
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ marginLeft: "8px", fontSize: "14px" }}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;