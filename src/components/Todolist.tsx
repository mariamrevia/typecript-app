import React from 'react'
import { Todo } from "../model"
import SignleTodo from './SignleTodo';




interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
const Todolist: React.FC<Props> = ({ todos, setTodos }: Props) => {
    return (

        <div className='tods--div'>
            {todos.map((todo) => {
                return (
                   <SignleTodo 
                   todo={todo}
                   key={todo.id}
                   todos={todos}
                   setTodos={setTodos}
                   />
                )
            })
            }

        </div>
    )
}

export default Todolist