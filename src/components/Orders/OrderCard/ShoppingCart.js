import { useSelector } from "react-redux";

import CartCard from "./CartCard";

function ShoppingCart() {
  const { cartItems } = useSelector((state) => state.cart);

  console.log(cartItems);

  return (
    <div className="container bg-zinc-200 p-6 mx-auto m-8 rounded-xl">
      <h2 className="text-center text-3xl font-semibold mb-4">Shopping Cart</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cartItems.map((el) => (
              <CartCard product={el} key={el._id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
