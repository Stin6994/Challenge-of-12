
import { useState } from 'react';
import './enemyPlayField.css';
import enemyFieldImg from '../../resources/img/playField.png';
import enemyCard from '../../resources/img/enemyCard.png'
import empty from '../../resources/img/neon3.png'

import useArray from '../../hooks/useArray';



function EnemyPlayField() {



const { array, set, push, remove, filter, update, clear } = useArray(
    [enemyCard, enemyCard, empty, enemyCard]);

    
    function refresh () {
           set([enemyCard, enemyCard, enemyCard, enemyCard]) ;
    }

const randomIndex = array[Math.floor(Math.random()*array.length)];
const ind = array.indexOf(randomIndex);

    function pushtest (event){
        event.preventDefault();
        console.log(array.length);
        console.log(Math.random()*array.length);
        console.log(Math.floor(Math.random()*array.length));

        console.log(randomIndex);
        console.log(ind);
        update(0, empty);
    }

    return (

        <div className='enemyFieldAll'>
            <img src={enemyFieldImg}
                className='enemyFieldImg'
                alt="enemyPlayField" />

            <div className="enemyFieldContent">
                <img src={array[0]}
                    className='enemyCard'
                    alt="enemyCard" />
                <img src={array[1]}
                    className='enemyCard'
                    alt="enemyCard" />
                <img src={array[2]}
                    className='enemyCard'
                    alt="enemyCard" />
                <img src={array[3]}
                    className='enemyCard'
                    alt="enemyCard" />
            </div>

            <button className='buttonTest'
            onClick={pushtest}
                /* onClick={changeImg} */
            > удалить случайную карту
            </button>

            <button className='buttonTest'
            onClick={refresh}
            > refresh
            </button>

        </div>






    );
}




export default EnemyPlayField;