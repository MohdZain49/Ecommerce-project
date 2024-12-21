import React from "react";
import styles from "./Orders.module.css";
import { NavBar, OrderCard } from "../../../index";
import { IoSearch } from "react-icons/io5";
import { useSelector } from "react-redux";

function Orders() {
  const orders = useSelector((store) => store.orders);
  return (
    <div className={styles.ordersPage}>
      <NavBar />
      <div className={styles.ordersContainer}>
        <h1>Your Orders</h1>
        <div className={styles.searchBarContainer}>
          <div className={styles.searchBar}>
            <div>
              <IoSearch />
            </div>
            <input
              type="search"
              className={styles.searchInput}
              placeholder="Search all orders"
            />
          </div>
          <button className={styles.searchButton}>Search Orders</button>
        </div>
      </div>
      <div className={styles.ordersList}>
        {orders.length === 0 ? (
          <div className={styles.noOrdersFound}>
            <h1>No Orders Found!!</h1>
          </div>
        ) : (
          orders.map((order) => <OrderCard order={order} key={order.id} />)
        )}
      </div>
    </div>
  );
}

export default Orders;
