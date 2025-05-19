import './enemyPlayField.css';
import enemyFieldImg from '../../resources/img/playField.png';
import enemyCard from '../../resources/img/enemyCard.png'



function EnemyPlayField() {

    return (

        <div className='enemyFieldAll'>
            <img src={enemyFieldImg}
                className='enemyFieldImg'
                alt="enemyPlayField" />

            <div className="enemyFieldContent">
                <img src={enemyCard}
                    className='enemyCard'
                    alt="enemyCard" />
            </div>

        </div>






    );
}




export default EnemyPlayField;