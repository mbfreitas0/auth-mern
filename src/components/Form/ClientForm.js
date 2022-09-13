import React, { useState } from "react";
import SubmitButton from "./SubmitButton";
import styles from "../Form/Form.module.css";
import Input from "./Input";

const ClientForm = ({ handleSubmit, btnText, clientData }) => {
  const [client, SetClient] = useState(clientData || {});

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(client);
  };

  function handleChange(e) {
    SetClient({ ...client, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={submit} className={styles.form_control}>
      <Input
        type="text"
        text="Nome"
        name="firstName"
        placeholder="Nome do Cliente"
        handleOnChange={handleChange}
        value={client.firstName ? client.firstName : ""}
      />
      <Input
        type="text"
        text="Sobrenome"
        name="lastName"
        placeholder="Sobrenome"
        handleOnChange={handleChange}
        value={client.lastName ? client.lastName : ""}
      />
      <Input
        type="text"
        text="Telefone"
        name="tel"
        placeholder="Telefone"
        handleOnChange={handleChange}
        value={client.tel ? client.tel : ""}
      />
      <Input
        type="text"
        text="Endereço"
        name="address"
        placeholder="Endereço"
        handleOnChange={handleChange}
        value={client.address ? client.address : ""}
      />
      <Input
        type="text"
        text="Número"
        name="number"
        placeholder="Número"
        handleOnChange={handleChange}
        value={client.number ? client.number : ""}
      />

      <SubmitButton text={btnText} />
    </form>
  );
};

export default ClientForm;
