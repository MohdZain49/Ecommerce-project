import React from "react";
import styles from "./CartItem.module.css";
import { TiDelete } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/Main/cartSlice";

function CartItem({ item, status }) {
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(cartActions.removeFromCart(id));
  };

  const handleRemoveSavedOrders = (id) => {
    dispatch(cartActions.removeSavedOrder(id));
  };

  const handleSaveForLater = (item) => {
    dispatch(cartActions.saveOrder(item));
    handleRemoveFromCart(item.id);
  };


  const handleAddToCart = (item) => {
    dispatch(cartActions.addToCart(item));
    handleRemoveSavedOrders(item.id);
   }

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
      <div className={styles.buttonsSection}>
        {status === "current-orders" && (
          <div>
            <button
              className={styles.cartButton}
              onClick={() => handleSaveForLater(item)}
            >
              Save for later
            </button>
            <button
              className={styles.cartButton}
              onClick={() => handleRemoveFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        )}

        {status === "saved-orders" && (
          <div>
            <button
              className={styles.cartButton}
              onClick={() => handleAddToCart(item)}
            >
              Move to cart
            </button>
            <button
              className={styles.cartButton}
              onClick={() => handleRemoveSavedOrders(item.id)}
            >
              Remove
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartItem;
