import React from "react";
import SubmitButton from "./SubmitButton";
import styles from "../Services/NewServiceForm.module.css";
import Input from "./Input";
import Select from "./Select";

const ServiceForm = ({ btnText }) => {
  return (
    <form className={styles.form}>
      <Input
        type="text"
        text="Nome do Cliente"
        name="name"
        placeholder="Nome do Cliente"
      />
      <Input type="text" text="CEP" name="cep" placeholder="CEP" />
      <Input type="text" text="Rua" name="rua" placeholder="Rua" />
      <Input type="text" text="Número" name="numero" placeholder="Número" />
      <Input type="text" text="Bairro" name="bairro" placeholder="Bairro" />
      <Input type="text" text="Cidade" name="cidade" placeholder="Cidade" />
      <Input type="text" text="UF" name="uf" placeholder="UF" />
      <Select name="category_id" text="Selecione a categoria" />
      <Select name="part_id" text="Selecione a peça" />
      <SubmitButton text={btnText} />
    </form>
  );
};

export default ServiceForm;
