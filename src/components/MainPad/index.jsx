import React from 'react';
import Clear from '../Clear'
import Input from '../Input'
import Operations from '../Operations'
import styles from './MainPad.module.css'

function MainPad() {
    return (
        <div className={styles.MainPad}>
            <div className={styles.container}>
                <Clear />
                <Input />
            </div>

            
            <Operations />
        </div>
    );
}

export default MainPad