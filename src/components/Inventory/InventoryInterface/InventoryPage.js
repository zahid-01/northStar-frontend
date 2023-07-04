import { NavLink } from "react-router-dom";

import classes from "./Inventory.module.css";

const InventoryPage = () => {
  return (
    <div className={classes.main}>
      <h1>UPDATE Inventory</h1>
      <ul className={classes.list}>
        <li>
          <NavLink to="/addProduct" className={classes.inventoryBtn}>
            Add Product
          </NavLink>
        </li>
        <li>
          <NavLink to="deleteProduct" className={classes.inventoryBtn}>
            Delete Product
          </NavLink>
        </li>
        <li>
          <NavLink to="editProduct" className={classes.inventoryBtn}>
            Edit a product
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default InventoryPage;
