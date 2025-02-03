// components/TodoItem.tsx
import React, { useState, useRef, useEffect } from "react";
import { Todo } from "../types";
import { Input } from "./Input";
import { FaEllipsisV, FaEdit, FaUndo } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoMdDoneAll } from "react-icons/io";
import {
  FcHighPriority,
  FcMediumPriority,
  FcLowPriority,
} from "react-icons/fc"; // Import icons

interface TodoItemProps {
  todo: Todo;
  onTodoToggle: (id: string) => void;
  onTodoEdit: (id: string, newText: string) => void;
  onTodoPriority: (id: string, newPriority: Todo["priority"]) => void;
  onDeleteTodo: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onTodoToggle,
  onTodoEdit,
  onTodoPriority,
  onDeleteTodo,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null); // Ref for the menu

  const getPriorityIcon = (priority: Todo["priority"]) => {
    switch (priority) {
      case "high":
        return <FcHighPriority className="mr-2" />;
      case "medium":
        return <FcMediumPriority className="mr-2" />;
      case "low":
        return <FcLowPriority className="mr-2" />;
      default:
        return null; // Or return a default icon if needed
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false); // Close menu if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); // Empty dependency array ensures this runs only once on mount and unmount

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleEditSave = () => {
    if (editText.trim() !== "") {
      onTodoEdit(todo.id, editText.trim());
      setIsEditing(false);
    }
  };

  const handlePriorityChange = (newPriority: Todo["priority"]) => {
    onTodoPriority(todo.id, newPriority);
    setShowMenu(false);
  };

  return (
    <li className="flex items-center text-xl py-2 relative group hover:bg-gold hover:text-gray-900">
      {getPriorityIcon(todo.priority)}

      {isEditing ? (
        <Input
          type="text"
          value={editText}
          onChange={e => setEditText(e.target.value)}
          onBlur={handleEditSave} // Save on blur
          className="flex-grow mr-2" // Input takes available space
        />
      ) : (
        <span
          className={`flex-grow text-1xl${
            todo.completed ? "line-through text-red-500" : ""
          }`}
        >
          {todo.text}
        </span>
      )}
      <div className="flex justify-center items-center gap-2 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <button onClick={handleEditClick} className="">
          <FaEdit className="text-xl hover:text-dark" />
        </button>
        <button onClick={() => onTodoToggle(todo.id)} className="">
          {todo.completed ? (
            <FaUndo className="text-xl hover:text-dark" />
          ) : (
            <IoMdDoneAll className="text-xl hover:text-dark" />
          )}
        </button>
        <button onClick={() => onDeleteTodo(todo.id)} className="">
          <MdDelete className="text-xl hover:text-red-700" />
        </button>
        {/* <div className="px-2 py-2">
          <label htmlFor={`priority-${todo.id}`} className="block">
            Priority:
          </label>{" "}
          
          <select
            id={`priority-${todo.id}`}
            value={todo.priority || "None"} 
            onChange={e =>
              handlePriorityChange(e.target.value as Todo["priority"])
            }
            className="border rounded px-2 py-1"
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
            <option value="low">None</option>
          </select>
        </div> */}
      </div>
    </li>
  );
};

export default TodoItem;
