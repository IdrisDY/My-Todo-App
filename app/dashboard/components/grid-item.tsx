import { Text, Box, VStack } from "@chakra-ui/react";
import React, { FC } from "react";
import { Todo } from "./types";
import { Calendar, ProfileCircle } from "iconsax-reactjs";
import AvatarCircles from "./avatar-circles";
import PriorityItem from "./priority-item";
import { TodoContextType, useTodos } from "@/app/contexts/todoContext";
import { fc } from "@/components/ui/snippet";

const GridItem: FC<{ item: Todo }> = ({ item }) => {
  const { dispatch } = useTodos() as TodoContextType;
  return (
    <VStack
      w={"full"}
      alignItems={"stretch"}
      bg={"white"}
      padding={".9em"}
      borderRadius={"base"}
    >
      {/* Name */}
      <Text fontWeight={600} color={"text"}>
        {item.name ?? "-- --"}
      </Text>
      {/* Date */}
      <Box display={"flex"} gap={".5em"}>
        {" "}
        <Calendar /> {item.date}{" "}
      </Box>
      {/* Avatar Cricle */}
      <Box display={"flex"} alignItems={"center"} gap={".5em"}>
        {" "}
        <ProfileCircle /> <AvatarCircles images={item.assignee} />{" "}
      </Box>
      <Box {...fc}>
        {" "}
        <PriorityItem todo={item} showMoreButton />{" "}
      </Box>
    </VStack>
  );
};

export default GridItem;
