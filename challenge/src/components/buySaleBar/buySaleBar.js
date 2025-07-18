import './buySaleBar.css';
import { useEffect, useCallback } from 'react';

function BuySaleBar({myScore, setMyScore, result, setResult, bonus, setBonus}) {



useEffect(() => {
    if (result === 'Победа') {
        setBonus(prev => {
            const newBonus = prev * 2;
            setMyScore(prevScore => prevScore + 1000 * prev);
            return newBonus;
        });
    }
}, [result]); // bonus убран из зависимостей




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
                <span
                    style={{ fontSize: "1vw" }}> Продать за
                </span>
            </div>
        </div>
    )
}

export default BuySaleBar;