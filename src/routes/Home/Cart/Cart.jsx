import React from "react";
import styles from "./Cart.module.css";
import { CartItem, CartSummary, NavBar } from "../../../index";
import { useSelector } from "react-redux";

function Cart() {
  const cartItems = useSelector((store) => store.cart);

  return (
    <main>
      <NavBar />
      <div className={styles.cartPage}>
        <div className={styles.cartItemsContainer}>
          {cartItems.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
        </div>
        <CartSummary cartItems={cartItems} />
      </div>
    </main>
  );
}

export default Cart;
