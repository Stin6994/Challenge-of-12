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
            <div className='myCountersCont'>
                <span className='myCounters'>x4</span>
                <span className='myCounters'>x4</span>
                <span className='myCounters'>x4</span>
            </div>
            <div className='myButtonsCont'>
                <button className='myButton rock'>rock</button>
                <button className='myButton scissors'>scissors</button>
                <button className='myButton paper'>paper</button>
            </div>
        </div>
    )
}

export default Pici;