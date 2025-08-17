import React, { useState } from 'react'
import TodoInput from "./components/Todoinput"
import Todolist from "./components/Todolist"

function App() {
  // State to hold the list of todos
  const [todo,setTodos] = useState([
    
  ]);

  function handleAddTodo(newTodo) {
    const newtodoList = [...todo, newTodo];
    setTodos(newtodoList);

  }

  return (
    <>
      <TodoInput handleAddTodo = {handleAddTodo}/>
      <Todolist todo={todo}/>
    </>

  )
}

export default App
