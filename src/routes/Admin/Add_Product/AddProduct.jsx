import React, { useRef, useState } from "react";
import styles from "./AddProduct.module.css";
import { useDispatch } from "react-redux";
import { productsSliceActions } from "../../../store/Admin/productsSlice";

function AddProduct() {
  const dispatch = useDispatch();

  const productName = useRef();
  const productPrice = useRef();
  const productDescription = useRef();
  const productStock = useRef();

  const [productImage, setProductImage] = useState("");

  const handleAddProduct = (event) => {
    event.preventDefault();

    const newProduct = {
      id: "",
      image: productImage,
      name: productName.current.value,
      description: productDescription.current.value,
      price: productPrice.current.value,
      stock: productStock.current.value,
    };

    dispatch(productsSliceActions.addProduct(newProduct));

    // Clear the inputs
    setProductImage("");
    productName.current.value = "";
    productDescription.current.value = "";
    productPrice.current.value = "";
    productStock.current.value = "";
  };

  const handleAddImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProductImage(imageUrl); // Update state
    }
  };

  return (
    <div className={styles.addProductContainer}>
      <h3 className={styles.title}>New Product</h3>
      <form className={styles.addProductForm} onSubmit={handleAddProduct}>
        <div className={styles.formField}>
          <label htmlFor="product-name">Name</label>
          <input
            type="text"
            name="name"
            id="product-name"
            ref={productName}
            placeholder="Name"
            required
          />
        </div>
        <div className={styles.formField}>
          <label htmlFor="product-description">Description</label>
          <input
            id="product-description"
            ref={productDescription}
            placeholder="Description"
            required
          />
        </div>
        <div className={styles.formField}>
          <label htmlFor="product-price">Price</label>
          <input
            type="number"
            name="price"
            id="product-price"
            ref={productPrice}
            placeholder="Price"
            required
          />
        </div>
        <div className={styles.formField}>
          <label htmlFor="product-stock">Stock</label>
          <input
            type="number"
            name="stock"
            id="product-stock"
            ref={productStock}
            placeholder="Stock"
            required
          />
        </div>
        <div className={styles.formField}>
          <label htmlFor="product-photo">Photo</label>
          <input
            type="file"
            name="photo"
            id="product-photo"
            onChange={handleAddImage}
            accept="image/*"
            required
          />
        </div>
        {productImage && (
          <div className={styles.selectedImg}>
            <img src={productImage} alt="Selected" />
          </div>
        )}
        <button className={styles.createButton} type="submit">
          Create
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
