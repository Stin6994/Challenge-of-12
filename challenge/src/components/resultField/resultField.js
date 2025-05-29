import enemyPlayField from '../../resources/img/playFieldVertical.png'
import myPlayField from '../../resources/img/playFieldVertical.png'
import './resultField.css'

const ResultField = () => {
    return (
        <div className="mainCont">
            <div className="playField">
                <img src={enemyPlayField} alt="enemyPlayCard" />
            </div>
            <div>
                <span className="resultText">Тут будет результат</span>
            </div>
            <div className="playField">
                <img src={myPlayField} alt="enemyPlayCard" />
            </div>

        </div>
    );
}

export default ResultField;