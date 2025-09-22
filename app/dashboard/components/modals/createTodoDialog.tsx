import { CustomDialog } from "@/components/ui/dialog";
import {
  Input,
  Textarea,
  Stack,
  Fieldset,
  Field,
  DialogOpenChangeDetails,
  GridItem,
} from "@chakra-ui/react";
import SelectStatus from "../selects/select-status";
import { useEffect, useState } from "react";
import UserSelect from "../selects/user-select";
import SelectPriority from "../selects/priority-select";
import CustomButton from "@/components/ui/button";
import { Priority, Todo } from "../types";
import { TodoContextType, useTodos } from "@/app/contexts/todoContext";

export const CreateTaskDialog = ({
  triggerDialogComponent,
  open,
  onOpenChange,
  initialData,
}: {
  open: boolean;
  onOpenChange: (value: boolean) => void;
  initialData?: Todo;
  triggerDialogComponent?: React.ReactNode;
}) => {
  const [form, setForm] = useState<Todo & { description?: string }>({
    name: "",
    date: "",
    assignee: [],
    priority: "Medium",
    status: "todo",
    description: "",
  });
  useEffect(() => {
    setForm(initialData as Todo);
  }, [initialData]);

  const { dispatch } = useTodos() as TodoContextType;

  const handleSubmit = () => {
    dispatch({ type: "ADD", payload: { ...form, id: Math.random() * 10 } });
    setForm({
      name: "",
      date: "",
      assignee: [],
      priority: "Medium",
      status: "todo",
    });
    onOpenChange(false);
  };

  return (
    <CustomDialog
      open={open}
      onOpenChange={(details) => onOpenChange(details.open)}
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
              value={form?.name}
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
              value={form?.status}
              onSelect={(status: Todo["status"]) =>
                setForm(
                  (prev): Todo => ({
                    ...prev,
                    status: status as Todo["status"],
                  })
                )
              }
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
              value={form?.date}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, date: e.target.value }))
              }
            />
          </Field.Root>

          {/* Assignees */}
          <Field.Root>
            <Field.Label>Assignees</Field.Label>
            <UserSelect
              value={form?.assignee}
              onSelect={(user) =>
                setForm(
                  (prev): Todo => ({
                    ...prev,
                    assignee: [...prev.assignee, user],
                  })
                )
              }
            />
          </Field.Root>

          {/* Priority */}
          <Field.Root>
            <Field.Label>Priority</Field.Label>
            <SelectPriority
              value={form?.priority}
              onSelect={(priority) =>
                setForm((prev): Todo => ({ ...prev, priority }))
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
              value={form?.description}
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
