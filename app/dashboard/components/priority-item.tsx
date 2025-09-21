import CustomIconButton from "@/components/ui/icon-button";
import { fc } from "@/components/ui/snippet";
import { Box, HStack, Text } from "@chakra-ui/react";
import { Flag, More } from "iconsax-reactjs";
import React, { FC } from "react";
import TodoMenu from "./todo-menu";
import { TodoContextType, useTodos } from "@/app/contexts/todoContext";

type PriorityProps = {
  id: number;
  text: string;
  onClick?: () => void;
};

const PriorityItem: FC<{ item: PriorityProps; showMoreButton?: boolean }> = ({
  item,
  showMoreButton = true,
}) => {
  const onEdit = () => {};
  const onDelete = () => {
    dispatch({ type: "DELETE", payload: { id: item.id as number } });
  };
  const { dispatch } = useTodos() as TodoContextType;

  let resolvedColor: string;
  switch (item.text) {
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
    <Box {...fc}>
      <HStack>
        <Flag variant="Bold" color={resolvedColor} />
        <Text>{item.text}</Text>
      </HStack>
      {showMoreButton && <TodoMenu onEdit={onEdit} onDelete={onDelete} />}{" "}
    </Box>
  );
};

export default PriorityItem;
