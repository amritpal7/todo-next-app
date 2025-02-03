import React from "react";
import TodoLists from "./TodoLists";
import {
  FcHighPriority,
  FcMediumPriority,
  FcLowPriority,
} from "react-icons/fc"; // Import the icons
import { MdNotInterested } from "react-icons/md";

const TodoApp = () => {
  return (
    <div className="bg-dark max-h-[100vh]">
      <TodoLists />
      <footer>
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 p-4 rounded shadow-md">
          {/* Fixed position, centered */}
          <p className="flex items-center justify-center hover:underline">
            <label className="mr-4">Priorities: </label>
            {"   "}
            <span className="mr-4 flex items-center">
              {" "}
              {/* Add some spacing */}
              <FcHighPriority className="mr-2" /> High
            </span>
            <span className="mr-4 flex items-center">
              <FcMediumPriority className="mr-2" /> Medium
            </span>
            <span className="mr-4 flex items-center">
              <FcLowPriority className="mr-2" /> Low
            </span>
            <span className="flex items-center">
              <MdNotInterested className="mr-2" /> None
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default TodoApp;
