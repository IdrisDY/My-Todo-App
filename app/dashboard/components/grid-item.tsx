import { Text, Box, VStack } from "@chakra-ui/react";
import React, { FC } from "react";
import { Todo } from "./types";
import { Calendar, ProfileCircle } from "iconsax-reactjs";
import AvatarCircles from "./avatar-circles";
import PriorityItem from "./priority-item";
import { useTodos } from "@/app/contexts/todoContext";

const GridItem: FC<{ item: Todo }> = ({ item }) => {
  return (
    <VStack
      alignItems={"stretch"}
      bg={"white"}
      padding={".9em"}
      borderRadius={"base"}
    >
      {/* Name */}
      <Text fontWeight={600} color={"text"}>
        {item.name}
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
      <Box>
        {" "}
        <PriorityItem
          showMoreButton={false}
          item={{ text: item.priority }}
        />{" "}
      </Box>
    </VStack>
  );
};

export default GridItem;
