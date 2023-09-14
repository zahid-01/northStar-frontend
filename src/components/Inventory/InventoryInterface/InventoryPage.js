import { NavLink } from "react-router-dom";

const InventoryPage = () => {
  return (
    <div className="h-[60vh] bg-gray-100 p-4 shadow-lg sm:p-6 md:p-8 lg:p-10">
      <h1 className="text-2xl text-center sm:text-3xl md:text-4xl lg:text-5xl mb-4">
        UPDATE Inventory
      </h1>
      <ul className="space-y-2 sm:space-y-4">
        <li>
          <NavLink
            to="/addProduct"
            className="block bg-blue-500 text-white hover:bg-blue-400 py-2 px-4 sm:px-6 md:px-8 lg:px-10 rounded"
          >
            Add Product
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/deleteProduct"
            className="block bg-red-500 text-white hover:bg-red-400 py-2 px-4 sm:px-6 md:px-8 lg:px-10 rounded"
          >
            Delete Product
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/editProduct"
            className="block bg-green-500 text-white hover:bg-green-400 py-2 px-4 sm:px-6 md:px-8 lg:px-10 rounded"
          >
            Edit a product
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default InventoryPage;
