import CustomIconButton from "@/components/ui/icon-button";
import { fc } from "@/components/ui/snippet";
import { Box, HStack, Text } from "@chakra-ui/react";
import { Flag, More } from "iconsax-reactjs";
import React, { FC } from "react";
import TodoMenu from "./todo-menu";
import { TodoContextType, useTodos } from "@/app/contexts/todoContext";
import SelectStatus from "./selects/select-status";
import { Todo } from "./types";

const PriorityItem: FC<{
  onClick?: () => void;
  todo?: Todo;
  showMoreButton?: boolean;
}> = ({ todo, showMoreButton = true }) => {
  const onEdit = () => {};
  const onDelete = () => {
    dispatch({ type: "DELETE", payload: { id: todo?.id as number } });
  };
  const { dispatch } = useTodos() as TodoContextType;
  const changeStatus = (status: Todo["status"]) => {
    console.log(status);
    dispatch({
      type: "CHANGE_STATUS",
      payload: {
        id: todo?.id as number,
        status: status,
        activeTab: todo?.status as Todo["status"],
      },
    });
  };
  let resolvedColor: string;
  switch (todo?.priority) {
    case "Important":
      resolvedColor = "#F6BE38";
      break;
    case "Urgent":
      resolvedColor = "#FF515D";
      break;
    case "Medium":
      resolvedColor = "#75C5C1";
      break;
    default:
      resolvedColor = "gray";
  }

  return (
    <Box
      w={"full"}
      flexDirection={{ base: "column", md: "row" }}
      {...fc}
      alignItems={{ base: "start", lg: "center" }}
    >
      <HStack>
        <Flag variant="Bold" color={resolvedColor} />
        <Text>{todo?.priority}</Text>
      </HStack>
      {showMoreButton && (
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={".3em"}
          minW={"150px"}
        >
          <Box maxW={{ base: "200px", md: "150px", lg: "50px" }}>
            <SelectStatus
              onSelect={changeStatus}
              value={todo?.status as Todo["status"]}
            />
          </Box>

          <TodoMenu id={todo?.id} onEdit={onEdit} onDelete={onDelete} />
        </Box>
      )}{" "}
    </Box>
  );
};

export default PriorityItem;
