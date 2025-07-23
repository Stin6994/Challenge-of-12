
import './myPlayField.css';
import playFieldImg from '../../resources/img/playField.png'
import myStar from '../../resources/img/Star.png';
import loseStar from '../../resources/img/loseStar.png'
import { useEffect, useState } from 'react';

const MyPlayField = ({ myCardsCount, setMyCardsCount, enemyPlay, setMyCurrentCard, myCurrentCard,
    drawRandomCard, life, setLife, result, setResult, setRoundId, isGameOver}) => {

    function play(cardType) {
        if (myCardsCount[cardType] > 0 && !isGameOver) {
            setResult("▪▪▪"); 
            setRoundId(prev => prev + 1);
            setMyCurrentCard(cardType);
            setMyCardsCount(prev => ({
                ...prev,
                [cardType]: prev[cardType] - 1  // Корректное уменьшение значения

            }));

            enemyPlay();
            drawRandomCard();

        }
    }

    /*     // изменение счетчика количетсва жизней
        useEffect(() => {
            if (result === 'Поражение') {
                setLife((prev) => (prev - 1));
            }
        }, [result, setLife]); */

    useEffect(() => {
        if (result === 'Поражение') {
            setLife(prev => prev - 1);
        }
    }, [result]);





    return (

        <div className='myFieldAll'>
            <img src={playFieldImg}
                alt="playFieldImg"
                className='playFieldImg' />
            <div className='myFieldContent'>
                {['rock', 'scissors', 'paper'].map(cardType => (
                    <div key={cardType} className={`my${cardType} Cont`}>
                        <span className={`${cardType}Counter`}>x{myCardsCount[cardType]}</span>
                        <button
                            className={`myButton ${cardType}`}
                            onClick={(e) => {
                                e.preventDefault();
                                if (!isGameOver) play(cardType);
                            }}
                            disabled={isGameOver}
                        ></button>
                    </div>
                ))}
                <span>Количество жизней: {life}</span>
                <div>
                    <div style={{ display: 'flex', gap: '10px', position: 'absolute' }}>
                        {/* Рисуем звезды в зависимости от life */}
                        {[1, 2, 3].map((star) => (
                            <img
                                key={star}
                                src={star <= life ? myStar : loseStar}
                                alt={star <= life ? "Горящая звезда" : "Потухшая звезда"}
                                width="10"
                                height="10"
                            />
                        ))}
                    </div>
                </div >
            </div>
        </div>
    )
}

export default MyPlayField;