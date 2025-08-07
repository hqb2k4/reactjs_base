const Todosearch = (props) => {
    const { alertMessage } = props;
    alertMessage("Bảo");

    const buttonoOnClick = () => {
        console.log("Button clicked!");
    }

    const inputOnChange = (event) => {
        console.log("Input changed!",event);
    }

    return (
        <div className="Todo-search">
            <input type="text" onChange={(event) => inputOnChange(event.target.value)} />
            <button onClick={buttonoOnClick}>Add Todo</button>
        </div>
    );
}

export default Todosearch;