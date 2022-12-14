import React, { useState } from 'react'
import { Interface } from 'readline'


interface Props {
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handleAddedTask:(e:React.FormEvent) =>void
}




const InputField = ({todo,setTodo,handleAddedTask}:Props) => {

  return (
    <div className='inputFiledDiv'>

    <form className='inputForm' onSubmit={handleAddedTask}>
    <div className='div1'>
    <input
    type="text" 
    placeholder='   Enter a text' 
    className="taskInput"
    value={todo}
    onChange={ (e) =>
      setTodo(e.target.value)
    }
    >
    </input>

    <button
    type="submit" 
    className='goBtn'
    >GO</button>
    
    </div>




    </form>


    </div>
  )
}

export default InputField