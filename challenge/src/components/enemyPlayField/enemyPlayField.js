
import { useState } from 'react';
import './enemyPlayField.css';
import enemyFieldImg from '../../resources/img/playField.png';
import enemyCard from '../../resources/img/enemyCard.png'
import empty from '../../resources/img/neon3.png'

import useArray from '../../hooks/useArray';

import ArrayEnemyCard from '../arrayEnemyCards/arrayEnemyCards';

/* const ArrayEnemyCard = () => {
    const { array, set, update } = useArray(
        [enemyCard, enemyCard, empty, enemyCard]);

    function refresh() {
        set([enemyCard, enemyCard, enemyCard, enemyCard]);
    }

        const refresh = () => {
            set([enemyCard, enemyCard, enemyCard, enemyCard]);
        }

    const pushtest = (event) => {
        event.preventDefault();
        const modArray = array.map((img, value) => (img !== empty ? value : -1))
            .filter(img => img !== -1);
        if (modArray.length > 0) {
            const randomIndex = modArray[Math.floor(Math.random() * modArray.length)];
            update(randomIndex, empty);
        }
    }
    return {
        refresh,
        pushtest, 
        array
    }
} */


function EnemyPlayField({ arr }) {

    /* const {refresh, pushtest, array} = ArrayEnemyCard(); */

    return (

        <div className='enemyFieldAll'>
            <img src={enemyFieldImg}
                className='enemyFieldImg'
                alt="enemyPlayField" />

            <div className="enemyFieldContent">
                {arr.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        className='enemyCard'
                        alt="enemyCard"
                    />
                ))}
            </div> 

        </div>

    );
}




export default EnemyPlayField;
