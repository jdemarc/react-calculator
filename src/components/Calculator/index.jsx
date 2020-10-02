import React from 'react';
import styles from './Calculator.module.css'
import Output from '../Display'
import MainPad from '../Keypad'

function Calculator() {
    return (
        <div className={styles.Calculator}>
            <Output />
            <MainPad />
        </div>
    );
}

export default Calculator