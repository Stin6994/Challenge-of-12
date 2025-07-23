import './scoreBar.css';
import { useEffect, useState } from 'react';


function ScoreBar({ gameStatus, myScore }) {
    const [highScore, setHighScore] = useState(0);
    const [isNewRecord, setIsNewRecord] = useState(false);

     // Загрузка рекорда
    useEffect(() => {
        const savedHighScore = localStorage.getItem('highScore') || 0;
        setHighScore(parseInt(savedHighScore));
    }, []);

    // Проверка рекорда
    useEffect(() => {
        if (gameStatus === 'won' && myScore > highScore) {
            setHighScore(myScore);
            localStorage.setItem('highScore', myScore.toString());
            setIsNewRecord(true);
            const timer = setTimeout(() => setIsNewRecord(false), 2000);
            return () => clearTimeout(timer);
        }
    }, [gameStatus, myScore]);

    function resetRecord() {
        localStorage.removeItem('highScore');
        setHighScore(0);
        setIsNewRecord(false);
    }

     return (
        <div className='testCont'>
            <span className={isNewRecord ? 'record-pulse' : ''}>
                Рекорд: {highScore.toLocaleString()} 
                {isNewRecord && ' 🎉'}
            </span>
            <button className='buttonTest' onClick={resetRecord}>
                Сбросить рекорд
            </button>
        </div>
    );
}


export default ScoreBar;

