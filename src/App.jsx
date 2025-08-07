import Tododata from "./component/todo/todo_data/Tododata"
import Todosearch from "./component/todo/todo_search/Todosearch"
import './component/todo/style.css'
import img from "./assets/react.svg"

const FullName = "Hoang Quoc Bao";
const Age = 21;
const data = {
  name: "Bao",
  age: 21,
  address: "Ha Noi"
}
const App = () => {
  return ( 
        <div className="Todo-container">
            <div className="Todo-title">My Todo List</div>
            <Todosearch />
            <Tododata 
              name = {FullName}
              age = {Age}
              data = {data}
            />
            <div className="Todo-image">
                <img src={img}/>
            </div>
        </div>
  )
}
export default App
