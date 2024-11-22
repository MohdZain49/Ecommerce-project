import React, { useState } from "react";
import styles from "./ManageProduct.module.css";

function ManageProduct() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  return (
    <div className={styles.manageProductContainer}>
      <div className={styles.productDetails}>
        <p className={styles.availableQty}>10 available</p>
        <p className={styles.productId}>ID - dsfsdf</p>
        {selectedImage ? (
          <img
            className={styles.productImage}
            src={selectedImage}
            alt="product-img"
          />
        ) : (
          <div className={styles.placeholderImage}>No Image</div>
        )}
        <p className={styles.productName}>dsfsa</p>
        <p className={styles.productPrice}>₹809</p>
      </div>
      <div className={styles.manageContainer}>
        <h3 className={styles.title}>Manage</h3>
        <form className={styles.manageForm}>
          <div className={styles.formField}>
            <label htmlFor="product-name">Name</label>
            <input
              type="text"
              name="name"
              id="product-name"
              placeholder="Name"
            />
          </div>
          <div className={styles.formField}>
            <label htmlFor="product-price">Price</label>
            <input
              type="number"
              name="price"
              id="product-price"
              placeholder="Price"
            />
          </div>
          <div className={styles.formField}>
            <label htmlFor="product-stock">Stock</label>
            <input
              type="number"
              name="stock"
              id="product-stock"
              placeholder="Stock"
            />
          </div>
          <div className={styles.formField}>
            <label htmlFor="product-photo">Photo</label>
            <input
              type="file"
              name="photo"
              id="product-photo"
              onChange={handleImageChange}
            />
          </div>
          <div className={styles.selectedImage}>
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Selected"
                className={styles.imagePreview}
              />
            )}
          </div>
          <button className={styles.updateButton} type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default ManageProduct;
