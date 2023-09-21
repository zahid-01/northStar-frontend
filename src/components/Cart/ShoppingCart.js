import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartCard from "./CartCard";

function ShoppingCart() {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <>
      <div className="min-h-screen container bg-zinc-200 p-6 mx-auto m-8 rounded-xl">
        <h2 className="text-center text-3xl font-semibold mb-8">
          Shopping Cart
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-4">
            {cartItems.length === 0 ? (
              <div className="text-center text-xl font-semibold mb-4 flex flex-col gap-8">
                Your cart is empty 😥
                <br /> Start shopping now!
                <NavLink to="/" className="text-blue-500">
                  Go to Home ➡
                </NavLink>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                  {cartItems.map((el) => (
                    <CartCard product={el} key={el._id} />
                  ))}
                </div>
                <button className="bg-blue-500 text-white px-4 justify-center mx-auto py-6 mb-4 rounded-xl flex tracking-[1px] font-bold shadow-md shadow-green-500 mt-[24%] hover:bg-blue-700">
                  Checkout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ShoppingCart;
