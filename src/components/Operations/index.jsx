import React from 'react';
import styles from './Operations.module.css'
import Addition from '../Addition'
import Subtraction from '../Subtraction'
import Multiplication from '../Multiplication'
import Division from '../Division'
import Evaluate from '../Evaluate';

function Operations() {
    return (
        <div className={styles.Operations}>
            <Addition />
            <Subtraction />
            <Multiplication />
            <Division />
            <Evaluate />
        </div>
    );
}

export default Operations