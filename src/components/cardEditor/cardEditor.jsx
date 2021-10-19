import React from 'react';
import CardAddForm from '../cardAddForm/cardAddForm';
import CardEditForm from '../cardEditForm/cardEditForm';
import styles from './cardEditor.module.css'
const CardEditor = ({cards, addCard}) => {
    return (
        <section className={styles.maker}>
            <h1 className={styles.title} >Editor</h1>
            {cards.map(card => <CardEditForm key={card.id} card={card}/>)}
            <CardAddForm addCard= {addCard}/>
        </section>
    );
}

export default CardEditor;
