import { URL } from "../../../Assets/environment/url";

const OrderCard = ({ orderItem }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 md:mb-0 ">
      <img
        src={`${URL}img/products/${orderItem.product.images[0]}`}
        alt="img"
        className="w-full h-48 object-cover mb-2"
      />
      <p className="text-lg font-semibold mb-2">
        {orderItem.product.productName}
      </p>
      <p className="text-blue-500 tracking-[1px] text-xl font-semibold">
        &#8377;{orderItem.product.productPrice}
      </p>
      <p className="text-sm text-gray-500 mt-2">
        Ordered on: {new Date(orderItem.date).toLocaleDateString()}
      </p>
    </div>
  );
};

export default OrderCard;
