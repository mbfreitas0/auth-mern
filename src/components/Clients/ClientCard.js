import React from "react";
import styles from "../Clients/ClientCard.module.css";
import { BsPencil, BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const ClientCard = ({
  id,
  firstName,
  lastName,
  tel,
  address,
  number,
  handleRemove,
}) => {
  const remove = (e) => {
    e.preventDefault();
    handleRemove(id);
  };
  return (
    <div className={styles.project_card}>
      <h4>{firstName}</h4>

      <p>
        <span>Sobrenome:</span>
        {lastName}
      </p>
      <p>
        <span>Tel:</span>
        {tel}
      </p>
      <p>
        <span>Endereço:</span>
        {address}
      </p>
      <p>
        <span>Número:</span>
        {number}
      </p>
      <div className={styles.project_card_actions}>
        <Link to={`/client-update/${id}`}>
          <BsPencil />
          Editar
        </Link>
        <button onClick={remove}>
          <BsFillTrashFill />
          Excluir
        </button>
      </div>
    </div>
  );
};

export default ClientCard;
