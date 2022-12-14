import React, {useState} from 'react';
import "./App.css"
import InputField from './components/inputField';
import { Todo } from './model';


const App:React.FC = () => {

  const [todo,setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])
  



  console.log (todo)

  const handleAddedTask = (e:React.FormEvent) =>{
    e.preventDefault()
    if (todo) {
      setTodos([...todos, {id: Date.now(), todo: todo, isDone:false}])
      setTodo("")
    }



  }
  console.log(todo)
  console.log (todos)

  return (

    <div className="App">
      <span className="heading">tiskify</span>

      <InputField
      handleAddedTask={handleAddedTask}
      todo={todo}
      setTodo={setTodo}
      
      /> 
      {/* <TodoList />  */}

  

     
    </div>
  );
}

export default App;


