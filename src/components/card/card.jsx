import React, { memo } from 'react';
import styles from './card.module.css';
const DEFAULT_IMAGE = '/images/default_user.png'

const Card = memo(({card}) => {
    const {name, company,  ph,  position, email, imgURL,theme} = card;
    const img = imgURL || DEFAULT_IMAGE;
    return (
        <li className={`${styles.card} ${getTheme(theme)}`}>
            <div className={styles.profile} >
                <img className={styles.avatar} src={img} alt="profile" />
                <h4 className={styles.company}>{company}</h4>
            </div>
            <div className={styles.info}>
                <h1 className={styles.name}>{name}</h1>
                <div className={styles.subinfo}>
                <p className={styles.position}>{position}</p>
                <p className={styles.email}> {email}</p>
                <p className={styles.ph}>{ph}</p>
                </div>
            </div>
        </li>
    );
});

function getTheme(theme){
    switch (theme) {
        case "bright":
          return styles.bright;
        case "green":
          return styles.green;
        case "red":
          return styles.red;
        case "blue":
            return styles.blue;
        default:
            break;
      }
}
export default Card;
