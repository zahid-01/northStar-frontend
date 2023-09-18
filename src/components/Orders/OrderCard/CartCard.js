const CartCard = ({ product }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-xl font-semibold mb-2">{product.productName}</h3>
      <p className="text-gray-600">&#8377;{product.productPrice}</p>
    </div>
  );
};

export default CartCard;
