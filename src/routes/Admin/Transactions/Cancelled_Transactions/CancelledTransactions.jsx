import React from "react";
import styles from "./CancelledTransactions.module.css";
import data from "../../../../assets/data";
import { Link } from "react-router-dom";

function CancelledTransactions() {
  const { transactions } = data;
  return (
    <div className={styles.transactionsTableContainer}>
      <table className={styles.transactionsTable}>
        <thead>
          <tr>
            <th>User</th>
            <th>Amount</th>
            <th>Discount</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.user}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.discount}</td>
              <td>{transaction.quantity}</td>
              <td>
                <Link
                  to={`manage/${transaction.id}`}
                  className={styles.manageUser}
                >
                  manage
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CancelledTransactions;
