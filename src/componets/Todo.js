import React from 'react';

const Todo = ({category,text,todo,todos,setTodos,day}) => {
    //Events
    const deleteHandler = () => {
        console.log(todo)
        setTodos(todos.filter((el) => el.id !== todo.id));
       
    };

    return (
        <div className='todo'>
            <li className={`todo-item ${todo.completed ? "completed": ""}`}>
                <div className='todo-task'>Task: {text}</div>
                <div className='todo-duedate'>Due date: {day}</div>
                <div className='todo-category'>Category: {category}</div>
            </li>
            <div className='todo-btn'>
            <button onClick={deleteHandler} className='btn'>
                <i className='fas fa-trash'>
            </i></button>
            </div>
        </div>
  );
}

export default Todo;

