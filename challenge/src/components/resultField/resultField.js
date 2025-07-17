import paperImg from '../../resources/img/paper.png';
import rockImg from '../../resources/img/rock.png';
import scissorsImg from '../../resources/img/scissors.png';

import myPlayField from '../../resources/img/playFieldVertical.png'
import './resultField.css'

import { useState } from 'react';




const ResultField = ({ myCurrentCard, currentEnemyCard }) => {


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

    const [result, setResult] = useState(resultRound.start);

   




    const myCurrentImage = cardImages[myCurrentCard] || cardImages.default; // моя карта
    


    return (
        <div className="mainCont">
            <div className="playField">
                <img src={currentEnemyCard ? cardImages[currentEnemyCard] : cardImages.default} alt="enemyPlayCard" />
            </div>
            <div>
                <span className="resultText">Тут будет результат</span>
            </div>
            <div className="playField">
                <img src={myCurrentImage} alt="enemyPlayCard" />
            </div>

        </div>
    );
}

export default ResultField;