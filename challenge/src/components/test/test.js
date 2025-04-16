import { Fragment, useState, useEffect } from 'react';


/* function useInputWithValidate(initialValue) {
    const [value, setValue] = useState(initialValue);

    const onChange = event => {
          event.preventDefault();
        setValue(event.target.value);
    }

    const plus = event => {
        event.preventDefault();
  
        console.log(event.target.value);
        setValue(event.target.value++);
        console.log(event.target.value);
    }

    return { value, onChange, plus }  
}
 */


const FormMyHooks = () => {

    const [value, setValue] = useState(5);




    function onChange(event) {
        event.preventDefault();
        setValue(event.target.value);
    }

/*     useEffect(() => {
        
      }); */

/*       function plus (event) {
        event.preventDefault();
        setValue((value) => value + 1);
    } */

    function plus (event) {
        event.preventDefault();
        setValue((value) => Number(value) + 1);
    }


    /* const area = useInputWithValidate(''); */

    return (
        <div>
            <form className="w-50 border mt-5 p-3 m-auto">
                <div className="mb-3">
                    <input value={value * 2} readOnly />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <input
                        onChange={onChange}
                        value={value}
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        type="number">
                            
                        </input>
                </div>
                <div>
                    <button
                        onClick={plus}
                    >plus
                    </button>
                </div>
            </form>
        </div>
    )
}

export default FormMyHooks;