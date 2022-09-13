import React from "react";
import styles from "../Banner/styles.module.css";
import banner from "../../img/banner.jpg";

const BannerClient = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${banner})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        width: "1412px",
        height: "500px",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
      className={styles.main_banner}
    >
      <h1>Clientes</h1>
    </div>
  );
};

export default BannerClient;
