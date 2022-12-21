import React from 'react'
import { Droppable } from 'react-beautiful-dnd';
import { Todo } from "../model"
import SignleTodo from './SignleTodo';




interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
    completedtasks: Todo[]
    setComletedTasks: React.Dispatch<React.SetStateAction<Todo[]>>

}
const Todolist: React.FC<Props> = ({ todos, setTodos, completedtasks, setComletedTasks }: Props) => {
    return (


        <div className='container'>
            <Droppable droppableId="todoslist">
                {
                    (proovided) => (

                        <div className='todos' ref={proovided.innerRef}{...proovided.droppableProps} >
                            <span className="activeheader">Active Tasks</span>
                            <div className='tods--div'>
                                {todos.map((todo, index) => {
                                    return (
                                        <SignleTodo
                                            index={index}
                                            todo={todo}
                                            key={todo.id}
                                            todos={todos}
                                            setTodos={setTodos}
                                        />
                                    )
                                })
                                }

                            </div>
                            {proovided.placeholder}
                        </div>
                    )
                }

            </Droppable>
            <Droppable droppableId='todos-remove'>
                {
                    (proovided) => (

                        <div className="todos-remove" ref={proovided.innerRef} {...proovided.droppableProps}>
                            <span className="completedheader">Completed Tasks</span>
                            <div className='tods--div'>
                                {completedtasks.map((todo, index) => {
                                    return (
                                        <SignleTodo
                                            index={index}
                                            todo={todo}
                                            key={todo.id}
                                            todos={completedtasks}
                                            setTodos={setComletedTasks}
                                        />
                                    )
                                })
                                }

                            </div>
                            {proovided.placeholder}
                        </div>
                    )
                }

            </Droppable>
        </div>

    )
}

export default Todolist