import { useState } from "react";


const Todosearch = (props) => {
    const { alertMessage } = props;
    alertMessage("Bảo");

    const buttonoOnClick = () => {
        console.log("Button clicked!", valueInput);
    }

    const inputOnChange = (event) => {
        console.log("Input changed!",event);
        setValueInput(event);
    }

    //useState hook to manage input value
    const [valueInput, setValueInput] = useState("Bảo");
    return (
        <div className="Todo-search">
            <input type="text" onChange={(event) => inputOnChange(event.target.value)} />
            <button onClick={buttonoOnClick}>Add Todo</button>
            <div>{`My input ${valueInput}`}</div>
        </div>
    );
}

export default Todosearch;