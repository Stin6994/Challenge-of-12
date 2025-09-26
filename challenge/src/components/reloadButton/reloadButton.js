import './reloadButton.css'

function ReloadButton({ reloadEnemyCards, reloadMyCards }) {

  function backToStart() {
    reloadEnemyCards();
    reloadMyCards();
  }


  return (
    <div className='resfresh_butt_cont'>
      <button className="neon-refresh-btn" onClick={backToStart}>
        <span className="neon-icon">↻</span>
        <span className="neon-text">Restart</span>
        <span className="neon-glow"></span>
      </button>
    </div>
  );

}

export default ReloadButton;