import React from "react";
import styles from "../layout/Navbar/styles.module.css";
import Navbar from "../layout/Navbar/Navbar";
import Footer from "../layout/Footer/Footer";
import Banner from "../Banner/Banner";
import NewClientForm from "./NewClientForm";

const ClientCreate = () => {
  return (
    <div>
      <nav className={styles.navbar}>
        <Navbar />
      </nav>
      <Banner />
      <NewClientForm />
      <Footer />
    </div>
  );
};

export default ClientCreate;
