import React, { useState  , useEffect } from "react";
import './App.css';
import Tasklist from './components/TaskList';

function App() {
  // const [newTodo, setNewTodo] = useState('')
  // const [showEditTextbox,setShowEditTextbox] = useState(false);
  // const [editTextBoxId, setEditTextBoxId] = useState("");
  // const [todos, setTodos] = useState([])

  // function handleNewTodoChange(e) {
  //   e.preventDefault() 
  //   setNewTodo(e.target.value)
  // }

  // const onEdit = (index) => {
  //   setShowEditTextbox(true);
  //   setEditTextBoxId(index);
  // }

  // function handleNewTodo(e) {
  //   e.preventDefault()
  //   if (newTodo === "") return
  //   setTodos([...todos, { text: newTodo , id : todos.length}])
  // }

  // function removeNewTodo(e,index) {
  //    setTodos(todos.filter((todo)=>todo.id != index))
  // }

  // function updateTodo(e, index) {
  //   setShowEditTextbox(false);
    

  //     let newTodos = Object.assign([],todos);
  //     newTodos[index] = {...newTodos[index], text : newTodo };
  //     setTodos(newTodos);
       
  // }

  
    return (
      <div className="App">
        <h1>Todo List 2</h1>
        <Tasklist />
      </div>
    )
  }

  // return (
  //   <div className = "Todo-lists">
  //     <h1> Todo List 2</h1>
  //     <div className= "header">
  //       <input class="placeholder" placeholder="Add Todo task..." onChange={handleNewTodoChange} />
  //       <button onClick={handleNewTodo} type="submit" id="btn">Add</button>
  //       <ul>
  //         {todos.map((todo,index) => (
  //           <div class="table">
  //             <table>
  //               <tr>
  //               <li>{todo.text}</li> 
  //              <button style={{ marginLeft: "auto", float: "right" }}onClick={(e)=>removeNewTodo(e,index)} type="submit" id="btn2">Delete</button>
  //             {
               
  //              showEditTextbox && editTextBoxId == index ? <div> <input
  //              placeholder="Edit Todo task..." onChange={handleNewTodoChange}/>
  //              <button style={{ marginLeft: "auto", float: "right" }}onClick={(e)=>updateTodo(e,index)} type="submit" id="btn2">Edit
  //              </button>
  //              </div> : null
  //             }
  //            { showEditTextbox == false ? <button style={{ marginLeft: "auto", float: "right" }}onClick={(e)=>onEdit(index)} type="submit" id="btn2">Edit
  //           </button> : null }
  //               </tr>
  //             </table>
  //           </div>

  //         ))}
          
  //       </ul>
        
  //       </div> 
  //   </div>
  // )
// }

export default App;