import './leaderboardModal.css';

function LeaderboardModal({ onClose, leaderboardData, playerName, playerRank }) {
  if (!leaderboardData) return null;

  return (
    <div className="modal-overlay">
      <div className="modal leaderboard-modal">
        <div className="modalContent">
          <h2>🏆 Таблица лидеров</h2>
          
          <div className="leaderboard-list">
            <div className="leaderboard-header">
              <span>Место</span>
              <span>Игрок</span>
              <span>Очки</span>
            </div>
            
            {leaderboardData.entries && leaderboardData.entries.map((entry, index) => (
              <div 
                key={entry.uniqueID || index}
                className={`leaderboard-item ${entry.rank === playerRank ? 'current-player' : ''}`}
              >
                <span className="leaderboard-rank">#{entry.rank}</span>
                <span className="leaderboard-name">
                  {entry.name || 'Аноним'}
                  {entry.rank === playerRank && ' (Вы)'}
                </span>
                <span className="leaderboard-score">{entry.score?.toLocaleString() || 0}</span>
              </div>
            ))}
          </div>

          {playerRank && (
            <div className="player-rank-info">
              <p>Ваше место: <span className="rank-number">#{playerRank}</span></p>
            </div>
          )}

          <button className="refreshButton" onClick={onClose}>
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
}

export default LeaderboardModal;