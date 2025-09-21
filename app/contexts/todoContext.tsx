"use client";
import React, { createContext, useReducer, useContext } from "react";
import { Todo, TodoStatus } from "../dashboard/components/types";

type Action =
  | { type: "ADD"; payload: Todo }
  | { type: "DELETE"; payload: { id: number } }
  | { type: "UPDATE"; payload: { id: number; updates: Partial<Todo> } }
  | { type: "CHANGE_STATUS"; payload: { id: number; status: TodoStatus } };

const storetoStorage = (data) => {
  localStorage.setItem("todos", JSON.stringify(data));
};

const todoReducer = (state: Todo[], action: Action): Todo[] => {
  switch (action.type) {
    case "ADD":
      let addedState = [...state, action.payload];
      storetoStorage(addedState);
      return addedState;
    case "DELETE":
      let deletedUpdate = state.filter((t) => t.id !== action.payload.id);
      storetoStorage(deletedUpdate);
      return deletedUpdate;
    case "UPDATE":
      const updatedData = state.map((t) =>
        t.id === action.payload.id ? { ...t, ...action.payload.updates } : t
      );
      storetoStorage(updatedData);
      return updatedData;
    case "CHANGE_STATUS":
      const statusChangedData = state.map((t) =>
        t.id === action.payload.id ? { ...t, status: action.payload.status } : t
      );
      storetoStorage(statusChangedData);
      return statusChangedData;
    default:
      return state;
  }
};

export type TodoContextType = {
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
