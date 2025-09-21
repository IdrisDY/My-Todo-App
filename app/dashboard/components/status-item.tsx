import { StatusItemProps } from "@/components/types";
import { fc } from "@/components/ui/snippet";
import { Box, HStack, IconButton, Text, VStack } from "@chakra-ui/react";
import React, { FC } from "react";
import { ViewMode } from "./types";
import { Add } from "iconsax-reactjs";
import GridItem from "./grid-item";
import { useTodos } from "@/app/contexts/todoContext";
import { CreateTaskDialog } from "./modals/createTodoDialog";
import CreateTaskDialogTrigger from "./modals/create-task-trigger-button";

const StatusItem: FC<{
  isActive?: boolean;
  isInSelect?: boolean;
  viewMode?: ViewMode;
  onClick?: (term: string) => void;
  item: StatusItemProps;
}> = ({ viewMode = "list", isInSelect, item, isActive, onClick }) => {
  const Icon = item.icon;
  const { todos } = useTodos();
  const todoItems = todos.filter((todo) => todo.status == item.value);

  if (viewMode === "grid") {
    return (
      <Box w={"full"}>
        {/*Container seperating add button from plain texts  */}

        <HStack
          paddingTop={".4em"}
          paddingBottom={".8em"}
          paddingInline={".4em"}
          bg={item.color}
          {...fc}
          gap={".7em"}
        >
          <Box gap={".7em"} display={"flex"}>
            <Box
              borderRadius={"base"}
              padding={".5em"}
              display={"flex"}
              gap={".6em"}
              bg={"white"}
            >
              <span>
                {
                  <item.icon
                    variant="Bold"
                    color={item.themeColor?.bg}
                  ></item.icon>
                }
              </span>
              <Text> {item.text} </Text>
            </Box>

            <Box bg={"white"} borderRadius={"base"} padding={".5em"}>
              <Text>({item.count})</Text>
            </Box>
          </Box>

          <Box bg={"white"} borderRadius={"base"} as={"div"}>
            <CreateTaskDialogTrigger />
          </Box>
        </HStack>

        <VStack as={"ul"}></VStack>
        {todoItems?.map((todo) => {
          return (
            <Box as="li">
              <GridItem item={todo} />
            </Box>
          );
        })}
      </Box>
    );
  }

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
      w={{ base: "100%", lg: "fit-content" }}
      borderRadius={"base"}
      bg={isActive ? item.themeColor?.bg : "white"}
      flexWrap={"wrap"}
      minW={{ base: "30%", lg: "200px" }}
      {...fc}
      padding={".7em"}
      onClick={() => onClick?.(item.value)}
      paddingRight={".3em"}
    >
      <Box {...fc} gap={".7em"} justifyContent={"start"}>
        <Box color={isActive ? item.themeColor?.alt : item.themeColor?.bg}>
          <Icon
            color={isActive ? item.themeColor?.alt : item.themeColor?.bg}
            variant="Bold"
          />
        </Box>
        <Text> {item.text} </Text>
      </Box>

      {!isInSelect && (
        <Text
          padding={".5em"}
          borderRadius={"base"}
          color={isActive ? item.themeColor?.txt : item.themeColor?.txt}
          bg={isActive ? item.themeColor?.alt : item.themeColor?.bg}
        >
          ({item.count})
        </Text>
      )}
    </Box>
  );
};

export default StatusItem;
