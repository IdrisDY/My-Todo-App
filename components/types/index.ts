export type CustomInputProps = {
  type?: "input" | "textarea";
  variant?: "default" | "search";
  placeholder?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  rows?: number;
};
export type StatusItemProps = {
  icon: React.ReactNode;
  text: string;
  count: number;
  color: string;
};
