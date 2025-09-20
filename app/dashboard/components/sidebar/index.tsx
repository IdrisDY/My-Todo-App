"use client";
import { Container } from "@chakra-ui/react";
import {
  Call,
  Category,
  Document,
  Edit,
  Menu,
  MessageEdit,
  Note,
  Notification,
  People,
  Stickynote,
  TableDocument,
  Task,
} from "iconsax-reactjs";
import MenuItem from "./components/menu-item";
import { CustomMenuItemProps } from "./types";

const Sidebar = () => {
  const menuItems: CustomMenuItemProps[] = [
    {
      path: "/",
      icon: <Category />,
      text: "Home",
    },
    {
      path: "/",
      icon: <Stickynote />,
      text: "MKVanBinnen",
    },
    {
      path: "/",
      icon: <Document />,
      text: "Document Management",
    },
    {
      path: "/",
      icon: <People />,
      text: "Patient Information",
    },
    {
      path: "/",
      icon: <Note />,
      text: "Agenda",
    },
    {
      path: "/",
      icon: <TableDocument />,
      text: "My Department",
    },
    {
      path: "/",
      icon: <Call />,
      text: "Phone numbers",
    },
    {
      path: "/",
      icon: <Task />,
      text: "My to do Protocols",
    },
    {
      path: "/",
      icon: <Notification />,
      text: "My Notifications",
    },
    {
      path: "/",
      icon: <Menu />,
      text: "Knowledge Base",
    },
    {
      path: "/",
      icon: <MessageEdit />,
      text: "Super Admin",
    },
    {
      path: "/",
      icon: <Edit />,
      text: "Admin",
    },
  ];
  return (
    <Container w={"20%"} h={"100vh"} overflowY={"hidden"} maxWidth={"md"}>
      This is the sidebar dhbsd
      <div className="flex flex-col gap-4">
        {menuItems.map((item) => (
          <MenuItem
            key={item.text}
            path={item.path}
            icon={item.icon}
            text={item.text}
          />
        ))}
      </div>
    </Container>
  );
};

export default Sidebar;
