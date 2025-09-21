export type ViewMode = "grid" | "list";
export type Priority = "Medium" | "Important" | "Urgent";
export type TodoStatus = "todo" | "progress" | "completed";
export type Todo = {
  id?: string | number;
  name: string;
  date: string;
  assignee: string[];
  priority: Priority;
  status: TodoStatus;
};
