import { Fragment, useState } from 'react';


function useInputWithValidate(initialValue) {
    const [value, setValue] = useState(initialValue);

    const onChange = event => {
        setValue(event.target.value);
    }

    const plus = event =>  {
        event.preventDefault();
        setValue(event.target.value++);
        /* area.value++; */
        /* console.log(input.value, area.value); */
    }

    return { value, onChange, plus }  // равнозначно {value: value, onChange: onChange}
}

const FormMyHooks = () => {


    const input = useInputWithValidate('');
    const area = useInputWithValidate(2);

    

    return (
        <Fragment>
            <form className="w-50 border mt-5 p-3 m-auto">
                <div className="mb-3">
                    <input value={`${input.value} / ${area.value}`} type="text" className="form-control" readOnly />
                    <label className="form-label mt-3">Email address</label>
                    <input
                        onChange={input.onChange}
                        /* type="email" */
                        value={input.value}
                        placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea
                        onChange={area.onChange}
                        value={area.value}
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"></textarea>
                </div>
                <div>
                    <button
                        onClick={input.plus}
                        >plus
                        
                    </button>
                </div>
            </form>
        </Fragment>
    )
}

export default FormMyHooks;