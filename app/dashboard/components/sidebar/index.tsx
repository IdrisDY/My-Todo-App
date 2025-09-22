"use client";

import { Box, Drawer, VStack, ScrollArea } from "@chakra-ui/react";
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
      {/* Desktop Sidebar */}
      <Box
        as="nav"
        aria-label="sidebar"
        display={{ base: "none", md: "block" }}
        h="100vh"
        w="250px"
        position="fixed"
        left={0}
        top={0}
        borderRight="1px solid"
        borderColor="gray.300"
        bg="white"
      >
        {/* Logo + Collapse Button */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          p={4}
          borderBottom="1px solid"
          borderColor="gray.200"
        >
          <Logo />
          <CustomIconButton>
            <ArrowLeft size="20px" color="black" />
          </CustomIconButton>
        </Box>

        {/* Scrollable Menu */}
        <ScrollArea.Root
          size="sm"
          variant="hover"
          paddingBottom={"2em"}
          style={{ height: "calc(100vh - 64px)" }}
        >
          <ScrollArea.Viewport>
            <VStack
              as="ul"
              align="start"
              paddingBottom={"4em"}
              spaceY={2}
              paddingInline={4}
              paddingTop={4}
            >
              {menuItems.map((item) => (
                <MenuItem key={item.text} item={item} />
              ))}
            </VStack>
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar />
        </ScrollArea.Root>
      </Box>

      {/* Mobile Drawer */}
      <Drawer.Root placement="start">
        <Drawer.Trigger asChild>
          <Box
            display={{ base: "block", md: "none" }}
            position="fixed"
            top="16px"
            left="16px"
            zIndex={1100}
          >
            <CustomIconButton>
              <HamburgerMenu color="gray" />
            </CustomIconButton>
          </Box>
        </Drawer.Trigger>
        <Drawer.Backdrop />
        <Drawer.Content
          minH={"100vh"}
          position={"fixed"}
          bottom={"0"}
          maxW="70%"
        >
          <Drawer.Header borderBottomWidth="1px">
            <Logo />
          </Drawer.Header>
          <Drawer.Body>
            <ScrollArea.Root size="sm" style={{ height: "100%" }}>
              <ScrollArea.Viewport>
                <VStack align="start" spaceY={2}>
                  {menuItems.map((item) => (
                    <MenuItem key={item.text} item={item} />
                  ))}
                </VStack>
              </ScrollArea.Viewport>
              <ScrollArea.Scrollbar />
            </ScrollArea.Root>
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>
    </>
  );
};

export default Sidebar;
