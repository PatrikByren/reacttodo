import React from 'react';

const Filter = ({setTodos,setFilterInput,filterInput,setInputRadio}) => {
    const inputFilterHandler =(e) => {
        setFilterInput(e.target.value)
    }
    const inputRadioHandler = (e) => {
        
        setInputRadio(e.target.value);
    };
    const deleteAllHandler = () =>{
      setTodos([]);
    }
  return (
    <div className='filter-container'>
      <h4>Filter options</h4>
      <div>
      <input value={filterInput} onChange={inputFilterHandler} type="text" placeholder='Search...' className="filter-input"/>
      </div>
      <div>
      <input type="radio" value="Work" id='work' onChange={inputRadioHandler} name='radioFilter'/>
      <label htmlFor="jobb">Work</label>
      <input type="radio" value="Home" id='home' onChange={inputRadioHandler} name='radioFilter'/>
      <label htmlFor="Home">Home</label>
      <input type="radio" defaultChecked="true" value="All" id='all' onChange={inputRadioHandler} name='radioFilter'/>
      <label htmlFor="All">All</label>
      </div>
      <button onClick={deleteAllHandler} className="btn btn-block">Delete all Todo's</button>
    </div>
  );
}

export default Filter;
