import React from "react";
import { useState, useEffect } from "react";

// useHistory é para após ser realizado o post, direcionar o usuário para uma nova
//página.
import { useHistory } from "react-router-dom";
import styles from "../Services/NewServiceForm.module.css";

import ServiceForm from "../Form/ServiceForm";

const NewServiceForm = ({ handleSubmit, btnText, serviceData }) => {
  const [category, SetCategory] = useState([]);

  const [part, SetPart] = useState([]);

  const [service, SetService] = useState(serviceData || {});

  const history = useHistory();

  function createPost(service) {
    //Initialize service
    service.cost = 0;
    service.service = [];

    fetch("http://localhost:3000/services", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(service),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        history.push("/servicelist", {
          message: "Serviço criado com sucesso !",
        });
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className={styles.newproject_container}>
      <h1>Criar Serviços</h1>
      <p>Crie um Serviço para adicionar peças e/ou mão de obra</p>
      <ServiceForm handleSubmit={createPost} btnText="Criar Serviço" />
    </div>
  );
};

export default NewServiceForm;
