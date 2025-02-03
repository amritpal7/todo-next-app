"use client";

import React, { useState, useEffect } from "react";
import { AllTodos } from "./TodosSection";
import { Todo } from "../types";
import Navbar from "./Navbar";
import Header from "./Header";

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Load todos from localStorage on mount
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    // Save todos to localStorage whenever it changes
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  const handleDeleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleTodoToggle = (id: string) => {
    setTodos(prevTodos => {
      const updatedTodos = prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );

      // Reorder todos: Completed todos at the end
      const completedTodos = updatedTodos.filter(todo => todo.completed);
      const pendingTodos = updatedTodos.filter(todo => !todo.completed);
      return [...pendingTodos, ...completedTodos];
    });
  };

  const handleSearch = (query: string) => {
    setSearchTerm(query);
  };

  const filteredTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleTodoEdit = (id: string, newText: string) => {
    setTodos(
      todos.map(todo => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  const handleTodoPriority = (id: string, newPriority: Todo["priority"]) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, priority: newPriority } : todo
      )
    );
  };

  // const priorityTodos = filteredTodos.filter(todo => !todo.completed);

  return (
    <div className="container mx-auto">
      <Navbar onSearch={handleSearch} />
      <Header onAddTodo={handleAddTodo} />
      <div className="container mx-auto p-4 flex justify-center">
        <AllTodos
          todos={filteredTodos}
          onDeleteTodo={handleDeleteTodo}
          onTodoToggle={handleTodoToggle}
          onTodoEdit={handleTodoEdit}
          onTodoPriority={handleTodoPriority}
        />
        {/* <CompletedTodos
          todos={completedTodos}
          onDeleteTodo={handleDeleteTodo}
          onTodoToggle={handleTodoToggle}
          onTodoEdit={() => {}}
          onTodoPriority={() => {}}
        /> */}
      </div>
    </div>
  );
};

export default TodoList;
