const Tododata = (props) => {
    // console.log(props)
    // props là một object chứa các thuộc tính được truyền từ component cha

    //destructuring props
    const {name} = props;
    return (
        <div className="Todo-data">
            <div className="Todo-item">Name: {name}</div>
            <div className="Todo-item">Reactjs</div>
            <div className="Todo-item">Vuejs</div>
            <div className="Todo-item">Angular</div>
        </div>
    );
}

export default Tododata;