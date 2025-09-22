import { User } from "./selects/user-select";

export type ViewMode = "grid" | "list";
export type Priority = "Medium" | "Important" | "Urgent";
export type TodoStatus = "todo" | "progress" | "completed";
export type Todo = {
  id?: string | number;
  name: string;
  date: string;
  assignee: User[] | [];
  priority: Priority;
  status: TodoStatus;
};
