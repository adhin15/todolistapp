import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./TodoList";

const Form = () => {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) => (todo.id === id ? { title, id, completed } : todo));
    setTodos(newTodo);
    setEditTodo("");
  };
  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);

  const onInputChange = (event) => {
    setInput(event.target.value);
  };
  const onFomSubmit = (event) => {
    event.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
    console.log(todos);
  };

  return (
    <div>
      <div className="container-fluid p-5 align-midle">
        <h1> To-Do List App </h1>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div
              className="container mt-5 p-4 rounded shadow-lg app-container"
              style={{ background: "#0d2b34" }}>

              <form onSubmit={onFomSubmit}>
                <div className="row">
                  <div className="col-md-10">
                    <input
                      type="text"
                      className="form-control input-text"
                      placeholder="Enter A Task"
                      value={input}
                      required
                      onChange={onInputChange}
                    />
                  </div>
                  <div className="col-md-2">
                    <button className="btn submit" type="submit">
                      {editTodo ? "OK" : "ADD"}
                    </button>
                  </div>
                </div>
              </form>
              <TodoList todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
            </div>
          </div>

        </div>

      </div >

    </div>
  );
};

export default Form;
