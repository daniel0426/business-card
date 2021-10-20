import React, { useRef } from "react";
import Button from "../button/button";
import ImageInput from "../imageInput/imageInput";
import styles from "./cardEditForm.module.css";

const CardEditForm = ({ card , addAndUpdateCard, deleteCard }) => {
  const { name, company, theme, ph, position, email, fileName } = card;
  const nameRef = useRef();
  const companyRef = useRef();
  const positionRef = useRef();
  const emailRef = useRef();
  const phRef = useRef();
  const themeRef = useRef();

  const onChange = (e) => {
    if (e.currentTarget.name === null) {
      return;
    }
    e.preventDefault();
    addAndUpdateCard({
        ...card,
        [e.currentTarget.name]: e.currentTarget.value,
    })
  };

  
  return (
    <form className={styles.form}>
      <div className={styles.inputContainer}>
        <input
          ref={nameRef}
          className={styles.input}
          type="text"
          name="name"
          value={name}
          onChange={onChange}
        />
        <input
          ref={companyRef}
          className={styles.input}
          type="text"
          name="company"
          value={company}
          onChange={onChange}
        />
        <input
          ref={positionRef}
          className={styles.input}
          type="text"
          name="position"
          value={position}
          onChange={onChange}
        />
        <input
          ref={emailRef}
          className={styles.input}
          type="text"
          name="email"
          value={email}
          onChange={onChange}
        />
        <input
          ref={phRef}
          className={styles.input}
          type="text"
          name="ph"
          value={ph}
          onChange={onChange}
        />
      </div>
      <div className={styles.choose}>
        <select
          ref={themeRef}
          className={styles.select}
          name="theme"
          value={theme}
          onChange={onChange}
        >
          <option defaultValue disabled value="Choose theme">
            choose theme
          </option>
          <option value="bright">bright</option>
          <option value="green">green</option>
          <option value="red">red</option>
          <option value="blue">blue</option>
        </select>
        <div>
         <ImageInput/>
        </div>
        <div className={styles.button}>
          <Button name="Delete" onClick={()=> deleteCard(card)} />
        </div>
      </div>
    </form>
  );
};

export default CardEditForm;
