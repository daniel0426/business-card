import React, { useState } from 'react';
import styles from './cardAddForm.module.css'
import { useRef } from 'react/cjs/react.development';
import Button from '../button/button';

const CardAddForm = ({addCard}) => {
    const formRef = useRef();
    const nameRef = useRef();
    const companyRef = useRef();
    const positionRef = useRef();
    const emailRef = useRef();
    const phRef = useRef();
    const themeRef = useRef();
    const [file, setFile] = useState({
        fileName: null,
        imgURL : null
    })
    const addCardHandler = (e)=> {
        e.preventDefault();
        const card = {
            id: Date.now(),
            name : nameRef.current.value || "",
            company : companyRef.current.value || '',
            position:positionRef.current.value || '',
            email:emailRef.current.value || '',
            ph:phRef.current.value || '',
            theme:themeRef.current.value || '',
            fileName: file.fileName || '',
            imgURL : file.imgURL || ''
        };
        formRef.current.reset();
        addCard(card);
        
    }
    return (
        <form ref={formRef} className={styles.form}>
            <h1> ADD </h1>
            <div className={styles.inputContainer}>
                <input ref={nameRef} className={styles.input} type="text" name="name" placeholder="Name"/>
                <input ref={companyRef} className={styles.input} type="text" name="company" placeholder="Company"/>
                <input ref={positionRef} className={styles.input} type="text" name="position" placeholder="Position" />
                <input ref={emailRef} className={styles.input} type="text" name="email" placeholder="Email" />
                <input ref={phRef} className={styles.input} type="text" name="ph" placeholder="phone"/>
            </div>

            <div className={styles.choose}>
                <select ref={themeRef} className={styles.select} name="theme" >
                    <option defaultValue disabled value="Choose theme" >choose theme</option>
                    <option value="bright">bright</option>
                    <option value="green">green</option>
                    <option value="red">red</option>
                    <option value="blue">blue</option>
                </select>
                <div>
                    {/* <FileInput name={file.fileName} onFileChange={onFileChange}/> */}
                </div>
                <div className={styles.button}>
                <Button name="Add" onClick={addCardHandler}/>
                </div>
            </div>
        </form>
    );
}

export default CardAddForm;
