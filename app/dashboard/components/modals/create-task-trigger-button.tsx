import { IconButton } from "@chakra-ui/react";
import { Add } from "iconsax-reactjs";
import React from "react";
import { CreateTaskDialog } from "./createTodoDialog";
import { Todo } from "../types";

const CreateTaskDialogTrigger = ({ status }: { status: Todo["status"] }) => {
  return (
    <CreateTaskDialog
      initialData={{
        status: status,
        name: "",
        date: "",
        assignee: [],
        priority: "Medium",
      }}
      triggerDialogComponent={
        <IconButton variant={"ghost"}>
          <Add />
        </IconButton>
      }
    />
  );
};

export default CreateTaskDialogTrigger;
