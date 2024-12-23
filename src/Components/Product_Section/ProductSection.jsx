import React from "react";
import styles from "./ProductSection.module.css";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/Main/cartSlice";

function ProductSection() {
  const homeItems = useSelector((store) => store.home);
  
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(cartActions.addToCart(product));
  };

  return (
    <div className={styles.productSection}>
      {homeItems.map((product) => (
        <div className={styles.card} key={product.id}>
          <img
            src={product.image}
            alt={product.item_name}
            className={styles.image}
          />
          <div className={styles.details}>
            <h3 className={styles.title}>{product.item_name}</h3>
            <p className={styles.description}>{product.Description}</p>
            <div className={styles.footer}>
              <span className={styles.price}>${product.current_price}</span>
              <button
                className={styles.button}
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductSection;
