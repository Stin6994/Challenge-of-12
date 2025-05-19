
import './App.css';
import EnemyPlayField from '../enemyPlayField/enemyPlayField';
/* import GamePage from '../gamePage/gamePage'; */
/* import FormMyHooks from '../test_counter/test'; */
import { Fragment } from 'react';
import MyPlayField from '../myPlayField/myPlayField';
import ScoreBar from '../scoreBar/scoreBar';


function App() {



    return (
        <Fragment>

            <EnemyPlayField />
            <ScoreBar/>
            <MyPlayField />


        </Fragment>



    );
}

export default App;
