import React from "react";

// import styles from "../Clients/ClientsUpdate.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
// import Loading from "../../components/layout/Loading";
// import Container from "../layout/Container/Container";

const client = {
  firstName: "",
  lastName: "",
  tel: "",
  address: "",
  number: "",
};

const ClientsUpdate = () => {
  const { id } = useParams();
  // console.log(id);
  const [values, setValues] = useState(client);
  // const [showClientForm, setShowClientForm] = useState(false);

  const navigate = useNavigate();
  console.log(id);

  useEffect(() => {
    fetch(`http://localhost:5000/clients/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setValues(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const onValueChange = (e) => {
    this.setValues({ ...values, [e.target.name]: e.target.value });
  };

  function onSubmit(e) {
    e.preventDefault();
    navigate("/client-list");
  }

  // const toggleClientForm = () => {
  //   setShowClientForm(!showClientForm);
  // };

  return (
    <div>
      <h1>Edição de Clientes</h1>
      <form onSubmit={onSubmit}>
        <div className="promotion-form__group">
          <label htmlFor="firstName">Nome</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={(e) => onValueChange(e)}
            value={values.firstName}
          />
        </div>
        <div className="promotion-form__group">
          <label htmlFor="lastName">Sobrenome</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            onChange={(e) => onValueChange(e)}
            value={values.lastName}
          />
        </div>
        <div className="promotion-form__group">
          <label htmlFor="tel">tel</label>
          <input
            id="tel"
            name="tel"
            type="text"
            onChange={(e) => onValueChange(e)}
            value={values.tel}
          />
        </div>
        <div className="promotion-form__group">
          <label htmlFor="address">Endereço</label>
          <input
            id="address"
            name="address"
            type="text"
            onChange={(e) => onValueChange(e)}
            value={values.address}
          />
        </div>
        <div className="promotion-form__group">
          <label htmlFor="number">Número</label>
          <input
            id="number"
            name="number"
            type="text"
            onChange={(e) => onValueChange(e)}
            value={values.number}
          />
        </div>
        <div>
          <button type="submit">Salvar</button>
        </div>
      </form>
    </div>
  );
};

export default ClientsUpdate;
