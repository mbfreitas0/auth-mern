import loading from "../../img/Spinner-1s-200px.svg";
import React from "react";
import styles from "../layout/Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.loader_container}>
      <img className={styles.loader} src={loading} alt="Loading" />
    </div>
  );
};

export default Loading;
