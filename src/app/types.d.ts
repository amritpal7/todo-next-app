export type Todo = {
  id: string;
  text: string;
  completed: boolean;
  priority?: "low" | "medium" | "high" | "none";
};

export type TodoItemProps = {
  item: Todo;
};

export type pendingTodosProps = {
  pendingTodost: Todo[];
  // completedTodos: Todo[];
};

export type HeaderProps = {
  title: string;
};
