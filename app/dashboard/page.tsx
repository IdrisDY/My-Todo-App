"use client";
import { StatusItemProps } from "@/components/types";
import CustomButton from "@/components/ui/button";
import CustomIconButton from "@/components/ui/icon-button";
import { CustomInput } from "@/components/ui/input";
import {
  Container,
  Box,
  Text,
  HStack,
  VStack,
  Stack,
  Avatar,
  Badge,
  Button,
} from "@chakra-ui/react";
import {
  AddCircle,
  ArrowCircleLeft2,
  ArrowLeft2,
  Calendar,
  Export,
  ExportCurve,
  RowHorizontal,
  RowVertical,
  Sort,
  Status,
  TaskSquare,
  TickCircle,
  ToggleOnCircle,
} from "iconsax-reactjs";
import React, { useState } from "react";
import StatusItem from "./components/status-item";
import { CustomTable } from "@/components/ui/table";
import PriorityItem from "./components/priority-item";
import AvatarCircles from "./components/avatar-circles";
import { TodoStatus, ViewMode } from "./components/types";
import { useTodos } from "../contexts/todoContext";
import { CreateTaskDialog } from "./components/modals/createTodoDialog";

const Dashboard = () => {
  const { todos } = useTodos();
  const [todo, progress, completed] = [
    { bg: "#CFB7E8", alt: "#F9F3FF", txt: "black" },
    { bg: "#F6BE38", alt: "#FBF4E4", txt: "black" },
    { bg: "#75C5C1", alt: "#E9F5F7", txt: "black" },
  ];
  const [activeTab, setActiveTab] = useState<TodoStatus>("todo");
  const statusTabs: Omit<StatusItemProps, "onClick">[] = [
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
      text: "Complete",
      value: "completed",
      count: 20,
      color: "#E9F5F7",
    },
  ];

  const columns = [
    {
      key: "name",
      header: "Name",
      render: (row: any) => (
        <Stack direction="row" align="center">
          {row.name}
        </Stack>
      ),
    },
    { key: "date", header: "Date" },
    {
      key: "assignee",
      header: "Assignee",
      render: (row: any) => <AvatarCircles images={row.assignee} />,
    },
    {
      key: "priority",
      header: "Priority",
      render: (row: any) =>
        row.priority ? <PriorityItem item={{ text: row.priority }} /> : null,
    },
  ];
  const [viewMode, setViewMode] = useState<ViewMode>("list");
  return (
    <Container minH={"100vh"} borderRadius={"10px"} bg={"white"} color={"base"}>
      <Box
        as={"section"}
        borderBottom={"1px solid"}
        padding={"1.25em"}
        w={"full"}
        justifyContent={"space-between"}
        borderColor={"gray.300"}
        display={"flex"}
      >
        {/* Back Button and Name */}
        <Box display={"flex"} alignItems={"center"} gap={"2.225rem"}>
          <CustomIconButton
            bg={"none"}
            borderColor={"gray.300"}
            borderRadius={"30px"}
          >
            <ArrowCircleLeft2 size={"5em"} color="black" />
          </CustomIconButton>
          <Text as="h1" color={"black"} fontSize={"7.5"} fontWeight={700}>
            Afdeling Kwaliteit
          </Text>
        </Box>
        {/* RIght side buttons */}
        <HStack spaceX={".9"}>
          <CustomIconButton>
            <ToggleOnCircle size={"20px"} color="black" />
          </CustomIconButton>
          {/* Sort Icon */}
          <CustomIconButton>
            <Sort size={"20px"} color="black" />
          </CustomIconButton>
          {/* Calenddar */}
          <CustomIconButton>
            <Calendar size={"20px"} color="black" />
          </CustomIconButton>
          {/* Export btn */}
          <CustomButton color="white" brand="s">
            {" "}
            <ExportCurve size={"18px"} /> Export xlsx
          </CustomButton>
          {/* Add task btn */}
          <CustomButton color={"white"} brand="p">
            {" "}
            <AddCircle size={"18px"} /> Add Task
          </CustomButton>
        </HStack>
      </Box>
      {/* Search Section */}
      <VStack spaceY={".8px"} alignItems={"stretch"} padding={"1.25em"}>
        <Box
          padding={".7em"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          borderRadius={"base"}
          bg={"green.50"}
        >
          <CustomInput
            maxW={"300px"}
            h={"40px"}
            bg={"white"}
            variant={"search"}
            placeholder="Search For Todo"
          />

          <HStack
            bg={"white"}
            padding={".4em"}
            borderRadius={"base"}
            spaceX={".4em"}
          >
            <CustomIconButton
              border={"none"}
              bg={viewMode === "grid" ? "primary" : "cream"}
              onClick={() => setViewMode("grid")}
            >
              <RowHorizontal
                size={"15px"}
                color={viewMode === "grid" ? "white" : "gray"}
              />
            </CustomIconButton>
            <CustomIconButton
              border={"none"}
              bg={viewMode === "list" ? "primary" : "cream"}
              onClick={() => setViewMode("list")}
            >
              <RowVertical
                size={"15px"}
                color={viewMode === "list" ? "white" : "gray"}
              />
            </CustomIconButton>
          </HStack>
        </Box>
        {/* Status Tabs */}
        <Box bg={"cream"} padding={".7em"} borderRadius={"base"} as={"section"}>
          <HStack spaceX={".7em"}>
            {statusTabs.map((item) => (
              <StatusItem
                isActive={item.value === activeTab}
                viewMode={viewMode}
                key={item.text}
                item={item}
                onClick={(term) => setActiveTab(term as TodoStatus)}
              />
            ))}
          </HStack>
        </Box>
        {/* Table Section */}
        {viewMode === "list" && (
          <Box as={"section"}>
            <CustomTable columns={columns} data={todos} />
          </Box>
        )}{" "}
      </VStack>
    </Container>
  );
};

export default Dashboard;
