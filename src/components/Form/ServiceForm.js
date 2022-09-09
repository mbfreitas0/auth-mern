import React, { useEffect } from "react";
import { useState } from "react";
//import axios from "axios";
import SubmitButton from "./SubmitButton";
import styles from "../Form/Form.module.css";
import Input from "./Input";
import Select from "./Select";

const ServiceForm = ({ btnText }) => {
  const [categories, SetCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        SetCategories(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <form className={styles.form_control}>
      <Input
        type="text"
        text="Nome"
        name="firstName"
        placeholder="Nome do Cliente"
      />
      <Input
        type="text"
        text="Sobrenome"
        name="lastName"
        placeholder="Sobrenome"
      />
      <Input type="text" text="Telefone" name="tel" placeholder="Telefone" />
      <Input type="text" text="CEP" name="cep" placeholder="CEP" />
      <Input
        type="text"
        text="Tipo Cep"
        name="tipocep"
        placeholder="Tipo CEP"
      />
      <Input
        type="text"
        text="Subtipo"
        name="subtipo"
        placeholder="Sub tipo CEP"
      />
      <Input type="text" text="UF" name="uf" placeholder="UF" />
      <Input type="text" text="Cidade" name="cidade" placeholder="Cidade" />
      <Input type="text" text="Bairro" name="bairro" placeholder="Bairro" />
      <Input
        type="text"
        text="Endereco"
        name="endereco"
        placeholder="Endereço"
      />
      <Input type="text" text="Número" name="numero" placeholder="Número" />
      <Input
        type="text"
        text="Complemento"
        name="complemento"
        placeholder="Complemento"
      />
      <Input
        type="text"
        text="CodigoIBGE"
        name="codigoIBGE"
        placeholder="Código do IBGE"
      />
      <Input
        type="text"
        text="Objeto"
        name="objeto"
        placeholder="Descreva o objeto para o conserto"
      />
      <Select
        name="category_id"
        text="Selecione a categoria"
        options={categories}
      />
      {/* <Select name="part_id" text="Selecione a peça" /> */}
      <SubmitButton text={btnText} />
    </form>
  );
};

export default ServiceForm;
