import React from "react";
import styles from "./CartSummary.module.css";

function CartSummary({ cartItems }) {
  let totalItem = cartItems.length;
  let totalMRP = 0;
  let totalDiscount = 0;
  const CONVENIENCE_FEES = 99;

  cartItems.forEach((cartItem) => {
    totalMRP += cartItem.original_price;
    totalDiscount += cartItem.original_price - cartItem.current_price;
  });

  let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;

  return (
    <div className={styles.cartSummary}>
      <div className={styles.cartDetailsContainer}>
        <div className={styles.priceHeader}>
          PRICE DETAILS ({totalItem} Items)
        </div>
        <div className={styles.priceItem}>
          <span className={styles.priceItemTag}>Total MRP</span>
          <span className={styles.priceItemValue}>₹{totalMRP}</span>
        </div>
        <div className={styles.priceItem}>
          <span className={styles.priceItemTag}>Discount on MRP</span>
          <span
            className={`${styles.priceItemValue} ${styles.priceDetailBaseDiscount}`}
          >
            -₹{totalDiscount}
          </span>
        </div>
        <div className={styles.priceItem}>
          <span className={styles.priceItemTag}>Convenience Fee</span>
          <span className={styles.priceItemValue}>₹{CONVENIENCE_FEES}</span>
        </div>
        <hr />
        <div className={styles.priceFooter}>
          <span className={styles.priceItemTag}>Total Amount</span>
          <span className={styles.priceItemValue}>₹{finalPayment}</span>
        </div>
      </div>
      <button className={styles.btnPlaceOrder}>
        <div className={styles.placeOrderText}>PLACE ORDER</div>
      </button>
    </div>
  );
}

export default CartSummary;
