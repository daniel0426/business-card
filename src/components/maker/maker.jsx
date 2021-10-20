import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import CardEditor from "../cardEditor/cardEditor";
import CardPreview from "../cardPreview/cardPreview";
import Footer from "../mainFooter/footer";
import Header from "../mainHeader/header";
import styles from "./maker.module.css";

const Maker = ({ FileInput, authService, cardRepository }) => {
    const history = useHistory();
    const historyState = history?.location?.state;
    const [cards, setCards] = useState({});
    const [userId, setUserId] = useState(historyState && historyState.id);

  const onLogout = () => {
    authService.logout();
  };

  useEffect(()=> {
      if(!userId){
          return;
      }
      const stopSync = cardRepository.syncCards(userId, cards => {
          setCards(cards)
      });
      return () => stopSync()
  }, [userId, cardRepository])

  const addAndUpdateCard = (card) => {
    setCards((prevCards) => {
      const updated = { ...prevCards };
      updated[card.id] = card;
      return updated;
    });
    cardRepository.saveCard(userId, card)
  };

  const deleteCard = (card) => {
    setCards((prevCards) => {
      const updated = { ...prevCards };
      delete updated[card.id];
      return updated;
    });
    cardRepository.removeCard(userId, card)
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if(user){
          setUserId(user.uid)
      }else {
          history.push('/')
      }
    });
  }, [authService, userId, history ]);

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
