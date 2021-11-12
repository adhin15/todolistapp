import { useState, useEffect } from "react";
import "./App.css";
import Form from './components/Form';
import TodoList from "./components/TodoList";

function App() {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <div className="App">
      <div className="container-fluid p-5 align-midle">
        <h1> To-Do List App </h1>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div
              className="container mt-5 p-4 rounded shadow-lg app-container"
              style={{ background: "#0d2b34" }}>

              <Form
                input={input}
                setInput={setInput}
                todos={todos}
                setTodos={setTodos}
                editTodo={editTodo}
                setEditTodo={setEditTodo}
              />
              <TodoList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
            </div>
          </div>
        </div>

      </div>

    </div >)
    ;
}

export default App;
