"use client";
import React, { createContext, useReducer, useContext, useEffect } from "react";
import { Todo, TodoStatus } from "../dashboard/components/types";

type Action =
  | { type: "INIT"; payload: Todo[] }
  | { type: "ADD"; payload: Todo }
  | {
      type: "SEARCH";
      payload: {
        query: string;
        status: string;
      };
    }
  | { type: "DELETE"; payload: { id: number } }
  | { type: "UPDATE"; payload: { id: number; updates: Partial<Todo> } }
  | { type: "CHANGE_STATUS"; payload: { id: number; status: TodoStatus } };

type State = {
  todos: Todo[];
  filtered: Todo[];
};

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

const todoReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "INIT":
      return {
        todos: action.payload,
        filtered: action.payload,
      };

    case "SEARCH":
      return {
        ...state,
        filtered: state.todos.filter(
          (t) =>
            t.name.toLowerCase().includes(action.payload.query.toLowerCase()) &&
            t.status === action.payload.status
        ),
      };

    case "ADD": {
      const newTodos = [...state.todos, action.payload];
      return {
        todos: newTodos,
        filtered: newTodos,
      };
    }

    case "DELETE": {
      const newTodos = state.todos.filter((t) => t.id !== action.payload.id);
      return {
        todos: newTodos,
        filtered: newTodos,
      };
    }

    case "UPDATE": {
      const newTodos = state.todos.map((t) =>
        t.id === action.payload.id ? { ...t, ...action.payload.updates } : t
      );
      return {
        todos: newTodos,
        filtered: newTodos,
      };
    }

    case "CHANGE_STATUS": {
      const newTodos = state.todos.map((t) =>
        t.id === action.payload.id ? { ...t, status: action.payload.status } : t
      );
      return {
        todos: newTodos,
        filtered: newTodos,
      };
    }

    default:
      return state;
  }
};

export type TodoContextType = {
  todoState: State;
  dispatch: React.Dispatch<Action>;
};

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [todoState, dispatch] = useReducer(todoReducer, {
    todos: [],
    filtered: [],
  });

  // gets froms torage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("todos");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.length == 0) {
          dispatch({ type: "INIT", payload: products });
          return;
        }
        dispatch({ type: "INIT", payload: parsed });
      }
    }
  }, []);
  // Sets tdos to storage
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("todos", JSON.stringify(todoState));
    }
  }, [todoState]);
  return (
    <TodoContext.Provider value={{ todoState, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export function useTodos() {
  const ctx = useContext(TodoContext);
  return ctx;
}
