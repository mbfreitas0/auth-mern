import { Link } from "react-router-dom";
import Container from "../Container/Container";
import styles from "../Navbar/styles.module.css";
//import Home from "../../Home/Home";
import logo from "../../../img/cata-vento.png";
import React from "react";

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <nav class={styles.navbar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="Cata-Vento" class={styles.img} />
        </Link>
        <ul class={styles.list}>
          <li class={styles.item}>
            <Link to="/home">Home</Link>
          </li>
          <li class={styles.item}>
            <Link to="/">BBB</Link>
          </li>
          <li class={styles.item}>
            <Link to="/">CCC</Link>
          </li>
          <li class={styles.item}>
            <Link to="#" onClick={handleLogout}>
              Logout
            </Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default Navbar;
