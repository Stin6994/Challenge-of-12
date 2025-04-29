import { useState } from 'react';
import './testPic.css';


const Pici = () => {

    /* const [value, setValue] = useState(5); */




    /*     function onChange(event) {
            event.preventDefault();
            setValue(event.target.value);
        } */



    /*     function plus (event) {
            event.preventDefault();
            setValue((value) => Number(value) + 1);
        }
     */


    return (
        <div className='myField'>
            <div className='myRock Cont'>
                <span className='rockCounter'>x4</span>
                <button className='myButton rock'></button>
            </div>
            <div className='myScissors Cont'>
                <span className='scissorsCounter'>x4</span>
                <button className='myButton scissors'>scissors</button>
            </div>
            <div className='myPaper Cont'>
                <span className='paperCounter'>x4</span>
                <button className='myButton paper'>paper</button>
            </div>

        </div >
    )
}

export default Pici;