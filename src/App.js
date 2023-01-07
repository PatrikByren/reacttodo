import React, { useState, useRef, useEffect } from 'react';

import './App.css';
//Import components
import Form from './componets/Form';
import TodoList from './componets/TodoList';
import Filter from './componets/Filter';

function App() {
  const firstUpdate = useRef(true);
  const today = new Date();
  const date = today.getFullYear()+"-"+("0" + (today.getMonth()+1)).slice(-2)+"-"+("0" + today.getDate()).slice(-2);
  //let testdate= new Date();
  //const testdate1 = (typeof testdate,'number')
  //console.log(testdate1)
  const [inputText, setInputText] = useState("");
  const [inputDay, setInputDay] = useState(date);
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilterTodos] = useState([]);
  const [filterInput, setFilterInput] = useState("");
  const [filterRadio, setInputRadio] = useState("");
  const [categoryTodo, setCategoryTodo] = useState("Work");
  //RUN ONCE when the app start
  useEffect(()=> {
    getLocalTodos();
  },[]);
    //USE EFFECT
    useEffect (() => {
      filterInputHandler();
        if (firstUpdate.current) {
          firstUpdate.current = false;
          return;
        }
      saveLocalTodos();
    }, [todos]);
    useEffect (() => {
      filterInputHandler();
    }, [filterInput, filterRadio]);
    

  const filterInputHandler = () => {
    if(filterRadio !== "All")
    setFilterTodos(todos
      .filter((v) => !v.category.indexOf(filterRadio))
      .filter((v) => !v.text.indexOf(filterInput)))
    else{setFilterTodos(todos
      .filter((v) => v.category.indexOf(filterRadio))
      .filter((v) => !v.text.indexOf(filterInput)))}
  }
    
  //Save to Local
  const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
      console.log("Save Local", JSON.stringify(todos))
  };
  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos', JSON.stringify(todos)));
      console.log("Get the local:")
      console.log(todoLocal)
      setTodos(todoLocal);
    }
  }

  return (
    <div className="container">
      <header><h1>Patrik's Todo's</h1></header>
      <Form todos={todos} 
      setTodos={setTodos} 
      inputText={inputText} 
      setInputText={setInputText}
      setInputDay={setInputDay}
      inputDay={inputDay}
      date={date}
      categoryTodo={categoryTodo}
      setCategoryTodo={setCategoryTodo}
      />
      <Filter setFilterInput={setFilterInput}
      filterInput={filterInput}
      setTodos={setTodos} 
      setInputRadio={setInputRadio}/>
      <TodoList filteredTodos={filteredTodos} 
      todos={todos} setTodos={setTodos}
      setFilterInput={setFilterInput}/>
      
    </div>
  );
}

export default App;