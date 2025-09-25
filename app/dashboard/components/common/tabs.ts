import { StatusItemProps } from "@/components/types";
import { Status, TaskSquare, TickCircle } from "iconsax-reactjs";
const [todo, progress, completed] = [
  { bg: "#CFB7E8", alt: "#F9F3FF" },
  { bg: "#F6BE38", alt: "#FBF4E4" },
  { bg: "#75C5C1", alt: "#E9F5F7" },
];
export type statusTabs = Omit<StatusItemProps, "onClick">;

export const statusTabs: statusTabs[] = [
  {
    icon: TaskSquare,
    themeColor: todo,
    text: "To Do",
    count: 20,
    value: "todo",
    color: "#F9F3FF",
  },
  {
    icon: Status,
    themeColor: progress,
    text: "In Progress",
    value: "progress",
    count: 20,
    color: "#FBF4E4",
  },
  {
    icon: TickCircle,
    themeColor: completed,
    text: "Completed",
    value: "completed",
    count: 20,
    color: "#E9F5F7",
  },
];
