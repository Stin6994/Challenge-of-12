import { useState } from 'react';
import './myPlayField.css';
import playFieldImg from '../../resources/img/playField.png'
import ArrayEnemyCard from '../arrayEnemyCards/arrayEnemyCards';

const MyPlayField = () => {

    const {pushtest, array} = ArrayEnemyCard();

   console.log(array)

    const [rockCount, setRockCount] = useState(4);
    const [scissorsCount, setScissorsCount] = useState(4);
    const [paperCount, setPaperCount] = useState(4);
    const [arraytest, setArray] = useState(array);

   /*  console.log(arraytest) */




    /*    function onChange(event) {
           event.preventDefault();
           setRockCount(event.target.value);
       } */



    function useRock(event) {
        event.preventDefault();
        
        if (Number(rockCount) > 0) {
            setRockCount((rockCount) => Number(rockCount) - 1);
            setArray((arraytest) => pushtest());
            console.log(arraytest)
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

export default MyPlayField;