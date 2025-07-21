
import './gamePage.css';
import EnemyPlayField from '../enemyPlayField/enemyPlayField';
import { Fragment, useState } from 'react';
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



    const resetMyCards = () => {
        setMyCardsCount(MyInitialCards);
        setMyCurrentCard('default');
        setDeck(createDeck);
        setCurrentEnemyCard('default');
        setLife(3);
        setMyScore(0);
        setBonus(1)
    };


    return (
        <Fragment>

            <EnemyPlayField arr={array} />
            <ScoreBar />

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
            />
        </Fragment>
    )
}


export default GamePage;