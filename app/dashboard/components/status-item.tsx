import { StatusItemProps } from "@/components/types";
import { fc } from "@/components/ui/snippet";
import { Box, Text } from "@chakra-ui/react";
import React, { FC } from "react";

const StatusItem: FC<{ item: StatusItemProps }> = ({ item }) => {
  return (
    <Box
      as={"button"}
      cursor={"pointer"}
      _hover={{
        scale: 1.05,
        shadow: "md",
        borderLeft: "4px solid",
        borderColor: "primary",
      }}
      borderRadius={"base"}
      bg={"white"}
      flexWrap={"wrap"}
      minW={{ base: "30%", lg: "200px" }}
      {...fc}
      padding={".7em"}
      paddingRight={".3em"}
    >
      <Box {...fc} gap={".7em"} justifyContent={"start"}>
        <span>{item.icon}</span>
        <Text> {item.text} </Text>
      </Box>

      <Text padding={".5em"} borderRadius={"base"} bg={item.color}>
        ({item.count})
      </Text>
    </Box>
  );
};

export default StatusItem;
