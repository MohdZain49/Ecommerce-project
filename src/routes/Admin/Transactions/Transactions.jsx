import data from "../../../assets/data";
import { Link } from "react-router-dom";
import styles from "./Transactions.module.css"; // Import modular CSS

function Transactions() {
  const { transactions } = data;
  return (
    <div className={styles.transactionsContainer}>
      <h2>Transaction</h2>
      <div className={styles.transactionsTableContainer}>
        <table className={styles.transactionsTable}>
          <thead>
            <tr>
              <th>User</th>
              <th>Amount</th>
              <th>Discount</th>
              <th>Quantity</th>
              <th>Status</th>
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
                <td>{transaction.status}</td>
                <td>
                  <Link
                    to={`/manage/${transaction.id}`}
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
    </div>
  );
}

export default Transactions;
