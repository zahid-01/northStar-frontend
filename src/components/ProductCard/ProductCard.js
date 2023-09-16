import { NavLink } from "react-router-dom";
import MotionComponent from "../Header/Animation";

const ProductCard = ({ products, filterValue }) => {
  return (
    <>
      {products.map((el) => {
        if (filterValue && el.productCategory !== filterValue) {
          return null;
        }

        return (
          <NavLink
            className="flex p-4"
            key={el.productCode}
            to={`product/${el._id}`}
          >
            <MotionComponent>
              <div className="h-full bg-white rounded-lg shadow-lg shadow-green-200 hover:translate-y-[-8px] hover:duration-500">
                <img
                  className="w-96 h-96 md:h-64 object-scale-down rounded-t-md shadow-md shadow-zinc-300"
                  src={el.images[0]}
                  alt="product img"
                />
                <div className="p-4">
                  <p className="text-center text-lg font-semibold">
                    {el.productName}
                  </p>
                  <p className="text-center text-xl font-semibold mt-2">
                    &#8377;{el.productPrice}
                  </p>
                  <p className="text-sm text-center md:text-base mt-2">
                    {el.productDescription}
                  </p>
                </div>
              </div>
            </MotionComponent>
          </NavLink>
        );
      })}
    </>
  );
};

export default ProductCard;
