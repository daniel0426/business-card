import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import CardEditor from "../cardEditor/cardEditor";
import CardPreview from "../cardPreview/cardPreview";
import Footer from "../mainFooter/footer";
import Header from "../mainHeader/header";
import styles from "./maker.module.css";

const Maker = ({ FileInput, authService }) => {
  const [cards, setCards] = useState({
    1: {
      id: 1,
      name: "Ellie",
      company: "Samsung",
      theme: "light",
      position: "software Engineer",
      email: "ellie@gmail.conm",
      fileName: "ellie",
      imgURL: "aijefjajeijfaf",
    },
    2: {
      id: 2,
      name: "Ellie",
      company: "Samsung",
      theme: "light",
      position: "software Engineer",
      email: "ellie@gmail.conm",
      fileName: "ellie",
      imgURL: null,
    },
    3: {
      id: 3,
      name: "Ellie",
      company: "Samsung",
      theme: "light",
      position: "software Engineer",
      email: "ellie@gmail.conm",
      fileName: "",
      imgURL: null,
    },
  });

  const history = useHistory();

  const onLogout = () => {
    authService.logout();
  };

  const addAndUpdateCard = (card) => {
    setCards((prevCards) => {
      const updated = { ...prevCards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((prevCards) => {
      const updated = { ...prevCards };
      delete updated[card.id];
      return updated;
    });
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });

  return (
    <section className={styles.main}>
      <Header onLogout={onLogout} />
      <div className={styles.cardContainer}>
        <CardEditor
          FileInput={FileInput}
          cards={cards}
          addAndUpdateCard={addAndUpdateCard}
          deleteCard={deleteCard}
        />
        <CardPreview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
