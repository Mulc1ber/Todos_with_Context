import React from 'react';
import styles from './Input.module.css';

export const Input = ({ refInput, ...props }) => {
    return <input {...props} ref={refInput} className={styles.input} />;
};
