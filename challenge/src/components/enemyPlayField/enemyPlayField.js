
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
