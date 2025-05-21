
import './App.css';
import EnemyPlayField from '../enemyPlayField/enemyPlayField';
/* import GamePage from '../gamePage/gamePage'; */
/* import FormMyHooks from '../test_counter/test'; */
import { Fragment } from 'react';
import MyPlayField from '../myPlayField/myPlayField';
import ScoreBar from '../scoreBar/scoreBar';
import ArrayEnemyCard from '../arrayEnemyCards/arrayEnemyCards';


function App() {

    const {pushtest} = ArrayEnemyCard();


    return (
        <Fragment>

            <EnemyPlayField />
            <ScoreBar/>
            <MyPlayField test={pushtest}/>


        </Fragment>



    );
}

export default App;
