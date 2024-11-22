import React from "react";
import styles from "./ProgressBar.module.css";

function ProgressBar({ Bar }) {
  const { label, percentage, color } = Bar;

  return (
    <div className={styles.progressBar}>
      <p className={styles.label}>{label}</p>
      <div className={styles.outerBar}>
        <div
          className={styles.innerBar}
          style={{
            width: `${percentage}%`,
            backgroundColor: color,
          }}
        ></div>
      </div>
      <p className={styles.percentage}>{`${percentage}%`}</p>
    </div>
  );
}

export default ProgressBar;
