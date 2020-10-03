import React from 'react';
import styles from './Calculator.module.css'
import Output from '../Display'
import Keypad from '../Keypad'

function Calculator(props) {
    console.log(props)
    return (
        <div className={styles.Calculator}>
            <Output total={props.total}/>
            <Keypad 
              onInput={props.onInput}
            />
        </div>
    );
}

export default Calculator