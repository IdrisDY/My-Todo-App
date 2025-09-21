import { Todo, TodoStatus } from "@/app/dashboard/components/types";
import { FC, ReactEventHandler } from "react";

export type CustomInputProps = {
  type?: "input" | "textarea";
  variant?: "default" | "search";
  placeholder?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  rows?: number;
};
export type StatusItemProps = {
  icon: FC<{
    variant?:
      | "Linear"
      | "Outline"
      | "Broken"
      | "Bold"
      | "Bulk"
      | "TwoTone"
      | undefined;
    size?: string;
    color?: string;
  }>;
  value: TodoStatus;
  themeColor?: {
    bg: string;
    alt: string;
    txt: string;
  };
  text: string;
  count: number;
  color: string;
  todos?: Todo[];
};
export type SelectOption = {
  label: string;
  value: string | number;
};
