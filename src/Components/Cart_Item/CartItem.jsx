import React from "react";
import styles from "./CartItem.module.css";
import { TiDelete } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(cartActions.removeToCart(id));
  };

  return (
    <div className={styles.cartItemContainer}>
      <div className={styles.itemLeftPart}>
        <img className={styles.cartItemImg} src={item.image} alt="Product" />
      </div>
      <div className={styles.itemRightPart}>
        <div className={styles.company}>{item.company}</div>
        <div className={styles.itemName}>{item.item_name}</div>
        <div className={styles.priceContainer}>
          <span className={styles.currentPrice}>Rs {item.current_price}</span>
          <span className={styles.originalPrice}>Rs {item.original_price}</span>
          <span className={styles.discountPercentage}>
            ({item.discount_percentage}% OFF)
          </span>
        </div>
        <div className={styles.returnPeriod}>
          <span className={styles.returnPeriodDays}>
            {item.return_period} days
          </span>{" "}
          return available
        </div>
        <div className={styles.deliveryDetails}>
          Delivery by{" "}
          <span className={styles.deliveryDetailsDays}>
            {item.delivery_date}
          </span>
        </div>
      </div>
      <div
        className={styles.removeFromCart}
        onClick={() => handleRemoveItem(item.id)}
        role="button"
      >
        <TiDelete />
      </div>
    </div>
  );
}

export default CartItem;
