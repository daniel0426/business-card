import React from 'react';
import { memo } from 'react/cjs/react.development';
import styles from './header.module.css'
const Header = memo(({onLogout}) => {
    return(
        <header className={styles.header}>
         <h1 className={styles.title}>Business Card Maker</h1>
         {onLogout && <button className={styles.button} onClick={onLogout}>LOGOUT</button>}
         
        </header>
    )
})

export default Header;
