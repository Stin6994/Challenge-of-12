import './mainPage.css';
import { Fragment } from 'react';
import img from '../../resources/img/backGround.jpg'

function NewGameScreen() {


 const newGame = () => {
  console.log("new game");
 }

return (
  <Fragment>
  <img className='Img'  src={img} alt="main" />
  <button onClick={newGame}>try</button>
  </Fragment>



);
}

export default NewGameScreen;