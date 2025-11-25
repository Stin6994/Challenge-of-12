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
        <div className='score-bar-main'>
            <div className='score-bar-container'>
                <div className={`score-display ${isNewRecord ? 'record-pulse' : ''}`}>
                    <span className="score-label">Рекорд:</span>
                    <span className="score-value">{highScore.toLocaleString()}</span>
                </div>
                <div className="tooltip-container-score">
                    <button className='neon-reset-btn' onClick={resetRecord}>
                        <span className="btn-icon">×</span>
                        <span className="btn-text">Сбросить</span>
                        <span className="btn-glow"></span>
                    </button>
                    <span className="tooltip-text-score"> Сбросить текущий рекорд </span>
                </div>
            </div>
        </div>
    );
}


export default ScoreBar;

