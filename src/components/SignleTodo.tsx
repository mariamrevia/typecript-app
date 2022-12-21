import React, { useRef, useState, useEffect } from "react"
import { Todo } from "../model"
import { AiFillEdit, AiTwotoneDelete } from "react-icons/ai"
import { MdOutlineDone } from "react-icons/md"
import { Draggable } from "react-beautiful-dnd"



type Props = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
    index:number

}


const SignleTodo = ({ index,todo, todos, setTodos }: Props) => {


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

    

    const handleEdit = (e: React.FormEvent, id: number,) => {
        e.preventDefault()
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, todo: editTask } : todo))
        console.log(todos)
        console.log(editTask)
        setEdit(false)
    }

    const inputRef = useRef<HTMLInputElement>(null)
    useEffect(() => {
        inputRef.current?.focus()
    }, [edit])

    return (
       <Draggable draggableId={todo.id.toString()} index={index}>
       {
        (proovided) => (

        <form className="todoslist--form" onSubmit={(e) => handleEdit(e, todo.id)}
        
        
        
         {...proovided.draggableProps}
         {...proovided.dragHandleProps}
         ref={proovided.innerRef}
        >
            <div className="todoslist--div">
                {
                    edit ? (
                        <input
                            ref={inputRef}
                            value={editTask}
                            onChange={(e) => setEditTask(e.target.value)}
                            className="editInput"
                        />
                    ) : todo.isDone ? (
                        <s className="todos-single">{todo.todo}</s>) :
                        (
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
       </Draggable>
    )
}

export default SignleTodo