import React from "react";
import styles from "../Form/SubmitButton.module.css";

const SubmitButton = ({ text }) => {
  return (
    <div className={styles.btn}>
      <button className={styles.SubmitButton}>{text}</button>
    </div>
  );
};

export default SubmitButton;
