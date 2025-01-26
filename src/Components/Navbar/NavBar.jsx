import { Link } from "react-router-dom";
import logo from "../../assets/app_logo.png";
import styles from "./Navbar.module.css";
import { AiOutlineUser } from "react-icons/ai";
import { RiAdminLine } from "react-icons/ri";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useState } from "react";

function NavBar() {
  const cart = useSelector((store) => store.cart);
  const [profileBtnClick, setProfileBtnClick] = useState(false);

  return (
    <nav className={styles.navbarContainer}>
      <div className={styles.logoContainer}>
        <Link to="/home">
          <img src={logo} className={styles.appLogo} alt="app_logo" />
        </Link>
      </div>

      <div className={styles.navbar}>
        <Link to='/trending'>TRENDING</Link>
        <Link to={'/new_releases'}>NEW RELEASES</Link>
        <Link to={'/home&living'}>HOME & LIVING</Link>
        <Link to={'/top_deals'}>TOP DEALS</Link>
      </div>

      <div className={styles.searchBar}>
        <div className={styles.searchIcon}>
          <IoSearch />
        </div>
        <input
          type="search"
          className={styles.searchInput}
          placeholder="Search for products, brands and more"
        />
      </div>

      <div className={styles.actionsBar}>
        <div className={`${styles.actionContainer} ${styles.profile}`}>
          <div
            className={styles.dropbtn}
            onClick={() => setProfileBtnClick(!profileBtnClick)}
          >
            <AiOutlineUser className={styles.icon} />
            <span className={styles.actionName}>profile</span>
          </div>
          {profileBtnClick && (
            <div className={styles.dropdownContent}>
              <Link
                to={"/login"}
                onClick={() => setProfileBtnClick(!profileBtnClick)}
              >
                Login
              </Link>
              <Link
                to={"/signUp"}
                onClick={() => setProfileBtnClick(!profileBtnClick)}
              >
                SignUp
              </Link>
              <Link
                to={"/orders"}
                onClick={() => setProfileBtnClick(!profileBtnClick)}
              >
                Orders
              </Link>
            </div>
          )}
        </div>

        <div className={styles.actionContainer}>
          <Link to={"/admin"}>
            <RiAdminLine className={styles.icon} />
            <span className={styles.actionName}>admin</span>
          </Link>
        </div>
        <div className={`${styles.actionContainer} ${styles.cart}`}>
          {cart.currentOrders.length > 0 && (
            <span className={styles.notification}>
              {cart.currentOrders.length}
            </span>
          )}
          <Link to={"/cart"}>
            <PiShoppingCartSimpleBold />
            <span className={styles.actionName}>cart</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
