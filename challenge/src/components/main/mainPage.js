import './mainPage.css';
import img from '../../resources/img/backGround.jpg'
import GamePage from '../gamePage/gamePage';
import frame from '../../resources/img/neon3.png'

function NewGameScreen() {


     const newGame = () => {
        
      return (
     
             <img src={frame} alt="frame" />
     
         )
     }



/* const gg = <GamePage/>; */


/*     function newGame () {
        return(
        
            <GamePage/>
       
      )
    }  */

     /*  const gg = <GamePage/> */
/*       const View = () => {
          
          return (
              <GamePage/>
          );
      } */

 /*    const vv = <View/> */

    return (
     
/*         <div className='mainScreen'>
            <img className='mainPic' src={img} alt="main" />
            <button className="newGameBtn"
                    onClick={newGame}> try
            </button>

        </div > */

<button className="newGameBtn"
/* onClick={newGame} */> try
</button>



    );
}




export default NewGameScreen;