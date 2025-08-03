
import './gamePage.css';
import EnemyPlayField from '../enemyPlayField/enemyPlayField';
import { Fragment, useState, useEffect } from 'react';
import MyPlayField from '../myPlayField/myPlayField';
import ScoreBar from '../scoreBar/scoreBar';
import ArrayEnemyCard from '../arrayEnemyCards/arrayEnemyCards';
import ReloadButton from '../reloadButton/reloadButton';
import ResultField from '../resultField/resultField';
import BuySaleBar from '../buySaleBar/buySaleBar';
import PlayedCardsCollection from '../cardCollection/cardCollection';
import InfoButton from '../infoButton/infoButton';
/* import Test from '../testCss/testcss'; */

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
    const [playedCards, setPlayedCards] = useState([]); // коллекция карт


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

    // Обновляем коллекцию после каждого раунда
    useEffect(() => {
        if (myCurrentCard !== 'default' && currentEnemyCard) {
            setPlayedCards(prev => [
                ...prev,
                {
                    type: myCurrentCard,
                    isPlayer: true,
                    roundId: roundId // Добавляем ID раунда
                },
                {
                    type: currentEnemyCard,
                    isPlayer: false,
                    roundId: roundId
                }
            ]);
        }
    }, [myCurrentCard, currentEnemyCard, roundId]);

    useEffect(() => {
        console.log('Current playedCards:', playedCards);
    }, [playedCards]);


    const resetMyCards = () => {
        setMyCardsCount(MyInitialCards);
        setMyCurrentCard('default');
        setDeck(createDeck);
        setCurrentEnemyCard('default');
        setLife(3);
        setMyScore(0);
        setBonus(1);
        setPlayedCards([]);
    };

    const resetGame = () => {
        // Сброс основной логики игры
        resetMyCards();
        reloadEnemyCards();

        // Сброс всех состояний
        setGameStatus(null);
        setShowGameOver(false);
        setLife(3);
        setMyScore(0);
        setBonus(1);
        setRoundId(0);
        setResult(null);
        setMyCurrentCard('default');
        setCurrentEnemyCard('default');

        // Сброс коллекции сыгранных карт
        setPlayedCards([]);
    };


    return (
        <Fragment>
            <div className="game-container">
                {showGameOver && (
                    <div className="modal-overlay">
                        <div className="modal">
                            <div className="modalContent">
                                <h2>{gameStatus === 'won' ? 'Победа!' : 'Поражение'}</h2>
                                <div className="modalText">
                                    <p>{gameStatus === 'won' ? `Очков: ${myScore}` : 'Попробуйте еще раз!'}</p>
                                </div>
                                <button className="refreshButton" onClick={resetGame}>
                                    Новая игра
                                </button>
                            </div>
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

                <InfoButton />

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
                <PlayedCardsCollection
                    playedCards={playedCards} />
            </div>
            {/*  <Test/> */}
        </Fragment>
    )
}


export default GamePage;