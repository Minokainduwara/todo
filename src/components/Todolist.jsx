import React from 'react'
import Todocard from './Todocard'

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
          <Todocard key={todoIndex}>
              <p>{todo}</p>
          </Todocard>
        )
      })}

    </ul>
    
  )
}
