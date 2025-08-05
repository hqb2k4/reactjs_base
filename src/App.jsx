import Tododata from "./component/todo/todo_data/Tododata"
import Todosearch from "./component/todo/todo_search/Todosearch"

import './component/todo/style.css'

const App = () => {
  return ( 
        <div className="Todo-container">
            <div className="Todo-title">My Todo List</div>
            <Todosearch />
            <Tododata />
        </div>
  )
}
export default App
