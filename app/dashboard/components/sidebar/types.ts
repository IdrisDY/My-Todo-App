export type CustomMenuItemProps = {
  icon: React.ReactNode;
  text: string;
  path: string;
  iconColor: string;
  subItems?: {
    path: string;
    text: string;
  }[];
};
