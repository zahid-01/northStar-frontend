import React, { useState } from "react";
import axios from "axios";
import { URL } from "../../../Assets/environment/url";

const ProductUpload = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productCode, setProductCode] = useState("");
  const [images, setProductImages] = useState([]);
  const [productCategory, setProductCategory] = useState("monitors");
  const [productBrand, setProductBrand] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const handleProductUpload = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("productName", productName);
    form.append("productPrice", productPrice);
    form.append("productDescription", productDescription);
    form.append("productCode", productCode);
    form.append("productCategory", productCategory);
    form.append("productBrand", productBrand);
    for (let i = 0; i < images.length && i < 3; i++) {
      form.append("images", images[i]);
    }

    const res = await axios({
      method: "POST",
      url: `${URL}products/add`,
      data: form,
      headers: { "Content-Type": "multipart/form-data" },
    }).catch((e) => console.log(e));

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
    <div className="bg-gray-100 p-4 sm:p-6 md:p-8 lg:p-10">
      <h1 className="text-2xl text-center sm:text-3xl md:text-4xl lg:text-5xl mb-4">
        Product Upload
      </h1>
      <p className="text-red-500">{statusMessage}</p>
      <form className="text-gray-800" onSubmit={handleProductUpload}>
        <div className="mb-4">
          <label className="block mb-1">Product Name:</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="bg-white text-gray-800 border border-gray-300 rounded py-2 px-3 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Product Code:</label>
          <input
            type="text"
            value={productCode}
            onChange={(e) => setProductCode(e.target.value)}
            className="bg-white text-gray-800 border border-gray-300 rounded py-2 px-3 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Product Price:</label>
          <input
            type="text"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            className="bg-white text-gray-800 border border-gray-300 rounded py-2 px-3 w-full"
          />
        </div>
        <div className="flex flex-col sm:flex-row sm:space-x-4 mb-4">
          <div className="w-full sm:w-1/2">
            <label className="block mb-1">Product Category:</label>
            <select
              className="bg-white text-gray-800 border border-gray-300 rounded py-2 px-3 w-full"
              onChange={(e) => setProductCategory(e.target.value)}
              value={productCategory}
            >
              <option value="monitors">Monitors</option>
              <option value="printers">Printers</option>
              <option value="all-in-one">All-in-one</option>
              <option value="laptops">Laptops</option>
              <option value="accessories">Accessories</option>
            </select>
          </div>
          <div className="w-full sm:w-1/2">
            <label className="block mb-1">Product Brand:</label>
            <select
              className="bg-white text-gray-800 border border-gray-300 rounded py-2 px-3 w-full"
              onChange={(e) => setProductBrand(e.target.value)}
              value={productBrand}
            >
              <option value="HP">HP</option>
              <option value="Dell">Dell</option>
              <option value="Samsung">Samsung</option>
              <option value="lenovo">Lenovo</option>
              <option value="acer">Acer</option>
            </select>
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-1">Product Description:</label>
          <textarea
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            className="bg-white text-gray-800 border border-gray-300 rounded py-2 px-3 w-full"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block mb-1">Product Images:</label>
          <input
            type="file"
            accept="image/*"
            name="images"
            multiple
            onChange={(e) => setProductImages(e.target.files)}
            className="border border-gray-300 py-2 px-3 w-full"
          />
        </div>
        <div className="w-full">
          <button
            type="submit"
            className="bg-blue-500 text-white hover:bg-blue-400 rounded py-2 px-4 sm:px-6 md:px-8 lg:px-10"
          >
            Upload Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductUpload;
