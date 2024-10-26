  import React, { useState } from "react";
  import TodoItems from "./Components/TodoItems";
  const App = () => {
    const [todoValue,setTodoValue]=useState()
    const [todos,setTodos] = useState([
      { id: 1, text: "Complete React project" },
      { id: 2, text: "Study for exams" },
      { id: 3, text: "Grocery shopping" },
    ]);
    // Todo App Functionality:-
  
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
            My To-Do List
          </h1>

          <div className="flex items-center mb-6">
            <input
              type="text"
              placeholder="Add a new task..."
              value={todoValue}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="ml-3 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add
            </button>
          </div>

          <ul className="space-y-4">
            {todos.map((todo) => (
              <TodoItems key={todo.id} text={todo.text} />
            ))}
          </ul>
        </div>
      </div>
    );
  };
  export default App;
