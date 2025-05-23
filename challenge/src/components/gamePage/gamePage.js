
import './gamePage.css';
import EnemyPlayField from '../enemyPlayField/enemyPlayField';
import { Fragment, useState } from 'react';
import MyPlayField from '../myPlayField/myPlayField';
import ScoreBar from '../scoreBar/scoreBar';
import ArrayEnemyCard from '../arrayEnemyCards/arrayEnemyCards';
import ReloadButton from '../reloadButton/reloadButton';


const GamePage = () => {

    const { reloadEnemyCards, array, enemyPlay } = ArrayEnemyCard();

    const initialCards = {
        rock: 4,
        scissors: 4,
        paper: 4
    };

    const [myCardsCount, setMyCardsCount] = useState(initialCards);

    const resetMyCards = () => {
        setMyCardsCount(initialCards);
    };


    return (
        <Fragment>

            <EnemyPlayField arr={array} />
            <ScoreBar />
            <MyPlayField enemyPlay={enemyPlay}
                myCardsCount={myCardsCount}
                setMyCardsCount={setMyCardsCount} />

            <ReloadButton reloadEnemyCards={reloadEnemyCards}
                reloadMyCards={resetMyCards} />

        </Fragment>
    )
}


export default GamePage;