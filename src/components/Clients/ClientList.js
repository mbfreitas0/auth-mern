import React from "react";
import { useLocation } from "react-router-dom";
import Message from "../layout/Message";
import Container from "../layout/Container/Container";
import Loading from "../layout/Loading";
import LinkButton from "../LinkButton/LinkButton";
import styles from "../Clients/NewClientForm.module.css";
import ClientCard from "./ClientCard";
import { useState, useEffect } from "react";

const ClientList = () => {
  const [client, setClient] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);
  const [clientMessage, setClientMessage] = useState("");
  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  useEffect(() => {
    fetch("http://localhost:5000/clients", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setClient(data);
        setRemoveLoading(true);
      })
      .catch((err) => console.log(err));
  }, []);

  //Function for to remove client
  const removeClient = (id) => {
    fetch(`http://localhost:5000/clients/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setClient(client.filter((client) => client.id !== id));
        setClientMessage("Projeto removido com sucesso !").catch((err) =>
          console.log(err)
        );
      });
  };
  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>ClientList</h1>
        <LinkButton to="/" text="Criar Clientes" />
      </div>

      {message && <Message type="success" msg={message} />}
      {clientMessage && <Message type="success" msg={clientMessage} />}
      <Container customClass="start">
        {client.length > 0 &&
          client.map((client) => (
            <ClientCard
              id={client._id}
              firstName={client.firstName}
              lastName={client.lastName}
              tel={client.tel}
              address={client.address}
              number={client.number}
              key={client._id}
              handleRemove={removeClient}
            />
          ))}
        {/* {removeLoading && <Loading />} */}
        {<Loading /> && removeLoading && client.length === 0 && (
          <p>N??o projetos cadastrados !</p>
        )}
      </Container>
    </div>
  );
};

export default ClientList;
