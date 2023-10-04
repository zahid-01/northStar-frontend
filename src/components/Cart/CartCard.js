import { useDispatch } from "react-redux";
import { URL } from "../../Assets/environment/url";
import { cartSliceActions } from "../../Store/cartSlice";

const CartCard = ({ product }) => {
  const dispatch = useDispatch();

  function handleRemoveItem() {
    dispatch(cartSliceActions.removeItems(product.item._id));
  }
  return (
    <>
      <div className="bg-white p-4 rounded shadow">
        <img
          src={`${URL}img/products/${product.item.images[0]}`}
          alt="img"
          className="h-56 w-full object-contain"
        />
        <h3 className="text-center text-xl font-bold m-4">
          {product.item.productName}
        </h3>
        <p className="text-center text-blue-700 font-semibold">
          &#8377;{product.item.productPrice}
        </p>
        <p className="text-center text-blue-700 font-semibold">
          Quantity: {product.count}
        </p>
        <button
          className="text-white bg-red-600 px-3 py-4 rounded-2xl flex mx-auto mt-4 hover:bg-red-700"
          onClick={handleRemoveItem}
        >
          remove <i className="fa fa-trash ml-2 mt-1" />
        </button>
      </div>
    </>
  );
};

export default CartCard;
