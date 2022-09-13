import React, { useState, useEffect } from "react";
import SubmitButton from "./SubmitButton";
import styles from "../Form/Form.module.css";
import Input from "./Input";
import Select from "./Select";
import SelectPart from "./SelectPart";

const ServiceForm = ({ handleSubmit, btnText, projectData }) => {
  const [part, SetPart] = useState([]);
  // const [service, SetService] = useState([]);
  const [category, SetCategory] = useState([]);
  const [project, SetProject] = useState(projectData || {});

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
    handleSubmit(project);
  };

  function handleChange(e) {
    SetProject({ ...project, [e.target.name]: e.target.value });
  }

  function handleCategory(e) {
    SetProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  function handlePart(e) {
    SetProject({
      ...project,
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
        value={project.firstName ? project.firstName : ""}
      />
      <Input
        type="text"
        text="Sobrenome"
        name="lastName"
        placeholder="Sobrenome"
        handleOnChange={handleChange}
        value={project.lastName ? project.lastName : ""}
      />
      <Input
        type="text"
        text="Telefone"
        name="tel"
        placeholder="Telefone"
        handleOnChange={handleChange}
        value={project.tel ? project.tel : ""}
      />
      <Input
        type="text"
        text="CEP"
        name="cep"
        placeholder="CEP"
        handleOnChange={handleChange}
        value={project.cep ? project.cep : ""}
      />
      <Input
        type="text"
        text="Tipo Cep"
        name="tipocep"
        placeholder="Tipo CEP"
        handleOnChange={handleChange}
        value={project.tipocep ? project.tipocep : ""}
      />
      <Input
        type="text"
        text="Subtipo"
        name="subtipo"
        placeholder="Sub tipo CEP"
        handleOnChange={handleChange}
        value={project.subtipo ? project.subtipo : ""}
      />
      <Input
        type="text"
        text="UF"
        name="uf"
        placeholder="UF"
        handleOnChange={handleChange}
        value={project.uf ? project.uf : ""}
      />
      <Input
        type="text"
        text="Cidade"
        name="cidade"
        placeholder="Cidade"
        handleOnChange={handleChange}
        value={project.cidade ? project.cidade : ""}
      />
      <Input
        type="text"
        text="Bairro"
        name="bairro"
        placeholder="Bairro"
        handleOnChange={handleChange}
        value={project.bairro ? project.bairro : ""}
      />
      <Input
        type="text"
        text="Endereco"
        name="endereco"
        placeholder="Endereço"
        handleOnChange={handleChange}
        value={project.endereco ? project.endereco : ""}
      />
      <Input
        type="text"
        text="Número"
        name="numero"
        placeholder="Número"
        handleOnChange={handleChange}
        value={project.numero ? project.numero : ""}
      />
      <Input
        type="text"
        text="Complemento"
        name="complemento"
        placeholder="Complemento"
        handleOnChange={handleChange}
        value={project.complemento ? project.complemento : ""}
      />
      <Input
        type="text"
        text="CodigoIBGE"
        name="codigoIBGE"
        placeholder="Código do IBGE"
        handleOnChange={handleChange}
        value={project.codigoIBGE ? project.codigoIBGE : ""}
      />
      <Input
        type="text"
        text="Objeto"
        name="objeto"
        placeholder="Descreva o objeto para o conserto"
        handleOnChange={handleChange}
        value={project.objeto ? project.objeto : ""}
      />
      <Select
        name="category_id"
        text="Selecione a categoria"
        options={category}
        handleOnChange={handleCategory}
        value={project.category ? project.category.id : ""}
      />
      <Select
        name="part_id"
        text="Selecione a peça"
        options={part}
        handleOnChange={handlePart}
        value={project.part ? project.part.id : ""}
      />

      <SubmitButton text={btnText} />
    </form>
  );
};

export default ServiceForm;
