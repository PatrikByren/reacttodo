import React from "react"

const Form = ({categoryTodo,setCategoryTodo,date, inputText, setInputText, todos, setTodos, setInputDay, inputDay}) => {
    const inputTextHandler = (e) => 
    {setInputText(e.target.value)
    };
    const inputCategoryHandler = (e) => {
      console.log(e.target.value)
      setCategoryTodo(e.target.value)
    }

    const inputDayHandler = (e) => {
      setInputDay(e.target.value)
    };
    const submitTodoHandler = (e) => {
      e.preventDefault();
      /*console.log(date+" / "+inputDay)
      if(date > inputDay) {
      console.log("Date passed")
      }
      
      
      else{   */   
      setTodos([...todos, {text: inputText, category: categoryTodo, day: inputDay, completed: false, id: Math.random() * 1000000000 }])
      setInputText("");
      setInputDay(date); 

    }

    return(
        <form className="form-control">
        <h4>Whats ur category?</h4>
        <select onChange={inputCategoryHandler} name="categoryTodo" id="categoryTodos" className="category-todo">
        <option value="Work">Work</option>
        <option value="Home">Home</option>
        </select>
        <input value={inputText} onChange={inputTextHandler} type="text" placeholder="Add Task"/>
        <input value={inputDay} onChange={inputDayHandler} type="date"/>
         {date > inputDay && <label className="datepassed">Datum passerat</label>}

        <button onClick={submitTodoHandler} className="btn btn-block" 
        type="submit">New todo <i className="fas fa-plus-square"></i>
        </button>

      </form>
    );
}
export default Form;