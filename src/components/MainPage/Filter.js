// import { useState } from "react";
// // import classes from "./Fliter.module.css";
// const Filter = (props) => {
//   const [dropdownValue, setDropdownValue] = useState();

//   const filter = () => {
//     props.filter(dropdownValue);
//   };

//   const dropdownChange = (e) => {
//     setDropdownValue(e.target.value);
//   };

//   return (
//     <div className={classes.filterCont}>
//       <h2>Browse Our Collection</h2>
//       <div className={classes.filterBox}>
//         <p>Filter</p>
//         <select className={classes.dropdown} onChange={dropdownChange}>
//           <option value="monitors">Monitors</option>
//           <option value="printers">Printers</option>
//           <option value="all-in-one">All-in-one</option>
//           <option value="laptops">Laptops</option>
//           <option value="accessories">Accessories</option>
//         </select>
//         <button className={classes.btn} onClick={filter}>
//           Apply
//         </button>
//       </div>
//     </div>
//   );
// };
// export default Filter;

import { useState } from "react";

const Filter = (props) => {
  const [dropdownValue, setDropdownValue] = useState();

  const filter = () => {
    props.filter(dropdownValue);
  };

  const dropdownChange = (e) => {
    setDropdownValue(e.target.value);
  };

  return (
    <div className="flex justify-between bg-blue-500 p-2 md:p-4 lg:p-6 shadow-md shadow-green-300">
      <h2 className="text-white text-2xl md:text-4xl lg:text-5xl ">
        Browse Our Collection
      </h2>
      <div className="flex flex-col sm:flex-row justify-end items-center">
        <p className="text-black text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2 sm:mb-0 underline decoration-red-500 tracking-[1px] underline-offset-8">
          Filter
        </p>
        <div className="flex flex-row items-center gap-4">
          <select
            className="bg-white text-blue-500 border border-blue-500 rounded px-2 py-1 sm:mx-2 lg:px-4 lg:py-3"
            onChange={dropdownChange}
          >
            <option value="monitors">Monitors</option>
            <option value="printers">Printers</option>
            <option value="all-in-one">All-in-one</option>
            <option value="laptops">Laptops</option>
            <option value="accessories">Accessories</option>
          </select>
          <button
            className="bg-white text-blue-500 hover:bg-blue-400 hover:text-white rounded px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-8 lg:py-4"
            onClick={filter}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
