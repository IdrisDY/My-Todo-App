import { FC } from "react";

export type CustomMenuItemProps = {
  icon: FC;
  text: string;
  path: string;
  iconColor?: string;
  subItems?: {
    path: string;
    text: string;
  }[];
};
