"use client";
import React, { useState } from "react";
import { Input } from "./Input";
import { LuListTodo } from "react-icons/lu";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const Navbar = ({ onSearch }: SearchBarProps) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <nav className="sticky top-0 p-4 text-white z-10 border-b">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <LuListTodo className="mr-2 text-xl" />
          <h1 className="text-2xl font-bold">Todo List</h1>
        </div>
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
          {" "}
          {/* Position top-right */}
          <Input
            type="text"
            placeholder="Search todos..."
            value={query}
            onChange={handleSearch}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
