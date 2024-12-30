import React from "react";
import styles from "./CompletedTransactions.module.css";
import { useSelector } from "react-redux";

function CompletedTransactions() {
  const transactions = useSelector((state) => state.transactions);
  const { completedTransactions } = transactions;

  return (
    <div className={styles.transactionsTableContainer}>
      <table className={styles.transactionsTable}>
        <thead>
          <tr>
            <th>User</th>
            <th>Transaction-ID</th>
            <th>Amount</th>
            <th>Discount</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {completedTransactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.user}</td>
              <td>{transaction.id}</td>
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
