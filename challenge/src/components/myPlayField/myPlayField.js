import { useState } from 'react';
import './myPlayField.css';
import playFieldImg from '../../resources/img/playField.png'


const MyPlayField = ({ testbutton }) => {

    const [rockCount, setRockCount] = useState(4);
    const [scissorsCount, setScissorsCount] = useState(4);
    const [paperCount, setPaperCount] = useState(4);




    /* function useRock(event) {
        event.preventDefault();
        if (Number(rockCount) > 0) {
            setRockCount((rockCount) => Number(rockCount) - 1);
            testbutton();
        }
    } */

    function myButton(button, setButton) {
        /* event.preventDefault(); */
        if (Number(button) > 0) {
            setButton((button) => Number(button) - 1);
            testbutton();
        }
    }


    /* function useScissors(event) {
        event.preventDefault();
        if (Number(scissorsCount) > 0) {
            setScissorsCount((scissorsCount) => Number(scissorsCount) - 1);
            testbutton();
        }
    }

    function usePaper(event) {
        event.preventDefault();
        if (Number(paperCount) > 0) {
            setPaperCount((paperCount) => Number(paperCount) - 1);
            testbutton();
        }
    }
 */


    return (

        <div className='myFieldAll'>
            <img src={playFieldImg}
                alt="playFieldImg"
                className='playFieldImg' />


            <div className='myFieldContent'>
                <div className='myRock Cont'>
                    <span
                        className='rockCounter'
                    /* onChange={onChange} */
                    >x{rockCount}</span>
                    <button className='myButton rock'
                        onClick={(e) => {e.preventDefault();
                            myButton(rockCount, setRockCount)}}
                    ></button>
                </div>
                <div className='myScissors Cont'>
                    <span
                        className='scissorsCounter'
                    /* onChange={onChange} */
                    >x{scissorsCount}</span>
                    <button className='myButton scissors'
                        onClick={(e) => {e.preventDefault();
                            myButton(scissorsCount, setScissorsCount)}}
                    ></button>
                </div>
                <div className='myPaper Cont'>
                    <span className='paperCounter'>x{paperCount}</span>
                    <button className='myButton paper'
                        onClick={(e) => {e.preventDefault();
                            myButton(paperCount, setPaperCount)}}
                    ></button>
                </div>

            </div >


        </div>



    )
}

export default MyPlayField;