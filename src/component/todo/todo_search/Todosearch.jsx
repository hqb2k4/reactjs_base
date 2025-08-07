const Todosearch = (props) => {
    const {alertMessage} = props;
    alertMessage("Bảo"); 
    return (
        <div className="Todo-search">
            <input type="text" />
            <button>Add Todo</button>
        </div>
    );
}

export default Todosearch;