import './scoreBar.css';
import { useEffect, useState } from 'react';

function ScoreBar({ gameStatus, myScore }) {
    const [highScore, setHighScore] = useState(0);
    const [isNewRecord, setIsNewRecord] = useState(false);
    const [showResetModal, setShowResetModal] = useState(false);

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
    }, [gameStatus, myScore, highScore]);

    function resetRecord() {
        localStorage.removeItem('highScore');
        setHighScore(0);
        setIsNewRecord(false);
        setShowResetModal(false);
    }

    function openResetModal() {
        setShowResetModal(true);
    }

    function closeResetModal() {
        setShowResetModal(false);
    }

    return (
        <>
            <div className='score-bar-main'>
                <div className='score-bar-container'>
                    <div className={`score-display ${isNewRecord ? 'record-pulse' : ''}`}>
                        <span className="score-label">Рекорд:</span>
                        <span className="score-value">{highScore.toLocaleString()}</span>
                    </div>
                    <div className="tooltip-container-score">
                        <button className='neon-reset-btn' onClick={openResetModal}>
                            <span className="btn-icon">×</span>
                            <span className="btn-text">Сбросить</span>
                            <span className="btn-glow"></span>
                        </button>
                        <span className="tooltip-text-score"> Сбросить текущий рекорд </span>
                    </div>
                </div>
            </div>

            {/* Модальное окно подтверждения сброса рекорда */}
            {showResetModal && (
                <div className="reset-modal-overlay">
                    <div className="reset-modal">
                        <div className="reset-modal-content">
                            <h2>Сброс рекорда</h2>
                            <div className="reset-modal-text">
                                <p>Вы уверены, что хотите сбросить рекорд?</p>
                                <p>Это действие нельзя отменить.</p>
                            </div>
                            <div className="reset-modal-actions">
                                <button className="reset-confirm-btn" onClick={resetRecord}>
                                    Сбросить
                                </button>
                                <button className="reset-cancel-btn" onClick={closeResetModal}>
                                    Вернуться
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ScoreBar;