// src/context/TodoContext.js
import React, { createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  // Add Todo
  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, isEditing: false }]);
  };

  // Remove Todo
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Start Editing
  const startEdit = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: true } : todo,
      ),
    );
  };

  // Save Edited Todo
  const saveEdit = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText, isEditing: false } : todo,
      ),
    );
  };

  const value = { todos, addTodo, removeTodo, startEdit, saveEdit };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
