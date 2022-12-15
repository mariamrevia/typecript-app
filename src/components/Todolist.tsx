import React from 'react'
import {Todo} from "../model"




interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
const Todolist:React.FC <Props> = ({todos ,setTodos }:Props) => {
  return (
    <div className='todolist-div'>

{

todos.map((t) => {
  
  return (
  <div className='tods--div'>
  <li>{t.todo}</li>
  </div>
  )

})

}



    </div>
  )
}

export default Todolist