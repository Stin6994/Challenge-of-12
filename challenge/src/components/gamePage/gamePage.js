
import './gamePage.css';
import EnemyPlayField from '../enemyPlayField/enemyPlayField';
import { Fragment, useState } from 'react';
import MyPlayField from '../myPlayField/myPlayField';
import ScoreBar from '../scoreBar/scoreBar';
import ArrayEnemyCard from '../arrayEnemyCards/arrayEnemyCards';
import ReloadButton from '../reloadButton/reloadButton';



const GamePage = () => {

const {refresh, pushtest, array} = ArrayEnemyCard();

const myCardsCount = {
    rock: 4,
    scissors: 4,
    paper: 4
}

/* const [myCards, setMyCards] = useState(myCardsCount); */


console.log(myCardsCount);


    return (
        <Fragment>

            <EnemyPlayField testbutton={pushtest} arr={array} />
            <ScoreBar/>
            <MyPlayField testbutton={pushtest}/>
            <ReloadButton refresh={refresh} countCards={myCardsCount}/>

        </Fragment>
    )
}

export default GamePage;