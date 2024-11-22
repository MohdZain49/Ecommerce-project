import React from "react";
import styles from "./TopTransactions.module.css"; 

function TopTransactions({ topTransactions }) {
  return (
    <div className={styles.topTransactionsContainer}>
      <h3 className={styles.title}>Top Transactions</h3>
      <table className={styles.topTransactionsTable}>
        <thead>
          <tr>
            <th className={styles.tableHeader}>ID</th>
            <th className={styles.tableHeader}>Amount</th>
            <th className={styles.tableHeader}>Discount</th>
            <th className={styles.tableHeader}>Net Amount</th>
            <th className={styles.tableHeader}>Status</th>
          </tr>
        </thead>
        <tbody>
          {topTransactions.map((transaction) => (
            <tr key={transaction.id} className={styles.transactionRow}>
              <td className={styles.tableData}>{transaction.id}</td>
              <td className={styles.tableData}>{transaction.amount}</td>
              <td className={styles.tableData}>{transaction.discount}</td>
              <td className={styles.tableData}>
                {transaction.amount - transaction.discount}
              </td>
              <td
                className={`${styles.status} ${
                  styles[transaction.status.toLowerCase()]
                }`}
              >
                {transaction.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TopTransactions;