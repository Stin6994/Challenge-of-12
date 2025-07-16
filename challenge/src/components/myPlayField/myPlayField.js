
import './myPlayField.css';
import playFieldImg from '../../resources/img/playField.png'


const MyPlayField = ({ myCardsCount, setMyCardsCount, enemyPlay, setMyCurrentCard, myCurrentCard, drawRandomCard }) => {

    function play(cardType) {
        if (myCardsCount[cardType] > 0) {
            setMyCardsCount(prev => ({
                ...prev,
                [cardType]: prev[cardType] - 1  // Корректное уменьшение значения
                
            }));
            setMyCurrentCard (myCurrentCard = cardType);
            console.log(myCurrentCard)
            enemyPlay();
            drawRandomCard();

        }
    }





    return (

        <div className='myFieldAll'>
            <img src={playFieldImg}
                alt="playFieldImg"
                className='playFieldImg' />
            <div className='myFieldContent'>
                {['rock', 'scissors', 'paper'].map(cardType => (
                    <div key={cardType} className={`my${cardType} Cont`}>
                        <span className={`${cardType}Counter`}>x{myCardsCount[cardType]}</span>
                        <button
                            className={`myButton ${cardType}`}
                            onClick={(e) => {
                                e.preventDefault();
                                play(cardType);
                            }}
                        ></button>
                    </div>
                ))}
            </div >
        </div>
    )
}

export default MyPlayField;