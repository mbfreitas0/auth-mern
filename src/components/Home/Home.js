import React from "react";
import styles from "../Home/Home.module.css";
import savings from "../../img/banner.jpg";
import LinkButton from "../LinkButton/LinkButton";
// import Navbar from "../layout/Navbar/Navbar";
// import Footer from "../layout/Footer/Footer";

const Home = () => {
  return (
    <section className={styles.home_container}>
      <h1>
        Bem vindo a Loja <span>Cata-Vento</span>
      </h1>
      <p>Comece a gerenciar os seus serviços agora mesmo !</p>
      <LinkButton to="/" text="Criar Serviços" />
      <img src={savings} alt="Cata-Vento"></img>
    </section>
  );
};

export default Home;
