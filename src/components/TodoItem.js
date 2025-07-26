// src/components/TodoItem.js
import React, { useState, useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoItem = ({ todo }) => {
  const { removeTodo, startEdit, saveEdit } = useContext(TodoContext);
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    saveEdit(todo.id, editText);
  };

  return (
    <li className="todo-item">
      {todo.isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span>{todo.text}</span>
          <button onClick={() => startEdit(todo.id)}>Edit</button>
          <button onClick={() => removeTodo(todo.id)}>Remove</button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
