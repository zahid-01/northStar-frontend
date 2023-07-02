import React, { useState } from "react";
import classes from "./ProductUpload.module.css";
import axios from "axios";

import { URL } from "../../../Assets/environment/url";

const ProductUpload = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productCode, setProductCode] = useState("");
  const [images, setProductImages] = useState([]);
  const [statusMessage, setStatusMessage] = useState("");

  const handleProductUpload = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("productName", productName);
    form.append("productPrice", productPrice);
    form.append("productDescription", productDescription);
    form.append("productCode", productCode);
    for (let i = 0; i < images.length && i < 3; i++) {
      form.append("images", images[i]);
    }

    const res = await axios({
      method: "POST",
      url: `${URL}products/add`,
      data: form,
      headers: { "Content-Type": "multipart/form-data" },
    }).catch((e) => console.log(e));
    console.log(res);

    if (res.statusText === "OK") {
      setStatusMessage("Added product successfully");
      setTimeout(() => {
        setStatusMessage("");
      }, 3000);
    } else {
      setStatusMessage("Something went wrong");
      setTimeout(() => {
        setStatusMessage("");
      }, 3000);
    }
    setProductName("");
    setProductPrice("");
    setProductDescription("");
    setProductImages([]);
  };

  return (
    <div className={classes.productUpload}>
      <h1 className={classes.title}>Product Upload</h1>
      <p>{statusMessage}</p>
      <form className={classes.form} onSubmit={handleProductUpload}>
        <div className={classes.formGroup}>
          <label className={classes.label}>Product Name:</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className={classes.input}
          />
        </div>
        <div className={classes.formGroup}>
          <label className={classes.label}>Product Code:</label>
          <input
            type="text"
            value={productCode}
            onChange={(e) => setProductCode(e.target.value)}
            className={classes.input}
          />
        </div>
        <div className={classes.formGroup}>
          <label className={classes.label}>Product Price:</label>
          <input
            type="text"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            className={classes.input}
          />
        </div>
        <div className={classes.formGroup}>
          <label className={classes.label}>
            Product Category:
            <select className={classes.dropdown}>
              <option value="monitors">Monitors</option>
              <option value="printers">Printers</option>
              <option value="all-in-one">All-in-one</option>
              <option value="laptops">Laptops</option>
              <option value="accessories">Accessories</option>
            </select>
          </label>
        </div>
        <div className={classes.formGroup}>
          <label className={classes.label}>
            Product Brand:
            <select className={classes.dropdown}>
              <option value="HP">HP</option>
              <option value="Dell">Dell</option>
              <option value="Samsung">Samsung</option>
              <option value="lenovo">Lenovo</option>
              <option value="acer">Acer</option>
            </select>
          </label>
        </div>
        <div className={classes.formGroup}>
          <label className={classes.label}>Product Description:</label>
          <textarea
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            className={classes.textarea}
          ></textarea>
        </div>

        <div className={classes.formGroup}>
          <label className={classes.label}>Product Images:</label>
          <input
            type="file"
            accept="image/*"
            name="images"
            multiple
            onChange={(e) => setProductImages(e.target.files)}
            className={classes.input}
          />
        </div>
        <div className={classes.formGroup}>
          <button type="submit" className={classes.button}>
            Upload Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductUpload;
