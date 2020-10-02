import React from 'react';
import styles from './Keypad.module.css'

function Keypad() {
    return (
        <div className={styles.Keypad}>
            <div className={styles.keys}>
            <button>7</button>
            <button>4</button>
            <button>1</button>
            <button>0</button>
            </div>

            <div className={styles.keys}>
            <button>8</button>
            <button>5</button>
            <button>2</button>
            <button>.</button>

            </div>

            <div className={styles.keys}>
            <button>9</button>
            <button>6</button>
            <button>3</button>
            <button>c</button>
            </div>

            <div className={styles.keys}>
            <button>+</button>
            <button>-</button>
            <button className={styles.tall}>=</button>
            </div>

        </div>
    );
}

export default Keypad