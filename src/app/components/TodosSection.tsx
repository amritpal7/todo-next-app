// components/CompletedTodos.tsx and PendingTodos.tsx (Similar structure)
import React from "react";
import { Todo } from "../types";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  onTodoToggle: (id: string) => void;
  onTodoEdit: (id: string, newText: string) => void;
  onTodoPriority: (id: string, newPriority: Todo["priority"]) => void;
  onDeleteTodo: (id: string) => void;
}

// export const CompletedTodos: React.FC<TodoListProps> = ({
//   todos,
//   onTodoToggle,
//   onTodoEdit,
//   onTodoPriority,
//   onDeleteTodo,
// }) => (
//   <div className="w-1/2 pl-2">
//     <h2 className="text-xl font-bold mb-2">Completed</h2>
//     <div className="w-1/2 pr-2 max-h-[60vh] overflow-y-auto">
//       {" "}
//       {/* Occupy half the width */}
//       <ul>
//         {todos.map(todo => (
//           <TodoItem
//             key={todo.id}
//             todo={todo}
//             onDeleteTodo={onDeleteTodo}
//             onTodoToggle={onTodoToggle}
//             onTodoEdit={onTodoEdit}
//             onTodoPriority={onTodoPriority}
//           />
//         ))}
//       </ul>
//     </div>
//   </div>
// );

export const AllTodos: React.FC<TodoListProps> = ({
  todos,
  onTodoToggle,
  onTodoEdit,
  onTodoPriority,
  onDeleteTodo,
}) => (
  <div className="w-3/5 pl-2">
    <h2 className="text-xl text-center font-bold mb-2">All Todos</h2>
    <div className="max-h-[90vh] overflow-y-auto">
      {" "}
      {/* Occupy half the width */}
      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDeleteTodo={onDeleteTodo}
            onTodoToggle={onTodoToggle}
            onTodoEdit={onTodoEdit}
            onTodoPriority={onTodoPriority}
          />
        ))}
      </ul>
    </div>
  </div>
);
