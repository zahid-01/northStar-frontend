import { URL } from "../../Assets/environment/url";

const CartCard = ({ product }) => {
  return (
    <>
      <div className="bg-white p-4 rounded shadow">
        <img
          src={`${URL}img/products/${product.images[0]}`}
          alt="img"
          className="h-56 w-full object-contain"
        />
        <h3 className="text-center text-xl font-bold m-4">
          {product.productName}
        </h3>
        <p className="text-center text-blue-700 font-semibold">
          &#8377;{product.productPrice}
        </p>
        <button className="text-white bg-red-600 px-3 py-4 rounded-2xl flex mx-auto mt-4 hover:bg-red-700">
          remove <i className="fa fa-trash ml-2 mt-1" />
        </button>
      </div>
    </>
  );
};

export default CartCard;
