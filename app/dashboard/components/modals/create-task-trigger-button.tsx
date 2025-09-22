import { IconButton } from "@chakra-ui/react";
import { Add } from "iconsax-reactjs";
import React from "react";
import { CreateTaskDialog } from "./createTodoDialog";
import { Todo } from "../types";

const CreateTaskDialogTrigger = ({
  status,
  open,
  onOpenChange,
}: {
  open: boolean;
  status: Todo["status"];
  onOpenChange: (value: boolean) => void;
}) => {
  return (
    <CreateTaskDialog
      initialData={{
        status: status,
        name: "",
        date: "",
        assignee: [],
        priority: "Medium",
      }}
      open={open}
      onOpenChange={onOpenChange}
      triggerDialogComponent={
        <IconButton variant={"ghost"}>
          <Add />
        </IconButton>
      }
    />
  );
};

export default CreateTaskDialogTrigger;
