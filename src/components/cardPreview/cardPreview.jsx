import React from 'react';
import Card from '../card/card';
import styles from './cardPreview.module.css';

const CardPreview = ({cards}) => {
    return (
        <section className={styles.preview}>
            <h1 className={styles.title}>Preview</h1>
            {cards.map(card => <Card card = {card}/>)}
        </section>
    );
}

export default CardPreview;