
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";
import styles from "./WidgetCard.module.css"; // Import the modular CSS file

function WidgetCard({ heading, value, percentage, color }) {
  return (
    <div className={styles.widgetCard}>
      <div className={styles.leftSection}>
        <h6 className={styles.heading}>{heading}</h6>
        <p className={styles.value}>{value}</p>
        <div className={percentage > 0 ? styles.profit : styles.loss}>
          <span className={styles.graphIcon}>
            {percentage > 0 ? <FaArrowTrendUp /> : <FaArrowTrendDown />}
          </span>
          <span>{percentage}%</span>
        </div>
      </div>
      <div
        className={styles.rightSection}
        style={{
          background: `conic-gradient(${color} ${Math.abs(
            (percentage / 100) * 360
          )}deg, white 0deg)`,
        }}
      >
        <div className={styles.innerCircle} style={{ color: color }}>
          {percentage}%
        </div>
      </div>
    </div>
  );
}

export default WidgetCard;
