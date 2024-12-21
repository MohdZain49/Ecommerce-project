import React from "react";
import styles from "./Cart.module.css";
import { CartItem, CartSummary, NavBar } from "../../../index";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Cart() {
  const cartItems = useSelector((store) => store.cart);
  const { currentOrders, savedOrders } = cartItems

  return (
    <main>
      <NavBar />
      <div className={styles.cartPage}>
        <div className={styles.leftContainer}>
          {currentOrders.length === 0 && <EmptyMessage />}
          <div>
            {currentOrders.length > 0 && <CartItems items={currentOrders} />}
            <SavedItems items={savedOrders} />
          </div>
        </div>
        <CartSummary cartItems={currentOrders} />
      </div>
    </main>
  );
}

function EmptyMessage() {
  return (
    <div className={styles.emptyMessageContainer}>
      <p className={styles.emptyMessage}>Your Deal Vault Cart is empty!</p>
      <p className={styles.emptyMessageDetails}>
        Your shopping cart is waiting. Give it purpose – fill it with products.
        Continue shopping on the{" "}
        <Link to={"/home"} className={styles.homeLink}>
          Deal Vault homepage.
        </Link>
      </p>
    </div>
  );
}

function CartItems({ items }) {
  return (
    <div className={styles.cartItemsContainer}>
      <h2>Your Products</h2>
      {items.map((item) => (
        <CartItem item={item} key={item.id} status={'current-orders'} />
      ))}
    </div>
  );
}

function SavedItems({ items }) {
  return (
    <div className={styles.savedItemsContainer}>
      <h2>Your Saved Items</h2>
      {items.length === 0 ? (
        <p>You have no saved items.</p>
      ) : (
        items.map((item) => (
          <CartItem item={item} key={item.id} status={"saved-orders"} />
        ))
      )}
    </div>
  );
}

export default Cart;
