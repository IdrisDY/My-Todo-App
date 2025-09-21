import { IconButton } from "@chakra-ui/react";
import { Add } from "iconsax-reactjs";
import React from "react";
import { CreateTaskDialog } from "./createTodoDialog";

const CreateTaskDialogTrigger = () => {
  return (
    <CreateTaskDialog
      triggerDialogComponent={
        <IconButton variant={"ghost"}>
          <Add />
        </IconButton>
      }
    />
  );
};

export default CreateTaskDialogTrigger;
