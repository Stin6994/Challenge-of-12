
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
    const [gameStatus, setGameStatus] = useState(null); // 'won' | 'lost' | null
    const [showGameOver, setShowGameOver] = useState(false);
    

    // Обработчик завершения игры
    useEffect(() => {
        const gameFinished = life <= 0 || 
                           (myCardsCount.rock === 0 && 
                            myCardsCount.paper === 0 && 
                            myCardsCount.scissors === 0);

        if (gameFinished) {
            // Даем время на обработку последнего раунда
            const timer = setTimeout(() => {
                setGameStatus(life <= 0 ? 'lost' : 'won');
                setShowGameOver(true);
            }, 100); // Небольшая задержка для обработки последнего раунда
            
            return () => clearTimeout(timer);
        }
    }, [life, myCardsCount]);




    const resetMyCards = () => {
        setMyCardsCount(MyInitialCards);
        setMyCurrentCard('default');
        setDeck(createDeck);
        setCurrentEnemyCard('default');
        setLife(3);
        setMyScore(0);
        setBonus(1)
    };

    // Полный сброс игры
    const resetGame = () => {
        resetMyCards();
        reloadEnemyCards();
        setGameStatus(null);
        setShowGameOver(false);
        setLife(3);
        setMyScore(0);
        setBonus(1);
    };




    return (
        <Fragment>

            {showGameOver && (
                <div className="gameOverModal">
                    <div className="modalContent">
                        <h2>{gameStatus === 'won' ? 'Победа!' : 'Поражение'}</h2>
                        <p>{gameStatus === 'won' ? `Очков: ${myScore}` : 'Попробуйте еще раз!'}</p>
                        <button onClick={resetGame}>Новая игра</button>
                    </div>
                </div>
            )}

            <EnemyPlayField arr={array} />
            <ScoreBar
                gameStatus={gameStatus}
                myScore={myScore} />

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
                showGameOver={showGameOver}
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
                showGameOver={showGameOver}
            />
        </Fragment>
    )
}


export default GamePage;