"use client";

import {
  Container,
  Box,
  IconButton,
  Drawer,
  VStack,
  ScrollArea,
} from "@chakra-ui/react";
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
  HamburgerMenu,
  ArrowLeft,
} from "iconsax-reactjs";

import MenuItem from "./components/menu-item";
import { CustomMenuItemProps } from "./types";
import CustomIconButton from "@/components/ui/icon-button";
import Logo from "@/components/ui/Logo";

const Sidebar = () => {
  const menuItems: Omit<CustomMenuItemProps, "iconColor">[] = [
    { path: "/", icon: Category, text: "Home" },
    { path: "/", icon: Stickynote, text: "MKVanBinnen" },
    { path: "/", icon: Document, text: "Document Management" },
    { path: "/", icon: People, text: "Patient Information" },
    { path: "/", icon: Note, text: "Agenda" },
    {
      path: "/",
      icon: TableDocument,
      text: "My Department",
      subItems: [
        { path: "", text: "News" },
        { path: "", text: "Members" },
        { path: "", text: "To-do" },
        { path: "", text: "Form Task" },
        { path: "", text: "Agenda" },
        { path: "", text: "Follow-up system" },
        { path: "", text: "Group settings" },
      ],
    },
    { path: "/", icon: Call, text: "Phone numbers" },
    { path: "/", icon: Task, text: "My to do Protocols" },
    { path: "/", icon: Notification, text: "My Notifications" },
    { path: "/", icon: Menu, text: "Knowledge Base" },
    { path: "/", icon: MessageEdit, text: "Super Admin" },
    {
      path: "/",
      icon: Edit,
      text: "Admin",
      subItems: [
        { path: "/", text: "Agenda" },
        { path: "/", text: "News" },
        { path: "/", text: "Poll" },
        { path: "/", text: "Department Rules" },
        { path: "/", text: "Follow up system" },
      ],
    },
  ];

  return (
    <>
      <ScrollArea.Root variant={"hover"}>
        <ScrollArea.Viewport>
          <ScrollArea.Content paddingEnd={3} textStyle={"sm"}>
            <Box
              as={"nav"}
              aria-label="sidebar"
              display={{ base: "none", md: "block" }}
              paddingInline={"20px"}
              h={"100vh"}
              w={"100%"}
              overflowX={"hidden"}
              position="absolute"
              left={0}
              top={"0"}
              borderRight="1px solid"
              borderColor="gray.300"
            >
              {/* Logo and Right Button */}
              <Box
                style={{
                  display: "flex",
                  flexDirection: "row",
                  position: "relative",
                }}
              >
                <Logo />
                {/*Rt button  */}
                <CustomIconButton
                  style={{
                    position: "absolute",
                    bottom: "35px",
                    right: "-30px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        background: "black",
                        width: "2px",
                        height: "15px",
                      }}
                    ></span>
                    <ArrowLeft size={"20px"} color="black" />
                  </div>
                </CustomIconButton>
              </Box>
              <VStack
                as={"ul"}
                display="flex"
                alignItems={"start"}
                flexDirection="column"
                gap="8px"
              >
                {menuItems.map((item) => (
                  <MenuItem key={item.text} item={item} />
                ))}
              </VStack>
            </Box>
          </ScrollArea.Content>
          <ScrollArea.Scrollbar />
        </ScrollArea.Viewport>
      </ScrollArea.Root>
      {/* Sidebar - desktop */}

      {/* Drawer -mobile */}
      <Drawer.Root placement="start">
        <Drawer.Trigger asChild>
          {/* Mobile menu button */}
          <Box
            display={{ base: "block", md: "none" }}
            position="fixed"
            top="16px"
            right="16px"
            zIndex={1100}
          >
            <CustomIconButton>
              <HamburgerMenu color="gray" />
            </CustomIconButton>
          </Box>
        </Drawer.Trigger>
        <Drawer.Backdrop />
        <Drawer.Content maxW="70%">
          <Drawer.Header borderBottomWidth="1px">
            <Logo />
          </Drawer.Header>
          <Drawer.Body>
            <Box display="flex" flexDirection="column" gap="8px">
              {menuItems.map((item) => (
                <MenuItem key={item.text} item={item} />
              ))}
            </Box>
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>
    </>
  );
};

export default Sidebar;
