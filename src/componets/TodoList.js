import React from "react"
//Import Components
import Todo from "./Todo";

const TodoList = ({todos, setTodos, filteredTodos,setFilterInput}) => {

    return ( 
    <div className="task">
    <ul className="todo-list">
        {filteredTodos.map((todo) => (
            <Todo todos={todos} 
            setTodos={setTodos}
            key={todo.id} 
            todo={todo}
            text={todo.text}
            day={todo.day}
            category={todo.category}
            setFilterInput={setFilterInput}
            />
        ))}
    </ul>
    </div>
    )
}

export default TodoList;