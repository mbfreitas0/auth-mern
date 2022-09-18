import React from "react";
import styles from "../Clients/ClientsUpdate.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../../components/layout/Loading";
import Container from "../layout/Container/Container";

const ClientsUpdate = () => {
  const { id } = useParams();
  console.log(id);
  const [client, setClient] = useState([]);
  const [showClientForm, setShowClientForm] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/clients/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setClient(data);
        })
        .catch((err) => console.log(err));
    }, 500);
  }, [id]);

  const toggleClientForm = () => {
    setShowClientForm(!showClientForm);
  };

  return <>{client.firstName ? client.firstName : <Loading />}</>;
};

export default ClientsUpdate;
