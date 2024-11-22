import { NavBar, ProductSection } from "../../../index";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.homeContainer}>
      <NavBar />
      <ProductSection />
    </div>
  );
}

export default Home;
