import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { MdSpaceDashboard } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { AiFillProduct, AiOutlineTransaction } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

import styles from "./SideBar.module.css";

function SideBar() {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };
  const [selectedTab, setSelectedTab] = useState("Dashboard");

  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.logo} onClick={() => setSelectedTab("Dashboard")}>
        <Link to={"dashboard"}>
          <h1>Admin</h1>
        </Link>
      </div>

      <div className={styles.sidebarSection}>
        <h4>Dashboard</h4>
        <nav>
          <ul className={styles.dashboardOptionsList}>
            <li
              className={`${styles.dashboardOption} ${
                selectedTab === "Dashboard" && styles.active
              }`}
              onClick={() => setSelectedTab("Dashboard")}
            >
              <Link to={"dashboard"}>
                <MdSpaceDashboard />
                Dashboard
              </Link>
            </li>
            <li
              className={`${styles.dashboardOption} ${
                selectedTab === "Products" && styles.active
              }`}
              onClick={() => setSelectedTab("Products")}
            >
              <Link to={"products"}>
                <AiFillProduct />
                Products
              </Link>
            </li>
            <li
              className={`${styles.dashboardOption} ${
                selectedTab === "Transactions" && styles.active
              }`}
              onClick={() => setSelectedTab("Transactions")}
            >
              <Link to={"transactions"}>
                <AiOutlineTransaction />
                Transactions
              </Link>
            </li>
            <li
              className={`${styles.dashboardOption} ${
                selectedTab === "Customers" && styles.active
              }`}
              onClick={() => setSelectedTab("Customers")}
            >
              <Link to={"customers"}>
                <FaUserFriends />
                Customers
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <button className={styles.closeBtn} onClick={goToHome}>
        Close
        <IoMdClose />
      </button>
    </div>
  );
}

export default SideBar;
