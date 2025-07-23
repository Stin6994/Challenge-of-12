
import './gamePage.css';
import EnemyPlayField from '../enemyPlayField/enemyPlayField';
import { Fragment, useState, useEffect } from 'react';
import MyPlayField from '../myPlayField/myPlayField';
import ScoreBar from '../scoreBar/scoreBar';
import ArrayEnemyCard from '../arrayEnemyCards/arrayEnemyCards';
import ReloadButton from '../reloadButton/reloadButton';
import ResultField from '../resultField/resultField';
import BuySaleBar from '../buySaleBar/buySaleBar';

const GamePage = () => {

    const { reloadEnemyCards, array, enemyPlay, createDeck, currentEnemyCard,
        setCurrentEnemyCard, drawRandomCard, setDeck } = ArrayEnemyCard();

    const MyInitialCards = {
        rock: 4,
        scissors: 4,
        paper: 4
    };




    const [myCardsCount, setMyCardsCount] = useState(MyInitialCards);
    const [myCurrentCard, setMyCurrentCard] = useState('default');
    const [result, setResult] = useState();
    const [life, setLife] = useState(3);
    const [myScore, setMyScore] = useState(0);
    const [bonus, setBonus] = useState(1);
    const [roundId, setRoundId] = useState(0);
    const [isGameOver, setIsGameOver] = useState(false);

    useEffect(() => {
        if (life <= 0) {
            setIsGameOver(true);
        }
    }, [life]);




    const resetMyCards = () => {
        setMyCardsCount(MyInitialCards);
        setMyCurrentCard('default');
        setDeck(createDeck);
        setCurrentEnemyCard('default');
        setLife(3);
        setMyScore(0);
        setBonus(1)
    };

    const resetGame = () => {
        resetMyCards(); // Ваша существующая функция сброса
        setIsGameOver(false);
        setLife(3); // Восстанавливаем жизни
    };




    return (
        <Fragment>

            {(isGameOver || (myCardsCount.rock === 0 && myCardsCount.paper === 0 && myCardsCount.scissors === 0)) && (
                <div className="gameOverModal">
                    <div className="modalContent">
                        <h2>{isGameOver ? `Вы проиграли` : `Победа!`}</h2>
                        <p>{isGameOver ? `Очков нет` : `Ваш результат: ${myScore} очков`}</p>
                        <button
                            onClick={resetGame}
                            className="refreshButton"
                        >
                            Начать заново
                        </button>
                    </div>
                </div>
            )}

            <EnemyPlayField arr={array} />
            <ScoreBar 
            myScore={myScore}
            result={result}/>

            <MyPlayField enemyPlay={enemyPlay}
                myCardsCount={myCardsCount}
                setMyCardsCount={setMyCardsCount}
                setMyCurrentCard={setMyCurrentCard}
                myCurrentCard={myCurrentCard}
                drawRandomCard={drawRandomCard}
                life={life}
                setLife={setLife}
                result={result}
                setResult={setResult}
                setRoundId={setRoundId}
                isGameOver={isGameOver}
            />

            <ReloadButton reloadEnemyCards={reloadEnemyCards}
                reloadMyCards={resetMyCards} />

            <ResultField myCurrentCard={myCurrentCard}
                setMyCurrentCard={setMyCurrentCard}
                createDeck={createDeck}
                currentEnemyCard={currentEnemyCard}
                setCurrentEnemyCard={setCurrentEnemyCard}
                drawRandomCard={drawRandomCard}
                result={result}
                setResult={setResult}
                roundId={roundId}
            />
            <BuySaleBar
                myScore={myScore}
                setMyScore={setMyScore}
                result={result}
                setResult={setResult}
                bonus={bonus}
                setBonus={setBonus}
                life={life}
                setLife={setLife}
            />
        </Fragment>
    )
}


export default GamePage;