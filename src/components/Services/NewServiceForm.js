import React from "react";
// useNavigate é usado para após ser realizado o post, direcionar o usuário para uma nova
//página.
import { useNavigate } from "react-router-dom";
import styles from "../Services/NewServiceForm.module.css";
import ServiceForm from "../Form/ServiceForm";

const NewServiceForm = () => {
  const history = useNavigate();

  function createPost(project) {
    //Initialize service
    // project.cost = 0;
    // project.service = [];

    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        history("/servicelist", {
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
