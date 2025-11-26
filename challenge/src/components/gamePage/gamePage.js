import './gamePage.css';
import EnemyPlayField from '../enemyPlayField/enemyPlayField';
import { useState, useEffect } from 'react';
import MyPlayField from '../myPlayField/myPlayField';
import ScoreBar from '../scoreBar/scoreBar';
import ArrayEnemyCard from '../arrayEnemyCards/arrayEnemyCards';
import ReloadButton from '../reloadButton/reloadButton';
import ResultField from '../resultField/resultField';
import BuySaleBar from '../buySaleBar/buySaleBar';
import PlayedCardsCollection from '../cardCollection/cardCollection';
import InfoButton from '../infoButton/infoButton';
import AdButton from '../adModalButton/adButton';
import AdMainButton from '../adMainButton/adMainButton';
import useYandexSDK from '../../hooks/useYandexSDK'; // Добавляем хук SDK
import LeaderboardButton from '../leaderboardButton/leaderboardButton';
import LeaderboardModal from '../leaderboardModal/LeaderboardModal'
import useLeaderboard from '../../hooks/useLeaderboard';

const GamePage = () => {
    const { ysdk, isLoading: sdkLoading, playerName } = useYandexSDK(); // Получаем готовое имя
    const [showWelcomeModal, setShowWelcomeModal] = useState(false);

    const { reloadEnemyCards, array, enemyPlay, createDeck, currentEnemyCard,
        setCurrentEnemyCard, drawRandomCard, setDeck } = ArrayEnemyCard();

    // Инициализируем хук лидерборда
    const { submitScore, getLeaderboard, playerRank, isLoading: leaderboardLoading } = useLeaderboard(ysdk);

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
    const [gameStatus, setGameStatus] = useState(null);
    const [showGameOver, setShowGameOver] = useState(false);
    const [playedCards, setPlayedCards] = useState([]);
    const [isAdUsed, setIsAdUsed] = useState(false);
    const [isAdBlocking, setIsAdBlocking] = useState(false);

    // Новые состояния для лидерборда
    const [showLeaderboard, setShowLeaderboard] = useState(false);
    const [leaderboardData, setLeaderboardData] = useState(null);
    const [newRecordRank, setNewRecordRank] = useState(null); // Для отображения нового рекорда

    // Эффект для показа приветственного модального окна при первом запуске
    useEffect(() => {
        // Проверяем, было ли уже показано приветственное окно в этой сессии
        const welcomeShown = sessionStorage.getItem('welcomeShown');

        if (!welcomeShown && !sdkLoading) {
            setShowWelcomeModal(true);
            sessionStorage.setItem('welcomeShown', 'true');
        }
    }, [sdkLoading]);

    // Функция открытия лидерборда
    const handleOpenLeaderboard = async () => {
        const data = await getLeaderboard();
        setLeaderboardData(data);
        setShowLeaderboard(true);
    };

    // Функция закрытия лидерборда
    const handleCloseLeaderboard = () => {
        setShowLeaderboard(false);
    };

    // При победе отправляем результат и получаем ранг
    useEffect(() => {
        if (gameStatus === 'won' && myScore > 0) {
            const submitResult = async () => {
                const result = await submitScore(myScore);
                if (result.success && result.rank) {
                    setNewRecordRank(result.rank);
                }
            };
            submitResult();
        }
    }, [gameStatus, myScore, submitScore]);



    useEffect(() => {
        const gameFinished = life <= 0 ||
            (myCardsCount.rock === 0 &&
                myCardsCount.paper === 0 &&
                myCardsCount.scissors === 0);

        if (gameFinished) {
            const timer = setTimeout(() => {
                setGameStatus(life <= 0 ? 'lost' : 'won');
                setShowGameOver(true);
            }, 100);

            return () => clearTimeout(timer);
        }
    }, [life, myCardsCount]);

    useEffect(() => {
        if (myCurrentCard !== 'default' && currentEnemyCard) {
            setPlayedCards(prev => [
                ...prev,
                {
                    type: myCurrentCard,
                    isPlayer: true,
                    roundId: roundId
                },
                {
                    type: currentEnemyCard,
                    isPlayer: false,
                    roundId: roundId
                }
            ]);
        }
    }, [myCurrentCard, currentEnemyCard, roundId]);

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
        resetMyCards();
        reloadEnemyCards();
        setGameStatus(null);
        setShowGameOver(false);
        setLife(3);
        setMyScore(0);
        setBonus(1);
        setRoundId(0);
        setResult(null);
        setMyCurrentCard('default');
        setCurrentEnemyCard('default');
        setPlayedCards([]);
        setIsAdUsed(false); // Сбрасываем состояние использования рекламы
    };

    const handleStartGame = () => {
        setShowWelcomeModal(false);
    };

    return (
        <div className="game-container">
            {/* Блокирующий оверлей поверх всего игрового поля */}
            {isAdBlocking && (
                <div className="ad-blocking-overlay">
                    <div className="ad-blocking-message">
                        <div className="ad-spinner"></div>
                        <p>Реклама...</p>
                    </div>
                </div>
            )}
            {/* Приветственное модальное окно */}
            {showWelcomeModal && (
                <div className="modal-overlay">
                    <div className="modal welcome-modal">
                        <div className="modalContent">
                            <h2>Добро пожаловать в игру!</h2>
                            <div className="modalText">
                                <p>Привет, <span className="player-name">{playerName}</span>! 🎮</p>
                                <p>Готовы к увлекательному испытанию?</p>
                                <div className="welcome-features">
                                    <div className="feature-item">
                                        <span className="feature-icon">⚔️</span>
                                        <span>Сражайтесь с противником</span>
                                    </div>
                                    <div className="feature-item">
                                        <span className="feature-icon">💖</span>
                                        <span>Управляйте своими жизнями</span>
                                    </div>
                                    <div className="feature-item">
                                        <span className="feature-icon">🎬</span>
                                        <span>Получайте бонусы за рекламу</span>
                                    </div>
                                </div>
                            </div>
                            <button className="refreshButton start-game-btn" onClick={handleStartGame}>
                                Начать игру
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Модальное окно лидерборда */}
            {showLeaderboard && (
                <LeaderboardModal
                    onClose={handleCloseLeaderboard}
                    leaderboardData={leaderboardData}
                    playerName={playerName}
                    playerRank={playerRank}
                />
            )}

            {/* Обновленное модальное окно окончания игры */}
            {showGameOver && (
                <div className="modal-overlay">
                    <div className="modal">
                        <div className="modalContent">
                            <h2>{gameStatus === 'won' ? 'Победа!' : 'Поражение'}</h2>
                            <div className="modalText">
                                <p>{gameStatus === 'won' ? `Очков: ${myScore.toLocaleString()}` : 'Попробуйте еще раз!'}</p>

                                {/* Отображаем информацию о новом рекорде */}
                                {gameStatus === 'won' && newRecordRank && (
                                    <div className="new-record-info">
                                        <p>🎉 Новый рекорд!</p>
                                        <p>Ваше место в таблице лидеров: <span className="record-rank">#{newRecordRank}</span></p>
                                    </div>
                                )}
                            </div>
                            <AdButton
                                setShowGameOver={setShowGameOver}
                                setLife={setLife}
                                roundId={roundId}
                            />
                            <button className="refreshButton" onClick={resetGame}>
                                Новая игра
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Остальной JSX без изменений */}
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
                roundId={roundId}
            />

            <ReloadButton
                resetGame={resetGame} />

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

            <AdMainButton
                life={life}
                setLife={setLife}
                isAdUsed={isAdUsed}
                setIsAdUsed={setIsAdUsed}
                setIsAdBlocking={setIsAdBlocking}
            />

            <LeaderboardButton onShowLeaderboard={handleOpenLeaderboard} />

        </div>
    )
}

export default GamePage;