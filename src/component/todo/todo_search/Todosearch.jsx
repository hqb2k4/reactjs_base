import { useState } from "react";


const Todosearch = (props) => {
    const { AddTodoList} = props;

    // Add New Todo List
    const buttonOnClickAddTodoList = () => {
        // console.log("Button clicked!", valueInput);
        AddTodoList(valueInput);
        setValueInput("");
    }

    const inputOnChange = (event) => {
        // console.log("Input changed!", event);
        setValueInput(event);
    }

    //useState hook to manage input value
    const [valueInput, setValueInput] = useState("  ");
    return (
        <div className="Todo-search">
            <input type="text"
                onChange={(event) => inputOnChange(event.target.value)}
                value={valueInput}
            />
            <button onClick={buttonOnClickAddTodoList}>Add Todo</button>
            <div>{`My input ${valueInput}`}</div>
        </div>
    );
}

export default Todosearch;