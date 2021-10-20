import React from "react";
import CardAddForm from "../cardAddForm/cardAddForm";
import CardEditForm from "../cardEditForm/cardEditForm";
import styles from "./cardEditor.module.css";
const CardEditor = ({ cards, addAndUpdateCard, deleteCard }) => {
  return (
    <section className={styles.maker}>
      <h1 className={styles.title}>Editor</h1>
      {Object.keys(cards).map((key) => (
        <CardEditForm
          key={key}
          card={cards[key]}
          addAndUpdateCard={addAndUpdateCard}
          deleteCard={deleteCard}
        />
      ))}
      <CardAddForm addAndUpdateCard={addAndUpdateCard} />
    </section>
  );
};

export default CardEditor;
