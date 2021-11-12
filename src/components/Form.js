import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
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
    </div>
  );
};

export default Form;
