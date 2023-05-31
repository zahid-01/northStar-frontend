import React from "react";
import classes from "./Fliter.module.css";
const Filter = () => {
  return (
    <div className={classes.filterCont}>
      <h2>Browse Our Collection</h2>
      <div className={classes.filterBox}>
        <p>Filter</p>
        <select className={classes.dropdown}>
          <option value="monitors">Monitors</option>
          <option value="printers">Printers</option>
          <option value="all-in-one">All-in-one</option>
          <option value="laptops">Laptops</option>
          <option value="accessories">Accessories</option>
        </select>
        <button className={classes.btn}>Apply</button>
      </div>
    </div>
  );
};
export default Filter;
