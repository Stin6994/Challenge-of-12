import './reloadButton.css'

function ReloadButton ({reloadEnemyCards, reloadMyCards})  {

    function backToStart() {
            reloadEnemyCards();
            reloadMyCards();
    }


    return (
    <button className="neon-refresh-btn" onClick={backToStart}>
      <span className="neon-icon">↻</span>
      <span className="neon-text">Restart</span>
      <span className="neon-glow"></span>
    </button>
  );
}

export default ReloadButton;