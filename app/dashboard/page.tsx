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
  SimpleGrid,
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
  ToggleOnCircle,
} from "iconsax-reactjs";
import React, { useState } from "react";
import StatusItem from "./components/status-item";
import { CustomTable } from "@/components/ui/table";
import PriorityItem from "./components/priority-item";
import AvatarCircles from "./components/avatar-circles";
import { Todo, TodoStatus, ViewMode } from "./components/types";
import { TodoContextType, useTodos } from "../contexts/todoContext";
import { CreateTaskDialog } from "./components/modals/createTodoDialog";
import { statusTabs } from "./components/common/tabs";
import HeaderButtons from "./components/header-buttons";
import GridListButtons from "./components/grid-list-buttons";

const Dashboard = () => {
  const {
    todoState: { todos, filtered },
    dispatch,
  } = useTodos() as TodoContextType;
  const [activeTab, setActiveTab] = useState<TodoStatus>("todo");
  const [search, setSearch] = useState("");
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
      render: (row: any) => (row.priority ? <PriorityItem todo={row} /> : null),
    },
  ];
  const [viewMode, setViewMode] = useState<ViewMode>("list");
  const dispatchSearch = (query?: string, status?: Todo["status"]) => {
    dispatch({
      type: "SEARCH",
      payload: {
        query: query ?? "",
        status: status ?? activeTab,
      },
    });
  };
  const handleSearch = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearch(e.target.value);
    dispatchSearch(e.target.value);
  };

  const handleTabChange = (status: TodoStatus) => {
    setActiveTab(status as TodoStatus);
    dispatchSearch(search, status);
  };
  const handleSetViewMode = (term: ViewMode) => {
    setViewMode(term);
    if (term === "grid") {
      dispatch({
        type: "RESET",
      });
    }
  };
  return (
    <Container minH={"100vh"} borderRadius={"10px"} bg={"white"} color={"base"}>
      <Box
        as={"section"}
        borderBottom={"1px solid"}
        padding={"1.25em"}
        w={"full"}
        flexDir={{ base: "column", lg: "row" }}
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
        <HeaderButtons />
      </Box>
      {/* Search Section */}
      <VStack
        spaceY={".8px"}
        display={"flex"}
        alignItems={"stretch"}
        padding={"1.25em"}
      >
        <Box
          padding={".7em"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          borderRadius={"base"}
          bg={"green.50"}
          gap={"1em"}
          flexDirection={{ base: "column", md: "row" }}
        >
          {/* Search */}
          <CustomInput
            onChange={handleSearch}
            maxW={"300px"}
            h={"40px"}
            bg={"white"}
            variant={"search"}
            placeholder="Search For Todo"
          />
          {/* Grid , List buttons */}
          <GridListButtons onClick={(term) => handleSetViewMode(term)} />
        </Box>
        {/* Status Tabs */}
        <Box bg={"cream"} padding={".7em"} borderRadius={"base"} as={"section"}>
          <Box
            display={{ base: "grid", lg: "flex" }}
            gridTemplateColumns={{ base: "1", md: "2" }}
            flexWrap={{ base: "wrap", lg: "nowrap" }}
            w={{ base: "100%", lg: "100%" }}
            gap={".5em"}
            spaceX={{ base: "0", lg: ".8em" }}
          >
            {statusTabs?.map((item) => (
              <StatusItem
                isActive={item.value === activeTab}
                viewMode={viewMode}
                key={item.text}
                item={item}
                onClick={(term: Todo["status"]) => handleTabChange(term)}
              />
            ))}
          </Box>
        </Box>
        {/* Table Section */}
        {viewMode === "list" && (
          <Box as={"section"}>
            <CustomTable columns={columns} data={filtered} />
          </Box>
        )}{" "}
      </VStack>
    </Container>
  );
};

export default Dashboard;
