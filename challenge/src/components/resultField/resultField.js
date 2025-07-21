import paperImg from '../../resources/img/paper.png';
import rockImg from '../../resources/img/rock.png';
import scissorsImg from '../../resources/img/scissors.png';

import myPlayField from '../../resources/img/playFieldVertical.png'
import './resultField.css'

import { useState, useEffect } from 'react';




const ResultField = ({roundId, myCurrentCard, currentEnemyCard, result, setResult, setCurrentEnemyCard, setMyCurrentCard}) => {


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
        setResult(start);
        return;
    }

    if (!currentEnemyCard) return;

    // Принудительно определяем результат каждый раз
    let newResult;
    if (myCurrentCard === currentEnemyCard) {
        newResult = draw;
    } else if (
        (myCurrentCard === 'rock' && currentEnemyCard === 'scissors') ||
        (myCurrentCard === 'scissors' && currentEnemyCard === 'paper') ||
        (myCurrentCard === 'paper' && currentEnemyCard === 'rock')
    ) {
        newResult = victory;
    } else {
        newResult = defeat;
    }

    // Всегда обновляем результат, даже если он такой же, как предыдущий
    setResult(newResult);
}, [myCurrentCard, currentEnemyCard]); */


useEffect(() => {
    if (!myCurrentCard || myCurrentCard === 'default') {
        setResult(start);
        return;
    }
    if (!currentEnemyCard) return;

    const newResult = 
        myCurrentCard === currentEnemyCard ? draw :
        (myCurrentCard === 'rock' && currentEnemyCard === 'scissors') ||
        (myCurrentCard === 'scissors' && currentEnemyCard === 'paper') ||
        (myCurrentCard === 'paper' && currentEnemyCard === 'rock') ? victory : defeat;

    setResult(newResult);
}, [myCurrentCard, currentEnemyCard, roundId]); // Добавляем roundId в зависимости



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