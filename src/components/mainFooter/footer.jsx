import React from 'react';
import { memo } from 'react/cjs/react.development';
import styles from './footer.module.css'
const Footer = memo(() => {
    return (
        <div >
            <p className={styles.footer}>2021 copyright @Daniel Chung</p>
        </div>
    );
})

export default Footer;
