import React from 'react';
import styles from './Display.module.css'

//Presentational
function Display(props) {
    return (
        <div className={styles.Display}
        >
            {props.total}
        </div>
    );
}

export default Display