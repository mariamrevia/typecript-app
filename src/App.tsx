
import React, { useState } from 'react';
import "./App.css"
import InputField from './components/inputField';
import Todolist from './components/Todolist';
import { Todo } from './model';
import {DragDropContext, DropResult} from "react-beautiful-dnd"


const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])
  const [completedtasks, setComletedTasks] = useState<Todo[]>([])






  const handleAddedTask = (e: React.FormEvent) => {
    e.preventDefault()
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }])
      setTodo("")
    }




  }

  const onDragEnd = (result:DropResult) => {
   const  {source , destination} = result 
   if(!destination) return;
   if (destination.droppableId === source.droppableId && destination.index === source.index )return;
let add, 
active = todos ,
completed = completedtasks

if (source.droppableId === "todoslist") {
  add = active[source.index];
  active.splice(source.index , 1)
}else {
  add = completed[source.index]
  completed.splice(source.index,1)
}
  if (destination.droppableId === "todoslist"){
    active.splice(destination.index,0 , add)
  }else {
    completed.splice(destination.index, 0 ,add)
  }


  setComletedTasks(completed)
  setTodos(active)
  }

  console.log(todos)

  return (


    <DragDropContext onDragEnd={onDragEnd}>


    <div className="App">

      <span className="heading">tiskify</span>
      <InputField
        handleAddedTask={handleAddedTask}
        todo={todo}
        setTodo={setTodo}
      />
        <Todolist
        todos={todos}
        setTodos={setTodos}
        completedtasks={completedtasks}
        setComletedTasks={setComletedTasks}
        
        />
    
     

    </div>

    </DragDropContext>
  );
}

export default App;


