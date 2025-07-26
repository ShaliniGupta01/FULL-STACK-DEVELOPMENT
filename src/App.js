// src/App.js
import React from "react";
import { TodoProvider } from "./context/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  return (
    <TodoProvider>
      <div className="app">
        <h1>Todo List with Context API</h1>
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
