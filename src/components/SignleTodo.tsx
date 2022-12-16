import React, { useState } from "react"

import { Todo } from "../model"
import { AiFillEdit, AiTwotoneDelete } from "react-icons/ai"
import { MdOutlineDone } from "react-icons/md"
import Todolist from "./Todolist"



type Props = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>


}


const SignleTodo = ({ todo, todos, setTodos }: Props) => {


    const [edit, setEdit] = useState<boolean>(false)
    const [editTask, setEditTask] = useState<string>(todo.todo)

    const handleisDone = (id: number) => {
        setTodos(todos.map((todo) => {
            return (
                todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            )
        }))

    }

    const handleDelete = (id: number) => {
        setTodos(todos.filter((todo) => {
            return (
                todo.id !== id

            )
        }))

    }

    const handleChangetask = (event:React.ChangeEvent<HTMLInputElement>) => {

setEditTask(event.target.value)
    }


    return (
        <form className="todoslist--form" >

            <div className="todoslist--div">


                {
                    edit? (
                        <input
                        value={editTask}
                        onChange={handleChangetask}
                        className="editInput"
                        />
                        ): 
                        
                        (
                        
                            todo.isDone ?
                                <s className="todos-single">{todo.todo}</s> :
                                <span className="todos-single">{todo.todo}</span>
        
                        )
                    }
                <div className="icons--div">


                    <span className="icons"
                   
                    onClick={() => {
                        if (!edit && !todo.isDone) {
                            setEdit(!edit)
                        }
                     
                    }}
                ><AiFillEdit /></span>
                    
                    <span className="icons" onClick={() => handleDelete(todo.id)}><AiTwotoneDelete /></span>
                    <span className="icons" onClick={() => handleisDone(todo.id)}><MdOutlineDone /></span>

                </div>

            </div>
        </form>
    )
}

export default SignleTodo