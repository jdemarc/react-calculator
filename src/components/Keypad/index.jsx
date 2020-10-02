import React from 'react';
import styles from './Keypad.module.css'

function Keypad() {
    return (
        <div className={styles.Keypad}>
            <div className={styles.keys}>
                <button name="7">7</button>
                <button name="4">4</button>
                <button name="1">1</button>
                <button name="0">0</button>
            </div>
            <div className={styles.keys}>
                <button name="8">8</button>
                <button name="5">5</button>
                <button name="2">2</button>
                <button name=".">.</button>
            </div>
            <div className={styles.keys}>
                <button name="9">9</button>
                <button name="6">6</button>
                <button name="3">3</button>
                <button name="c">c</button>
            </div>
            <div className={styles.keys}>
                <button name="+">+</button>
                <button name="-">-</button>
                <button className={styles.tall}
                  name="="
                  >
                    =</button>
            </div>
        </div>
    );
}

export default Keypad