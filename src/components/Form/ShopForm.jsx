import {useState} from "react";
import "./Form.css";

export default function ShopForm()
{
    const [inputName, setInputName] = useState("");
    const [inputDesc, setInputDesc] = useState("");
    const [inputError, setInputError] = useState(null);

    function onSubmit()
    {

    }

    function onInputChange(event)
    {
        const value = event.target.value;
        const name = event.target.id;

        setInputName(value);

        if(value.length <= 0)
        {
            setInputError(name + " cannot be empty.");
        }
        else
        {
            setInputError(null);
        }
    }

    return (
        
        <div className="form">
            <h1>New Shop</h1>
            <form onSubmit={onSubmit}>
                <div class="row">
                <input type="text" className="input" id="Name" value={inputName} placeholder="Name" onChange={onInputChange}></input>
                </div>
            {inputError && <div className="input_error">{inputError}</div>}
            <div class="row">
            <input type="text" className="input" id="Description" value={inputDesc} placeholder="Description" onChange={onInputChange}></input>
            </div>
            {inputError && <div className="input_error">{inputError}</div>}
            <div class="row" className="button_row">
            <button type="submit" className="submit_button">SUBMIT</button>
            <button type="button" className="cancel_button">CANCEL</button>
            </div>
            </form>
        </div>
        
    );
}