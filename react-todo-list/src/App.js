import React, { useState } from "react";
import './App.css';

function App() {
  const [newTodo, setNewTodo] = useState('')
  const [todos, setTodos] = useState([])

  function handleNewTodoChange(e) {
    e.preventDefault() 
    setNewTodo(e.target.value)
  }

  function handleNewTodo(e) {
    e.preventDefault()
    if (newTodo === "") return
    setTodos([...todos, {id: Date.now(), text: newTodo}])
    e.target.reset()
  }

  return (
    <div className = "Todo-lists">
      <h1> Todo List 2</h1>
      <form onSubmit={handleNewTodo}>
        <input placeholder="Add Todo task..." onChange={handleNewTodoChange} />
        <ul>
          {todos.map((todo) => (
            <li>{todo.text}</li>
          ))}
        </ul>
      </form>
    </div>
  )
}

export default App;