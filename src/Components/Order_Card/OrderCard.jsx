import styles from './OrderCard.module.css';

function OrderCard({ order }) {
  return (
    <div className={styles.orderCard}>
      <div className={styles.orderCardHeader}>
        <div className={styles.headerEntity}>
          <h4>order placed</h4>
          <p>{order.delivery_date}</p>
        </div>
        <div className={styles.headerEntity}>
          <h4>total</h4>
          <p>{order.current_price}</p>
        </div>
        <div className={styles.headerEntity}>
          <h4>ship to</h4>
          <p>{order.delivery_date}</p>
        </div>
        <div className={styles.headerEntity}>
          <h4>order id</h4>
          <p>trxn-902-367-{order.id}</p>
        </div>
      </div>
      <div className={styles.orderCardDetails}>
        <img
          src={order.image}
          alt="order_image"
          className={styles.orderImage}
        />
        <div className={styles.orderDetails}>
          <h3>{order.item_name}</h3>
          <p>{order.Description}</p>
          <p className={styles.returnPeriod}>
            return period: {order.return_period}
          </p>
        </div>
        <div className={styles.orderCardActions}>
          <button>Request cancellation </button>
          <button>Track package</button>
          <button>Return or replace order</button>
        </div>
      </div>
    </div>
  );
}


export default OrderCard;