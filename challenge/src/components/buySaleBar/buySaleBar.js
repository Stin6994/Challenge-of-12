import './buySaleBar.css';
import { useEffect, useCallback } from 'react';

function BuySaleBar({ myScore, setMyScore, result, setResult, bonus, setBonus, life, setLife, showGameOver }) {

    // Рассчитываем стоимость покупки жизни
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
            setBonus(prev => {
                const newBonus = Math.max(prev / 2, 1); // Уменьшаем вдвое, но не меньше 1
                return newBonus;
            });
        }

    }, [result]); // Теперь эффект будет срабатывать при каждом изменении result

    // Функция продажи жизни
    const sellLife = () => {
        setLife(prev => prev - 1);
        setMyScore(prev => prev + bonus * 1000);
        setBonus(prev => Math.max(prev / 2, 1));
    };


    // Функция покупки жизни
    const buyLife = () => {
        if (myScore >= lifePrice && life < 3) {
            setMyScore(prev => prev - lifePrice);
            setLife(prev => prev + 1);
            setBonus(prev => Math.max(prev / 2, 1));
        }
    };

    return (
        <div className='Contmytest'>
            <div>
                <span
                    style={{ fontSize: "1vw" }}> Очки: {myScore}
                </span>
            </div>
            <div>
                <span
                    style={{ fontSize: "1vw" }}> Множитель Х{bonus}
                </span>
            </div>
            <div>
                <button
                    onClick={buyLife}
                    disabled={life >= 3 || myScore < lifePrice}
                    style={{
                        fontSize: "1vw",
                        background: 'none',
                        border: 'none',
                        color: (life >= 3 || myScore < lifePrice) ? '#888' : 'white',
                        cursor: (life >= 3 || myScore < lifePrice) ? 'not-allowed' : 'pointer',
                        padding: 0,
                        textDecoration: 'underline'
                    }}
                    title={
                        life >= 3
                            ? "Нельзя купить - максимальное количество жизней (3)"
                            : myScore < lifePrice
                                ? `Не хватает очков (нужно ${lifePrice})`
                                : `Купить 1 жизнь за ${lifePrice} очков`
                    }

                >
                    Купить за {lifePrice}
                </button>
            </div>
            <div>
                {/* <button
                    onClick={sellLife}
                    disabled={life <= 1}
                    style={{
                        fontSize: "1vw",
                        background: 'none',
                        border: 'none',
                        color: life <= 1 ? '#888' : 'white',
                        cursor: life <= 1 ? 'not-allowed' : 'pointer',
                        padding: 0,
                        textDecoration: 'underline'
                    }}
                    title={life <= 1 ? "Нельзя продать последнюю жизнь" : ""}
                >
                    Продать за {bonus * 1000}
                </button> */}
                <button
                    onClick={sellLife}
                    disabled={life <= 1}
                    className="neon-button"
                    title={
                        life <= 1
                            ? "Нельзя продать - минимальное количество жизней (1)"
                            : `Продать 1 жизнь за ${bonus * 1000} очков`
                    }
                >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Продать за {bonus * 1000}
                </button>

            </div>
        </div>
    )
}





export default BuySaleBar;