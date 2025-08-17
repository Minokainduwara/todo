import React from 'react'
import Todocard from './Todocard'

export default function Todolist(props) {
  const { todo } = props;
  return (
    <ul className='main'>
      {todo.map((todo,todoIndex) => {
        return(
          <Todocard {...props} key={todoIndex}
            index = {todoIndex} 
          >
              <p>{todo}</p>
          </Todocard>
        )
      })}

    </ul>
    
  )
}
