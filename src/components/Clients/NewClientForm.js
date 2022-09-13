import React from "react";
// useNavigate é usado para após ser realizado o post, direcionar o usuário para uma nova
//página.
import { useNavigate } from "react-router-dom";
import styles from "../Clients/NewClientForm.module.css";
import ClientForm from "../Form/ClientForm";

const NewClientForm = () => {
  const history = useNavigate();

  function createPost(client) {
    //Initialize service
    // project.cost = 0;
    client = [];

    fetch("http://localhost:5000/clients", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(client),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        history("/client-list", {
          message: "Cliente criado com sucesso !",
        });
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className={styles.newproject_container}>
      <h1>Cadastrar Clientes</h1>
      <ClientForm handleSubmit={createPost} btnText="Criar Cliente" />
    </div>
  );
};

export default NewClientForm;
