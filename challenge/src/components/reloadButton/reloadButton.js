
import {  useState } from 'react';

function ReloadButton ({refresh, countCards})  {

    const {rock, scissors, paper} = countCards;


    function backToStart() {
        console.log(countCards)
        refresh();
        console.log(countCards)
      /*   rock = 4;
        scissors = 4;
        paper = 4; */
    }


    return (
        <button className='buttonTest'
            onClick={backToStart}
        > refresh
        </button>)
}

export default ReloadButton;