"use client";
import React, { useState, useEffect, useRef } from "react";
import { Input } from "./Input";
import { Button } from "./Button";
import { Todo } from "../types";

interface HeaderProps {
  onAddTodo: (todo: Todo) => void;
}

const Header: React.FC<HeaderProps> = ({ onAddTodo }) => {
  const [text, setText] = useState("");

  const handleAddTodo = () => {
    if (text.trim() !== "") {
      onAddTodo({
        id: Date.now().toString(),
        text: text.trim(),
        completed: false,
        priority: "none",
      });
      setText("");
    }
  };

  return (
    <header className="p-4">
      <div className="container mx-auto flex justify-center items-center">
        <Input
          type="text"
          placeholder="Add a new todo..."
          value={text}
          onChange={e => setText(e.target.value)}
          className="mr-2 rounded-full p-2 flex-grow" // Make input take up available space
        />
        <Button onClick={handleAddTodo}>Add</Button>
      </div>
    </header>
  );
};

export default Header;
