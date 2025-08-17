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

  function handleDeleteTodo(index) {
    const newTodoList = todo.filter((todo, todoindex) => {
      return todoindex !== index;
    })
    setTodos(newTodoList);
  }

  function handleEditTodo(index, newTodo) {
    const newTodoList = todo.map((todo, index) => 
      index === todoIndex ? newTodo : todo
    );
    setTodos(newTodoList);
  }

  return (
    <>
      <TodoInput handleAddTodo = {handleAddTodo}/>
      <Todolist handleDeleteTodo={handleDeleteTodo} todo={todo}/>
    </>

  )
}

export default App
