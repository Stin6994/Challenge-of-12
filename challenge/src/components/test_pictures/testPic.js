import { useState } from 'react';
import './testPic.css';


const Pici = () => {

    const [rockCount, setRockCount] = useState(4);




        function onChange(event) {
            event.preventDefault();
            setRockCount(event.target.value);
        }



        function minus (event) {
            event.preventDefault();
            setRockCount((rockCount) => Number(rockCount) - 1);
        }
    


    return (
        <div className='myField'>
            <div className='myRock Cont'>
                <span 
                className='rockCounter'
                onChange={onChange}
                >{rockCount}</span>
                <button className='myButton rock'
                onClick={minus}
                ></button>
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