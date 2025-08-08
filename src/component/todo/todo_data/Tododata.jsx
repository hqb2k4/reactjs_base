const Tododata = (props) => {
    // console.log(props)
    // props là một object chứa các thuộc tính được truyền từ component cha

    //destructuring props
    // const { name, todoList } = props;
    const {todoList} = props;
    console.log(todoList);
    return (
        <div className="Todo-data">
            <div>{
                todoList.map((value) => {
                    return (
                        <div className="Todo-item" key={value.id}>
                            <div>{value.name}</div>
                            <button>DELETE</button>
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