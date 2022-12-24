import React, { useState } from "react";

const TodoList = ({
  todos,
  deleteTodo,
  changeStatusTodo,
  changeContentTodo,
  unDeleteTodo,
}) => {
  const [newText, setNewText] = useState([""]);
  return (
    <ul>
      {todos.map((todo) => (
        <>
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {`${todo.text}  ---${todo.time}`}
            <br />
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            {todo.isEdit ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  changeContentTodo(todo.id, newText);
                }}
              >
                <input
                  type="text"
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                />
                <button>Submit</button>
                <button onClick={() => unDeleteTodo(todo.id)}>Cancel</button>
              </form>
            ) : (
              <button
                onClick={() => {
                  changeStatusTodo(todo.id);
                  setNewText(todo.text);
                }}
              >
                Edit
              </button>
            )}
          </li>
        </>
      ))}
    </ul>
  );
};

export default TodoList;
