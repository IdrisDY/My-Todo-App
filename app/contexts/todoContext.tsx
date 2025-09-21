"use client";
import React, { createContext, useReducer, useContext } from "react";
import { Todo, TodoStatus } from "../dashboard/components/types";

type Action =
  | { type: "ADD"; payload: Todo }
  | { type: "DELETE"; payload: { id: number } }
  | { type: "UPDATE"; payload: { id: number; updates: Partial<Todo> } }
  | { type: "CHANGE_STATUS"; payload: { id: number; status: TodoStatus } };

function todoReducer(state: Todo[], action: Action): Todo[] {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "DELETE":
      return state.filter((t) => t.id !== action.payload.id);
    case "UPDATE":
      return state.map((t) =>
        t.id === action.payload.id ? { ...t, ...action.payload.updates } : t
      );
    case "CHANGE_STATUS":
      return state.map((t) =>
        t.id === action.payload.id ? { ...t, status: action.payload.status } : t
      );
    default:
      return state;
  }
}

type TodoContextType = {
  todos: Todo[];
  dispatch: React.Dispatch<Action>;
};

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export function TodoProvider({ children }: { children: React.ReactNode }) {
  const products: Todo[] = [
    {
      id: 1,
      name: "MKV Intranet V2",
      date: "04/06/2024 - 16/06/2014",
      assignee: ["/images/user1.png", "/images/user2.png"],
      priority: "Medium",
      status: "progress",
    },
    {
      id: 2,
      name: "Design System",
      date: "04/06/2024 - 16/06/2014",
      assignee: ["/images/user1.png", "/images/user2.png"],
      priority: "Important",
      status: "todo",
    },
    {
      id: 3,
      name: "Medical Appointment",
      date: "04/06/2024 - 16/06/2014",
      assignee: ["/images/user1.png", "/images/user2.png"],
      priority: "Urgent",
      status: "completed",
    },
  ];

  const [todos, dispatch] = useReducer(todoReducer, [...products]);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodos() {
  const ctx = useContext(TodoContext);
  return ctx;
}
