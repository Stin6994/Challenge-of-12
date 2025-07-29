import './buySaleBar.css';
import { useEffect } from 'react';

function BuySaleBar({ myScore, setMyScore, result, setResult, bonus, setBonus, life, setLife, showGameOver }) {
    const getLifePrice = () => {
        return myScore <= 10000 ? 5000 : Math.floor(myScore / 2);
    };

    const lifePrice = getLifePrice();

    useEffect(() => {
        if (result === 'Победа' && !showGameOver) {
            setBonus(prev => {
                const newBonus = prev * 2;
                setMyScore(prevScore => prevScore + 1000 * prev);
                return newBonus;
            });
        } else if (result === 'Поражение') {
            setBonus(prev => Math.max(prev / 2, 1));
        }
    }, [result]);

    const sellLife = () => {
        setLife(prev => prev - 1);
        setMyScore(prev => prev + bonus * 1000);
        setBonus(prev => Math.max(prev / 2, 1));
    };

    const buyLife = () => {
        if (myScore >= lifePrice && life < 3) {
            setMyScore(prev => prev - lifePrice);
            setLife(prev => prev + 1);
            setBonus(prev => Math.max(prev / 2, 1));
        }
    };

    return (
        <div className='buy-sale-container'>
            <div className="score-display">
                <span className="neon-text">Очки: {myScore.toLocaleString()}</span>
            </div>
            
            <div className="score-display">
                <span className="neon-text">Множитель: Х{bonus}</span>
            </div>
            
            <button
                onClick={buyLife}
                disabled={life >= 3 || myScore < lifePrice}
                className="neon-button buy-button"
                title={
                    life >= 3
                        ? "Максимальное количество жизней (3)"
                        : myScore < lifePrice
                            ? `Не хватает очков (нужно ${lifePrice})`
                            : `Купить 1 жизнь за ${lifePrice} очков`
                }
            >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Купить за {lifePrice}
            </button>
            
            <button
                onClick={sellLife}
                disabled={life <= 1}
                className="neon-button sell-button"
                title={life <= 1 ? "Нельзя продать последнюю жизнь" : `Продать 1 жизнь за ${bonus * 1000} очков`}
            >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Продать за {bonus * 1000}
            </button>
        </div>
    );
}

export default BuySaleBar;