import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import styles from "./Products.module.css"; 
import { useSelector } from "react-redux";

function Products() {

  const products = useSelector((store) => store.products )
  return (
    <div className={styles.productsContainer}>

      <div className={styles.productHeader}>
        <h2>Products</h2>
        <Link to={"new-product"} className={styles.addProduct}>
          <FaPlus />
        </Link>
      </div>

      <div className={styles.productsTableContainer}>
        <table className={styles.productTable}>
          <thead>
            <tr>
              <th>Photo</th>
              <th>Name</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>
                  <img
                    className={styles.productImg}
                    src={product.image}
                    alt={product.name}
                  />
                </td>
                <td className={styles.productName}>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
                <td>
                  <Link                   
                    className={styles.productAction}
                  >
                    Manage
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

export default Products;
