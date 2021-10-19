import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import CardEditor from "../cardEditor/cardEditor";
import CardPreview from "../cardPreview/cardPreview";
import Footer from "../mainFooter/footer";
import Header from "../mainHeader/header";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: 1,
      name: "Ellie",
      company: "Samsung",
      theme: "light",
      position: "software Engineer",
      email: "ellie@gmail.conm",
      fileName: "ellie",
      imgURL: "aijefjajeijfaf",
    },
    {
        id: 2,
        name: "Ellie",
        company: "Samsung",
        theme: "light",
        position: "software Engineer",
        email: "ellie@gmail.conm",
        fileName: "ellie",
        imgURL: null,
      },
      {
        id: 3,
        name: "Ellie",
        company: "Samsung",
        theme: "light",
        position: "software Engineer",
        email: "ellie@gmail.conm",
        fileName: "ellie",
        imgURL: null,
      },
  ]);
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  const addCard = (card)=> {
    const updated = [...cards, card];
    setCards(updated);
  }

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
        <CardEditor cards={cards} addCard = {addCard} />
        <CardPreview cards={cards}/>
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
