const Tododata = (props) => {
    // console.log(props)
    // props là một object chứa các thuộc tính được truyền từ component cha

    //destructuring props
    // const { name, todoList } = props;
    const {todoList, DeleteTodoList } = props;
    // console.log(todoList);

    // Delete Todo List
    const buttonOnClickDeleteTodoList = (id) => {
        // console.log("Delete button clicked!", id);
        DeleteTodoList(id);
    }
    return (
        <div className="Todo-data">
            <div>{
                todoList.map((value) => {
                    return (
                        <div className="Todo-item" key={value.id}>
                            <div>{value.name}</div>
                            <button onClick={() => buttonOnClickDeleteTodoList(value.id)}>DELETE</button>
                        </div>
                    );
                })
            }</div>
            {/* <div className="Todo-item">Name: {name}</div>
            <div className="Todo-item">{JSON.stringify(props.todoList)}</div> */}
        </div>
    );
}

export default Tododata;