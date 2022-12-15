import React, { useRef, useState } from 'react'
import { Interface } from 'readline'


interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAddedTask: (e: React.FormEvent) => void

}
const InputField = ({ todo, setTodo, handleAddedTask }: Props) => {
  let inputRef = useRef<HTMLInputElement>(null)
  return (
    <div className='inputFiledDiv'>

      <form className='inputForm' onSubmit={
        (e) => {
          handleAddedTask(e)
          inputRef.current?.blur()
        }
      }>

        <input
          ref={inputRef}
          type="text"
          placeholder='   Enter a text'
          className="taskInput"
          value={todo}
          onChange={(e) =>
            setTodo(e.target.value)
          }
        >
        </input>

        <button
          type="submit"
          className='goBtn'
        >GO</button>


      </form>
    </div>
  )
}

export default InputField