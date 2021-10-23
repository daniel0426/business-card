import React from 'react';
import styles from './loginHeader.module.css'

const LoginHeader = () => (
    <header className={styles.header}>
        <img className={styles.logo} src="/images/logo.png" alt="logo" />
        <h1 className={styles.title}>Business Card Maker</h1>
    </header>
    );


export default LoginHeader;