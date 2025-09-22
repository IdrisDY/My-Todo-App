import { HStack, Text } from "@chakra-ui/react";
import { Add } from "iconsax-reactjs";
import React from "react";
import { CreateTaskDialog } from "./createTodoDialog";
import { Todo } from "../types";

const CreateTaskDialogTrigger = ({
  status,
  open,
  onOpenChange,
  showText = false,
}: {
  open?: boolean;
  showText?: boolean;
  status?: Todo["status"];
  onOpenChange?: (value: boolean) => void;
}) => {
  return (
    <CreateTaskDialog
      initialData={{
        status: status as Todo["status"],
        name: "",
        date: "",
        assignee: [],
        priority: "Medium",
      }}
      onOpenChange={onOpenChange}
      triggerDialogComponent={
        <HStack
          cursor={"pointer"}
          bg={"white"}
          padding={".7em"}
          borderRadius={"base"}
          minW={"full"}
        >
          <Add /> {showText && <Text> Add Task </Text>}
        </HStack>
      }
    />
  );
};

export default CreateTaskDialogTrigger;
