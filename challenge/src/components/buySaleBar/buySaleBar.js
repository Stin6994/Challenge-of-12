import './buySaleBar.css';
import { useEffect, useCallback } from 'react';

function BuySaleBar({ myScore, setMyScore, result, setResult, bonus, setBonus, life, setLife }) {



    useEffect(() => {
        if (result === 'Победа') {
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

    const sellLife = () => {
        setLife(prev => prev - 1);
        setMyScore(prev => prev + bonus * 1000);
        setBonus(prev => Math.max(prev / 2, 1));
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
                <span
                    style={{ fontSize: "1vw" }}> Купить за
                </span>
            </div>
            <div>
                <button
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
                </button>
            </div>
        </div>
    )
}

export default BuySaleBar;