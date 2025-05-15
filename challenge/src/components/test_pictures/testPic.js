import { useState } from 'react';
import './testPic.css';
import myFrame from '../../resources/img/Frame.png';
import back from '../../resources/img/enemyFrame.jpg'
import playField from '../../resources/img/playField.png'


const Pici = () => {

    const [rockCount, setRockCount] = useState(4);
    const [scissorsCount, setScissorsCount] = useState(4);
    const [paperCount, setPaperCount] = useState(4);



    /*    function onChange(event) {
           event.preventDefault();
           setRockCount(event.target.value);
       } */



    function useRock(event) {
        event.preventDefault();
        if (Number(rockCount) > 0) {
            setRockCount((rockCount) => Number(rockCount) - 1);
        }

    }

    function useScissors(event) {
        event.preventDefault();
        if (Number(scissorsCount) > 0) {
            setScissorsCount((scissorsCount) => Number(scissorsCount) - 1);
        }
    }

    function usePaper(event) {
        event.preventDefault();
        if (Number(paperCount) > 0) {
            setPaperCount((paperCount) => Number(paperCount) - 1);
        }
    }



    return (

        <div className='myFieldPic'>
            <img src={playField}
                alt="playField"
                className='playField' />


            <div className='myField'>
                <div className='myRock Cont'>
                    <span
                        className='rockCounter'
                    /* onChange={onChange} */
                    >x{rockCount}</span>
                    <button className='myButton rock'
                        onClick={useRock}
                    ></button>
                </div>
                <div className='myScissors Cont'>
                    <span
                        className='scissorsCounter'
                    /* onChange={onChange} */
                    >x{scissorsCount}</span>
                    <button className='myButton scissors'
                        onClick={useScissors}
                    ></button>
                </div>
                <div className='myPaper Cont'>
                    <span className='paperCounter'>x{paperCount}</span>
                    <button className='myButton paper'
                        onClick={usePaper}
                    ></button>
                </div>

            </div >


        </div>



    )
}

export default Pici;