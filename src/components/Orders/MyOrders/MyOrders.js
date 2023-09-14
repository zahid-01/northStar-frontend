import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import OrderCard from "../OrderCard/OrderCard";
import { URL } from "../../../Assets/environment/url";

const MyOrders = () => {
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
      <h2 className="text-4xl text-center mt-4 font-semibold mb-4">
        My Orders
      </h2>
      <div className="shadow-lg p-8 grid gap-8 grid-cols-2 text-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {myOrders.map((el) => (
          <OrderCard key={el._id} orderItem={el} />
        ))}
      </div>
    </Fragment>
  );
};

export default MyOrders;
