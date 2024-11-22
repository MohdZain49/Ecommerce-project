import { Outlet } from "react-router-dom";
import { Sidebar } from "../../..";
import styles from "./Admin.module.css";

function Admin() {
  return (
    <div className={styles.adminContainer}>
      <Sidebar />
      <main className={styles.mainContent}>
        <Outlet />
      </main>
    </div>
  );
}

export default Admin;
