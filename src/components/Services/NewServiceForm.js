import React from "react";
import styles from "../Services/NewServiceForm.module.css";

import ServiceForm from "../Form/ServiceForm";

const NewServiceForm = ({ btnText }) => {
  return (
    <div className={styles.newproject_container}>
      <h1>Criar Serviços</h1>
      <p>Crie um Serviço para adicionar peças e/ou mão de obra</p>
      <ServiceForm btnText="Criar Serviço" />
    </div>
  );
};

export default NewServiceForm;
