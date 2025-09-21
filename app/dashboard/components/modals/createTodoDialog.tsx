import { CustomDialog } from "@/components/ui/dialog";
import {
  Button,
  Input,
  Textarea,
  Select,
  Stack,
  Fieldset,
  Field,
  NativeSelect,
} from "@chakra-ui/react";
import SelectStatus from "../selects/select-status";
import { useState } from "react";
import UserSelect from "../selects/user-select";
import SelectPriority from "../selects/priority-select";
import CustomButton from "@/components/ui/button";

export const CreateTaskDialog = ({
  triggerDialogComponent,
}: {
  triggerDialogComponent: React.ReactNode;
}) => {
  const [date, setDate] = useState("");
  return (
    <CustomDialog
      triggerComponent={triggerDialogComponent}
      footer={
        <>
          <CustomButton brand="p">Create Task</CustomButton>
        </>
      }
    >
      <Fieldset.Root size="lg" maxW="md">
        <Fieldset.Content>
          {/* Status */}

          {/* TASK NAME */}
          <Field.Root>
            <Input
              name="Name"
              type="text"
              _placeholder={{ fontSize: "2em" }}
              placeholder="Task Name"
              variant={"flushed"}
            />
          </Field.Root>

          <Field.Root
            display={"flex"}
            gap={"1em"}
            alignItems={"center"}
            flexDirection={"row"}
          >
            <Field.Label>Status</Field.Label>
            <SelectStatus />
          </Field.Root>
          <Field.Root
            display={"flex"}
            gap={"1em"}
            alignItems={"center"}
            flexDirection={"row"}
          >
            <Field.Label>Date</Field.Label>
            <Input type="date" value={date} />
          </Field.Root>

          {/* Assignees */}
          <Field.Root>
            <Field.Label>Assignees</Field.Label>
            <UserSelect />
          </Field.Root>

          {/* Priority */}
          <Field.Root>
            <Field.Label>Priority</Field.Label>
            <SelectPriority />
          </Field.Root>

          {/* Description */}
          <Field.Root>
            <Field.Label>Description</Field.Label>
            <Textarea
              name="description"
              placeholder="Write something or type..."
            />
          </Field.Root>
        </Fieldset.Content>
      </Fieldset.Root>
    </CustomDialog>
  );
};
