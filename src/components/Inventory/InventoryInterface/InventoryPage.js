import { NavLink } from "react-router-dom";

import classes from "./Inventory.module.css";

const InventoryPage = () => {
  return (
    <div className={classes.main}>
      <ul className={classes.list}>
        <li>
          <NavLink to="/addProduct">Add Product</NavLink>
        </li>
        <li>
          <NavLink to="deleteProduct">Delete Product</NavLink>
        </li>
        <li>
          <NavLink to="editProduct">Edit a product</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default InventoryPage;
