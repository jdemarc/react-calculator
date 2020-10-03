import React from 'react';
import styles from './Keypad.module.css'

function Keypad(props) {
    console.log(props)
    return (
        <div className={styles.Keypad}>
            <div className={styles.keys}>
                <button name="7"
                  onClick={(e) => props.onInput(e.target.name)}
                >7</button>
                <button name="4"
                  onClick={(e) => props.onInput(e.target.name)}
                >4</button>
                <button name="1"
                  onClick={(e) => props.onInput(e.target.name)}
                >1</button>
                <button name="0"
                  onClick={(e) => props.onInput(e.target.name)}
                >0</button>
            </div>

            <div className={styles.keys}>
                <button name="8"
                  onClick={(e) => props.onInput(e.target.name)}
                >8</button>
                <button name="5"
                  onClick={(e) => props.onInput(e.target.name)}
                >5</button>
                <button name="2"
                  onClick={(e) => props.onInput(e.target.name)}
                >2</button>
                <button name="."
                  onClick={(e) => props.onInput(e.target.name)}
                >.</button>
            </div>

            <div className={styles.keys}>
                <button name="9"
                  onClick={(e) => props.onInput(e.target.name)}
                >9</button>
                <button name="6"
                  onClick={(e) => props.onInput(e.target.name)}
                >6</button>
                <button name="3"
                  onClick={(e) => props.onInput(e.target.name)}
                >3</button>
                <button name="c"
                  onClick={(e) => props.onInput(e.target.name)}
                >c</button>
            </div>

            <div className={styles.opkeys}>
                <button name="+"
                  onClick={(e) => props.onInput(e.target.name)}
                >+</button>
                <button name="-"
                  onClick={(e) => props.onInput(e.target.name)}
                >-</button>
                <button className={styles.tall}
                  name="="
                  onClick={(e) => props.onInput(e.target.name)}
                >=</button>
            </div>
        </div>
    );
}

export default Keypad