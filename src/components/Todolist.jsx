import React from 'react'

export default function Todolist() {
  let todo = [
    "Go to the gym",
    "Buy groceries",
    "Read a book",
  ]
  return (
    <ul className='main'>
      {todo.map((todo,todoIndex) => {
        return(
          <li className= 'todoItem' key={todoIndex}>{todo}</li>
        )
      })}

    </ul>
    
  )
}
