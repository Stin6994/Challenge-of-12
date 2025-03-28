import './mainPage.css';
/* import { Fragment } from 'react'; */
import img from '../../resources/img/backGround.jpg'

function NewGameScreen() {


 const newGame = () => {
  console.log("new game");
 }

return (
<div className='mainScreen'>
<img className='mainPic'  src={img} alt="main" />
<button className="newGameBtn" onClick={newGame}>try</button>
</div>





);
}

export default NewGameScreen;