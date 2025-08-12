import Tododata from "./component/todo/todo_data/Tododata"
import Todosearch from "./component/todo/todo_search/Todosearch"
import './component/todo/style.css'
import img from "./assets/react.svg"
import Header from './component/layout/Header/Header'
import Footer from "./component/layout/Footer/Footer"
import { useState } from "react";
import { Outlet } from "react-router"

const FullName = "Hoang Quoc Bao";
const Age = 21;
const data = {
  name: "Bao",
  age: 21,
  address: "Ha Noi"
}

const App = () => {
  // useState hook 
  const [todoList, setTodoList] = useState([
    { id: 1, name: "Learn React" },
    { id: 2, name: "Build a Todo App" },
    { id: 3, name: "Deploy the App" }
  ]);
  console.log(`Todolist ${JSON.stringify(todoList)}`);

  const AddTodoList = (name) => {
    const newTodo = {
      id: randomIntFromInterval(4, 1000),
      name: name
    }
    setTodoList([...todoList, newTodo]);
  }

  const DeleteTodoList = (id) => {
    const newTodoListAfterDelete = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoListAfterDelete);
  }

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <>
      <Header />
      <div className="Todo-container">
        <div className="Todo-title">My Todo List</div>
        <Todosearch
          AddTodoList={AddTodoList}
        />
        { //{condition && <Component />}
          //{condition ? <Component /> : <Component />}
          todoList.length > 0 ?
            <Tododata
              name={FullName}
              age={Age}
              data={data}
              todoList={todoList}
              DeleteTodoList={DeleteTodoList}
            />
            :
            <div className="Todo-image">
              <img src={img} />
            </div>
        }
      </div>
      <Outlet />
      <Footer />
    </>

  )
}
export default App
