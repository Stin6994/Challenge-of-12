

function ReloadButton ({reloadEnemyCards, reloadMyCards})  {

    function backToStart() {
            reloadEnemyCards();
            reloadMyCards();
    }


    return (
        <button className='buttonTest'
            onClick={backToStart}
        > refresh
        </button>)
}

export default ReloadButton;