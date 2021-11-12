import React from "react";



const TodoList = ({ todos, setTodos, setEditTodo }) => {

    const handleComplete = (todo) => {
        setTodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return { ...item, completed: !item.completed }
                }
                return item;
            })
        )
    }

    const handleEdit = ({ id }) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo);
    }

    const handleDelete = ({ id }) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };
    return (
        <div>
            {todos.map((todo) => (
                <div className="row mt-5 justify-content-start todo-field">
                    <div className="col-md-7" key={todo.id}>
                        <input type="text" className={`form-control text-on-input ${todo.completed ? "checked" : ""}`} value={todo.title} onChange={(event) => event.preventDefault()} disabled />
                    </div>
                    <div className="col-md-5">
                        <button type="button" className="btn btn-success me-1 mt-1" onClick={() => handleComplete(todo)}>Check</button>
                        <button type="button" className="btn btn-warning me-1 mt-1" onClick={() => handleEdit(todo)}>Edit</button>
                        <button type="button" className="btn btn-danger mt-1" onClick={() => handleDelete(todo)}>Delete</button>
                    </div>
                </div>
            ))}
        </div >
    )
};

export default TodoList;
