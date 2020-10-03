import React from 'react';
import styles from './Calculator.module.css'
import Output from '../Display'
import Keypad from '../Keypad'

function Calculator(props) {
    return (

        <div className={styles.Calculator}>
            <Output total={props.total}/>
            <Keypad onClick={props.onClick}
            //funct
            />
        </div>
    );
}

export default Calculator