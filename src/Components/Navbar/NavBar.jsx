import { Link } from "react-router-dom";

import logo from "../../assets/app_logo.jpg";
import styles from "./Navbar.module.css";
import { AiOutlineUser } from "react-icons/ai";
import { RiAdminLine } from "react-icons/ri";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import { useSelector } from "react-redux";

function NavBar() {
  const cartItems = useSelector((store) => store.cart);

  return (
    <nav className={styles.navbarContainer}>
      <div className="logo-container">
        <Link to="/home">
          <img src={logo} className={styles.appLogo} alt="app_logo" />
        </Link>
      </div>
      <div className={styles.navbar}>
        <a href="">BEST SELLER</a>
        <a href="">NEW RELEASES</a>
        <a href="">HOME & LIVING</a>
        <a href="">STUDIO</a>
      </div>
      <div className={styles.searchBar}>
        <div>
          <IoSearch />
        </div>
        <input
          type="search"
          className={styles.searchInput}
          placeholder="Search for products, brands and more"
        />
      </div>

      <div className={styles.actionsBar}>
        <div className={styles.actionContainer}>
          <Link to={"/login"}>
            <AiOutlineUser className={styles.icon} />
            <span className={styles.actionName}>profile</span>
          </Link>
        </div>
        <div className={styles.actionContainer}>
          <Link to={"/admin"}>
            <RiAdminLine className={styles.icon} />
            <span className={styles.actionName}>admin</span>
          </Link>
        </div>
        <div className={`${styles.actionContainer} ${styles.cart}`}>
          {cartItems?.length > 0 && (
            <span className={styles.notification}>{cartItems.length}</span>
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
