/* 
import './enemyPlayField.css';
import enemyFieldImg from '../../resources/img/playField.png';


function EnemyPlayField({ arr }) {

    return (

        <div className='enemyFieldAll'>
            <img src={enemyFieldImg}
                className='enemyFieldImg'
                alt="enemyPlayField" />


            <div className="enemyFieldContent">
                {arr.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        className='enemyCard'
                        alt="enemyCard"
                    />
                ))}
            </div>
        </div>

    );
}


export default EnemyPlayField;
 */

import './enemyPlayField.css';
import enemyCardImg from '../../resources/img/enemyCard.png';
import emptyImg from '../../resources/img/neon3.png';

const EnemyPlayField = ({ arr }) => {
    return (
        <div className="enemy-cards-container">
            <div className="enemy-cards-grid">
                {arr.map((card, index) => (
                    <div key={index} className="enemy-card-slot">
                        {card === emptyImg ? (
                            <div className="empty-card">
                                <img src={emptyImg} alt="empty" />
                            </div>
                        ) : (
                            <div className="enemy-card">
                                <img src={enemyCardImg} alt="card back" />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>

    );
};

export default EnemyPlayField;