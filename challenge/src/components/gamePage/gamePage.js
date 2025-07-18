
import './gamePage.css';
import EnemyPlayField from '../enemyPlayField/enemyPlayField';
import { Fragment, useState} from 'react';
import MyPlayField from '../myPlayField/myPlayField';
import ScoreBar from '../scoreBar/scoreBar';
import ArrayEnemyCard from '../arrayEnemyCards/arrayEnemyCards';
import ReloadButton from '../reloadButton/reloadButton';
import ResultField from '../resultField/resultField';

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


    const resetMyCards = () => {
        setMyCardsCount(MyInitialCards);
        setMyCurrentCard('default');
        setDeck(createDeck);
        setCurrentEnemyCard('default');

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
                />

            <ReloadButton reloadEnemyCards={reloadEnemyCards}
                reloadMyCards={resetMyCards} />

            <ResultField myCurrentCard={myCurrentCard}
                createDeck={createDeck}
                currentEnemyCard={currentEnemyCard}
                drawRandomCard={drawRandomCard}
                result={result}
                setResult={setResult}
            />

        </Fragment>
    )
}


export default GamePage;