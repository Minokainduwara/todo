import React, { useState } from 'react'
import TodoInput from "./components/Todoinput"
import Todolist from "./components/Todolist"

function App() {
  // State to hold the list of todos
  const [todo,setTodos] = useState([
    "Go to the gym",
    "Buy groceries",
    "Read a book",
  ]);

  function handleAddTodo(){
    
  }

  return (
    <>
      <TodoInput />
      <Todolist todo={todo}/>
    </>

  )
}

export default App
