import React, { useEffect } from "react";
import { useState } from "react";
//import axios from "axios";
import SubmitButton from "./SubmitButton";
import styles from "../Form/Form.module.css";
import Input from "./Input";
import Select from "./Select";
import SelectPart from "./SelectPart";

const ServiceForm = ({ btnText }) => {
  // const [project, SetProject] = useState([]);
  const [service, SetService] = useState([]);
  const [category, SetCategory] = useState([]);

  const [part, SetPart] = useState([]);

  //Carregar o select das categorias
  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        SetCategory(data);
      })
      .catch((err) => console.log(err));
  }, []);

  //Carregar o select das peças
  useEffect(() => {
    fetch("http://localhost:5000/parts", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        SetPart(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(service);
  };

  function handleChange(e) {
    setService({ ...service, [e.target.firstName]: e.target.value });
  }

  function handleCategory(e) {
    SetService({
      ...service,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  function handlePart(e) {
    SetService({
      ...service,
      part: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  return (
    <form onSubmit={submit} className={styles.form_control}>
      <Input
        type="text"
        text="Nome"
        name="firstName"
        placeholder="Nome do Cliente"
        handleOnChange={handleChange}
        value={service.firstname ? service.firstname : ""}
      />
      <Input
        type="text"
        text="Sobrenome"
        name="lastName"
        placeholder="Sobrenome"
        handleOnChange={handleChange}
        value={service.firstname ? service.lastname : ""}
      />
      <Input
        type="text"
        text="Telefone"
        name="tel"
        placeholder="Telefone"
        handleOnChange={handleChange}
        value={service.tel ? service.tel : ""}
      />
      <Input
        type="text"
        text="CEP"
        name="cep"
        placeholder="CEP"
        handleOnChange={handleChange}
        value={service.cep ? service.cep : ""}
      />
      <Input
        type="text"
        text="Tipo Cep"
        name="tipocep"
        placeholder="Tipo CEP"
        handleOnChange={handleChange}
        value={service.tipocep ? service.tipocep : ""}
      />
      <Input
        type="text"
        text="Subtipo"
        name="subtipo"
        placeholder="Sub tipo CEP"
        handleOnChange={handleChange}
        value={service.subtipo ? service.subtipo : ""}
      />
      <Input
        type="text"
        text="UF"
        name="uf"
        placeholder="UF"
        handleOnChange={handleChange}
        value={service.uf ? service.uf : ""}
      />
      <Input
        type="text"
        text="Cidade"
        name="cidade"
        placeholder="Cidade"
        handleOnChange={handleChange}
        value={service.cidade ? service.cidade : ""}
      />
      <Input
        type="text"
        text="Bairro"
        name="bairro"
        placeholder="Bairro"
        handleOnChange={handleChange}
        value={service.bairro ? service.bairro : ""}
      />
      <Input
        type="text"
        text="Endereco"
        name="endereco"
        placeholder="Endereço"
        handleOnChange={handleChange}
        value={service.endereco ? service.endereco : ""}
      />
      <Input
        type="text"
        text="Número"
        name="numero"
        placeholder="Número"
        handleOnChange={handleChange}
        value={service.numero ? service.numero : ""}
      />
      <Input
        type="text"
        text="Complemento"
        name="complemento"
        placeholder="Complemento"
        handleOnChange={handleChange}
        value={service.complemento ? service.complemento : ""}
      />
      <Input
        type="text"
        text="CodigoIBGE"
        name="codigoIBGE"
        placeholder="Código do IBGE"
        handleOnChange={handleChange}
        value={service.codigoIBGE ? service.codigoIBGE : ""}
      />
      <Input
        type="text"
        text="Objeto"
        name="objeto"
        placeholder="Descreva o objeto para o conserto"
        handleOnChange={handleChange}
        value={service.objeto ? service.objeto : ""}
      />
      <Select
        name="category_id"
        text="Selecione a categoria"
        options={category}
        handleOnChange={handleCategory}
        value={service.category ? service.category.id : ""}
      />
      <Select
        name="part_id"
        text="Selecione a peça"
        options={part}
        handleOnChange={handlePart}
        value={service.part ? service.part.id : ""}
      />

      <SubmitButton text={btnText} />
    </form>
  );
};

export default ServiceForm;
