import { Fragment, useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import axios from "axios";
import classes from "./MyOrders.module.css";
import { URL } from "../../../Assets/environment/url";
import OrderCard from "../OrderCard/OrderCard";

const MyOrders = () => {
  // const { userInfo } = useSelector((state) => state.login);
  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    const getMyOrders = async () => {
      await axios({
        method: "GET",
        url: `${URL}orders/myOrders`,
        withCredentials: true,
      })
        .then((res) => setMyOrders(res.data.data))
        .catch((e) => console.log(e));
    };

    getMyOrders();
  }, []);

  return (
    <Fragment>
      <h2 className={classes.orderHeader}>My Orders</h2>
      <ul>
        {myOrders.map((el) => (
          <li key={el._id}>
            <OrderCard orderItem={el} />
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default MyOrders;
