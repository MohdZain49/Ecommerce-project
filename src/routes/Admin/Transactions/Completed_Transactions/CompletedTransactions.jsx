import React from "react";
import styles from "./CompletedTransactions.module.css";
import data from "../../../../assets/data";

function CompletedTransactions() {
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
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.user}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.discount}</td>
              <td>{transaction.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CompletedTransactions;
