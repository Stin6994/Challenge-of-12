import paperImg from '../../resources/img/paper.png';
import rockImg from '../../resources/img/rock.png';
import scissorsImg from '../../resources/img/scissors.png';

import myPlayField from '../../resources/img/playFieldVertical.png'
import './resultField.css'

import { useState, useEffect } from 'react';




const ResultField = ({ myCurrentCard, currentEnemyCard, result, setResult, setCurrentEnemyCard, setMyCurrentCard}) => {


    console.log(currentEnemyCard);



    // Создаем маппинг карт на изображения
    const cardImages = {
        paper: paperImg,
        rock: rockImg,
        scissors: scissorsImg,
        default: myPlayField
    };

    const resultRound = {
        victory: 'Победа',
        draw: 'Ничья',
        defeat: 'Поражение',
        start: 'Выбери карту',
    }

    const { victory, draw, defeat, start } = resultRound;




/* useEffect(() => {
    if (!myCurrentCard || myCurrentCard === 'default') {
        if (result !== start) setResult(start); // Обновляем только если нужно
        return;
    }

    if (!currentEnemyCard) return;

    const newResult = 
        myCurrentCard === currentEnemyCard ? draw :
        (myCurrentCard === 'rock' && currentEnemyCard === 'scissors') ||
        (myCurrentCard === 'scissors' && currentEnemyCard === 'paper') ||
        (myCurrentCard === 'paper' && currentEnemyCard === 'rock') ? victory : defeat;

    if (result !== newResult) setResult(newResult);// Обновляем только при изменени


}, [myCurrentCard, currentEnemyCard]);  */

useEffect(() => {
    if (!myCurrentCard || myCurrentCard === 'default') {
        setResult(start);
        return;
    }

    if (!currentEnemyCard) return;

    if (myCurrentCard === currentEnemyCard) {
        setResult(draw);
    } else if (
        (myCurrentCard === 'rock' && currentEnemyCard === 'scissors') ||
        (myCurrentCard === 'scissors' && currentEnemyCard === 'paper') ||
        (myCurrentCard === 'paper' && currentEnemyCard === 'rock')
    ) {
        setResult(victory);
    } else {
        setResult(defeat);
    }
}, [myCurrentCard, currentEnemyCard]); // Только эти зависимости






    const myCurrentImage = cardImages[myCurrentCard] || cardImages.default; // моя карта



    return (
        <div className="mainCont">
            <div className="playField">
                <img src={currentEnemyCard ? cardImages[currentEnemyCard] : cardImages.default} alt="enemyPlayCard" />
            </div>
            <div>
                <span className="resultText">{result}</span>
            </div>
            <div className="playField">
                <img src={myCurrentImage} alt="enemyPlayCard" />
            </div>

        </div>
    );
}

export default ResultField;