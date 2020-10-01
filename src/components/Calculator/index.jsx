import React from 'react';
import styles from './Calculator.module.css'
import Output from '../Output'
import MainPad from '../MainPad'

function Calculator() {
    return (
        <div className={styles.Calculator}>
        Calculator
            <Output />
            <MainPad />
        </div>
    );
}

export default Calculator