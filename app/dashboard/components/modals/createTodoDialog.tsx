import { CustomDialog } from "@/components/ui/dialog";
import {
  Input,
  Textarea,
  Stack,
  Fieldset,
  Field,
  DialogOpenChangeDetails,
} from "@chakra-ui/react";
import SelectStatus from "../selects/select-status";
import { useState } from "react";
import UserSelect from "../selects/user-select";
import SelectPriority from "../selects/priority-select";
import CustomButton from "@/components/ui/button";
import { Todo } from "../types";
import { TodoContextType, useTodos } from "@/app/contexts/todoContext";

export const CreateTaskDialog = ({
  triggerDialogComponent,
}: {
  triggerDialogComponent: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState<Todo>({
    name: "",
    date: "",
    assignee: [],
    priority: "Medium",
    status: "todo",
  });
  const onOpenChange = (details: DialogOpenChangeDetails) => {
    setIsOpen(details.open);
  };
  const { dispatch } = useTodos() as TodoContextType;

  const handleSubmit = () => {
    dispatch({ type: "ADD", payload: form });
    setIsOpen(false);
    setForm({
      name: "",
      date: "",
      assignee: [],
      priority: "Medium",
      status: "todo",
    });
  };

  return (
    <CustomDialog
      open={isOpen}
      onOpenChange={onOpenChange}
      triggerComponent={triggerDialogComponent}
      footer={
        <CustomButton brand="p" onClick={handleSubmit}>
          Create Task
        </CustomButton>
      }
    >
      <Fieldset.Root size="lg" maxW="md">
        <Fieldset.Content>
          {/* Task Name */}
          <Field.Root>
            <Input
              name="name"
              type="text"
              value={form.name}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, name: e.target.value }))
              }
              placeholder="Task Name"
              variant="flushed"
            />
          </Field.Root>

          {/* Status */}
          <Field.Root
            display="flex"
            gap="1em"
            alignItems="center"
            flexDirection="row"
          >
            <Field.Label>Status</Field.Label>
            <SelectStatus
              onChange={(status) => setForm((prev) => ({ ...prev, status }))}
            />
          </Field.Root>

          {/* Date */}
          <Field.Root
            display="flex"
            gap="1em"
            alignItems="center"
            flexDirection="row"
          >
            <Field.Label>Date</Field.Label>
            <Input
              paddingInline={".5em"}
              type="date"
              value={form.date}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, date: e.target.value }))
              }
            />
          </Field.Root>

          {/* Assignees */}
          <Field.Root>
            <Field.Label>Assignees</Field.Label>
            <UserSelect
              onSelect={(user) =>
                setForm((prev) => ({
                  ...prev,
                  assignee: [...prev.assignee, user],
                }))
              }
            />
          </Field.Root>

          {/* Priority */}
          <Field.Root>
            <Field.Label>Priority</Field.Label>
            <SelectPriority
              onChange={(priority) =>
                setForm((prev) => ({ ...prev, priority }))
              }
            />
          </Field.Root>

          {/* Description */}
          <Field.Root>
            <Field.Label>Description</Field.Label>
            <Textarea
              size={"xl"}
              paddingBlock={".5em"}
              paddingInline={".5em"}
              bg={"cream"}
              name="description"
              placeholder="Write something or type..."
              value={(form as any).description ?? ""}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
            />
          </Field.Root>
        </Fieldset.Content>
      </Fieldset.Root>
    </CustomDialog>
  );
};
