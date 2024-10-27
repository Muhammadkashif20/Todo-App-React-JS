import React, { useState } from 'react';
import TodoItem from './Components/TodoItems';

export default function App() {
 
  const [Ivalue,setIvalue]=useState('')  
  const [todo,setTodo]=useState([ ])
const handleTodo=()=>{
  console.log(todo);
  setTodo([...todo,Ivalue])
  setIvalue("")
}
const handleDelete=(id)=>{
  const remove=todo.filter((todo,index)=>index!==id)
  setTodo(remove)
  
}
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">My To-Do List</h1>  
      <div className="flex items-center mb-6">
          <input
            type="text"
            onChange={(e)=>setIvalue(e.target.value)}
            value={Ivalue}
            placeholder="Add a new task..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="ml-3 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={handleTodo}
          >
            Add
          </button>
        </div>
        
        <ul className="space-y-4">
          {todo.map((text,id) => (
            <TodoItem key={id} text={text} onDelete={()=>handleDelete(id)}/>
          ))}
        </ul>
      </div>
    </div>
  );
}
