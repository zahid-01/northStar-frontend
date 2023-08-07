import { useState } from "react";
import classes from "./Fliter.module.css";
const Filter = (props) => {
  const [dropdownValue, setDropdownValue] = useState();

  const filter = () => {
    props.filter(dropdownValue);
  };

  const dropdownChange = (e) => {
    setDropdownValue(e.target.value);
  };

  return (
    <div className={classes.filterCont}>
      <h2>Browse Our Collection</h2>
      <div className={classes.filterBox}>
        <p>Filter</p>
        <select className={classes.dropdown} onChange={dropdownChange}>
          <option value="monitors">Monitors</option>
          <option value="printers">Printers</option>
          <option value="all-in-one">All-in-one</option>
          <option value="laptops">Laptops</option>
          <option value="accessories">Accessories</option>
        </select>
        <button className={classes.btn} onClick={filter}>
          Apply
        </button>
      </div>
    </div>
  );
};
export default Filter;
