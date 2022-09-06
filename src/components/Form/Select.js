import React from "react";
import styles from "../Form/Select.module.css";

const Select = ({ text, name, options, handleOnChange, value }) => {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}:</label>
      <select name={name} id={name}>
        <option>Selecione uma opção</option>
      </select>
    </div>
  );
};

export default Select;
