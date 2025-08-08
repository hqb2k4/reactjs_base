import Tododata from "./component/todo/todo_data/Tododata"
import Todosearch from "./component/todo/todo_search/Todosearch"
import './component/todo/style.css'
import img from "./assets/react.svg"
import { useState } from "react";

const FullName = "Hoang Quoc Bao";
const Age = 21;
const data = {
  name: "Bao",
  age: 21,
  address: "Ha Noi"
}

const alertMessage = (name) => {
  console.log(`Hello ${name}, welcome to the Todo app!`);
}

const App = () => {
  // useState hook 
  const [todoList, setTodoList] = useState([
    { id: 1, text: "Learn React" },
    { id: 2, text: "Build a Todo App" },
    { id: 3, text: "Deploy the App" }
  ]);

  return (
    <div className="Todo-container">
      <div className="Todo-title">My Todo List</div>
      <Todosearch
        alertMessage={alertMessage}
      />
      <Tododata
        name={FullName}
        age={Age}
        data={data}
        todoList={todoList}
      />
      <div className="Todo-image">
        <img src={img} />
      </div>
    </div>
  )
}
export default App
