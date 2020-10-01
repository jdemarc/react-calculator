import React from 'react';
import styles from './Operations.module.css'
import Addition from '../Addition'
import Subtraction from '../Subtraction'
import Multiplication from '../Multiplication'
import Division from '../Division'

function Operations() {
    return (
        <div className={styles.Operations}>
            Operations
            <Addition />
            <Subtraction />
            <Multiplication />
            <Division />
        </div>
    );
}

export default Operations