import React, { useState } from 'react'
import TodoInput from "./components/Todoinput"
import Todolist from "./components/Todolist"

function App() {
  // State to hold the list of todos
  const [todo,setTodos] = useState([]);
  // State to hold the index of the todo being edited
  const [todoValue, setTodoValue] = useState('');

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

  function handleEditTodo(index) {
    const valueToBeEdited = todo[index];
    setTodoValue(valueToBeEdited);
    handleDeleteTodo(index);
  }

  return (
    <>
      <TodoInput todoValue={todoValue} 
      setTodoValue={setTodoValue}
      handleAddTodo = {handleAddTodo}/>
      <Todolist handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todo={todo}/>
    </>

  )
}

export default App
