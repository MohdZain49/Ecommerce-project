import { Link, Outlet } from "react-router-dom";
import styles from "./Transactions.module.css"; // Import modular CSS

function Transactions() {
  return (
    <div className={styles.transactionsContainer}>
      <h2>Transaction</h2>
      <div className={styles.tabsSection}>
        <Link to={"completed-transactions"} className={styles.tabButton}>
          Completed
        </Link>
        <Link to={"in-progress-transactions"} className={styles.tabButton}>
          In progress
        </Link>
        <Link to={"pending-transactions"} className={styles.tabButton}>
          Pending
        </Link>
        <Link to={"cancelled-transactions"} className={styles.tabButton}>
          Cancelled
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

export default Transactions;
