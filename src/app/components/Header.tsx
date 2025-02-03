"use client";
import React, { useState, useRef } from "react";
import { Input } from "./Input";
import { Button } from "./Button";
import { Todo } from "../types";

interface HeaderProps {
  onAddTodo: (todo: Todo) => void;
}

const Header: React.FC<HeaderProps> = ({ onAddTodo }) => {
  // const [text, setText] = useState("");

  const todoInputRef = useRef<HTMLInputElement>(null);

  const handleAddTodo = () => {
    if (todoInputRef.current) {
      const text = todoInputRef.current.value.trim();
      if (text.trim() !== "") {
        onAddTodo({
          id: Date.now().toString(),
          text: text.trim(),
          completed: false,
          priority: "none",
        });
        todoInputRef.current.value = "";
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <header className="p-4">
      <div className="container mx-auto flex justify-center items-center">
        <Input
          ref={todoInputRef}
          type="text"
          placeholder="Add a new todo..."
          // value={text}
          onKeyDown={handleKeyPress}
          className="mr-2 rounded-full p-2 flex-grow" // Make input take up available space
        />
        <Button onClick={handleAddTodo}>Add</Button>
      </div>
    </header>
  );
};

export default Header;
