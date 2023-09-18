import { useSelector } from "react-redux";
import React from "react";

function ShoppingCart() {
  const { cartItems } = useSelector((state) => state.cart);
  console.log("This is cart ", cartItems);
  const products = cartItems[0];

  const checkoutHandler = () => {
    console.log("hola");
  };

  return (
    <div className="container bg-zinc-200 p-6 mx-auto m-8 rounded-xl">
      <h2 className="text-center text-3xl font-semibold mb-4">Shopping Cart</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <div key={product.id} className="bg-white p-4 rounded shadow">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600">
                  &#8377;{product.price.toFixed(2)}
                </p>
                <button
                  onClick={checkoutHandler}
                  className="mt-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full"
                >
                  Checkout
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
