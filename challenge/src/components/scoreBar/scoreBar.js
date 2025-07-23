import './scoreBar.css';
import { useEffect, useState } from 'react';


function ScoreBar({ myScore, result}) {
    const [highScore, setHighScore] = useState(0);
    const [isNewRecord, setIsNewRecord] = useState(false);

    // Загружаем рекорд при монтировании
    useEffect(() => {
        const savedHighScore = localStorage.getItem('highScore');
        if (savedHighScore) {
            setHighScore(parseInt(savedHighScore));
        }
    }, []);

// Обновляем рекорд только при победе
    useEffect(() => {
        if (result === 'Победа' && myScore > highScore) {
            setHighScore(myScore);
            localStorage.setItem('highScore', myScore.toString());
            setIsNewRecord(true);
            const timer = setTimeout(() => setIsNewRecord(false), 2000);
            return () => clearTimeout(timer);
        }
    }, [result, myScore]);

    function resetRecord() {
        localStorage.removeItem('highScore');
        setHighScore(0);
        setIsNewRecord(false);
    }

     return (
        <div className='testCont'>
            <span className={isNewRecord ? 'pulse-animation' : ''}>
                Рекорд: {highScore.toLocaleString()} {isNewRecord && '🔥'}
            </span>
            <button className='buttonTest' onClick={resetRecord}>
                Сбросить рекорд
            </button>
        </div>
    );
}


export default ScoreBar;

