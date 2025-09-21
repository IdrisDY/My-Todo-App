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

export const CreateTaskDialog = ({
  triggerDialogComponent,
}: {
  triggerDialogComponent: React.ReactNode;
}) => {
  return (
    <CustomDialog
      triggerComponent={triggerDialogComponent}
      footer={
        <>
          <Button variant="outline">Cancel</Button>
          <Button colorScheme="teal">Create Task</Button>
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

          <Field.Root>
            <Field.Label>Status</Field.Label>
            <NativeSelect.Root>
              <NativeSelect.Field name="status" defaultValue="todo">
                <option value="todo">To Do</option>
                <option value="inprogress">In Progress</option>
                <option value="complete">Complete</option>
              </NativeSelect.Field>
              <NativeSelect.Indicator />
            </NativeSelect.Root>
          </Field.Root>

          {/* Assignees */}
          <Field.Root>
            <Field.Label>Assignees</Field.Label>
            <Input name="assignees" placeholder="Select or type a name" />
          </Field.Root>

          {/* Priority */}
          <Field.Root>
            <Field.Label>Priority</Field.Label>
            <NativeSelect.Root>
              <NativeSelect.Field name="priority" defaultValue="medium">
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </NativeSelect.Field>
              <NativeSelect.Indicator />
            </NativeSelect.Root>
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
