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
import {
  Calendar,
  Flag,
  ProfileCircle,
  Status,
  Stickynote,
  User,
} from "iconsax-reactjs";

const emptyForm: Todo & { description: string } = {
  name: "",
  date: "",
  assignee: [],
  priority: "Medium",
  status: "todo",
  description: "",
};
export const CreateTaskDialog = ({
  triggerDialogComponent,
  open,
  onOpenChange,
  initialData,
}: {
  open?: boolean;
  onOpenChange?: (value: boolean) => void;
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
    if (initialData) {
      setForm({
        id: initialData.id,
        name: initialData.name ?? "",
        date: initialData.date ?? "",
        assignee: initialData.assignee ?? [],
        priority: (initialData.priority as Priority) ?? "Medium",
        status: initialData.status ?? "todo",
        description: (initialData as any).description ?? "",
      });
    } else {
      setForm(emptyForm);
    }
  }, [initialData]);

  const { dispatch } = useTodos() as TodoContextType;
  // handles edit and create task
  const handleSubmit = () => {
    if (initialData) {
      dispatch({
        type: "UPDATE",
        payload: {
          id: initialData.id,
          updates: form,
        },
      });
    } else {
      dispatch({
        type: "ADD",
        payload: {
          ...form,
          id: Date.now(),
        },
      });
    }
    setForm({
      name: "",
      date: "",
      assignee: [],
      priority: "Medium",
      status: "todo",
    });
    onOpenChange?.(false);
  };

  return (
    <CustomDialog
      open={open}
      onOpenChange={(details) => onOpenChange?.(details.open)}
      triggerComponent={triggerDialogComponent}
      footer={
        <CustomButton
          w={{ base: "full", md: "30%" }}
          brand="p"
          onClick={handleSubmit}
        >
          {initialData ? "Edit Task" : "Create Task"}
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
            orientation={"horizontal"}
            display="flex"
            gap="1em"
            alignItems="center"
            flexDirection="row"
          >
            <Field.Label>
              {" "}
              <Status color="#BAC1CC" /> Status
            </Field.Label>
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
          <Field.Root orientation={"horizontal"}>
            <Field.Label>
              {" "}
              <Calendar color="#BAC1CC" /> Date
            </Field.Label>
            <Input
              paddingInline={".5em"}
              type="date"
              variant={"flushed"}
              value={form?.date}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, date: e.target.value }))
              }
            />
          </Field.Root>

          {/* Assignees */}
          <Field.Root orientation={"horizontal"}>
            <Field.Label>
              {" "}
              <ProfileCircle color="#BAC1CC" /> Assignees
            </Field.Label>
            <UserSelect
              value={form?.assignee}
              onSelect={(user) =>
                setForm(
                  (prev): Todo => ({
                    ...prev,
                    assignee: Array.from(new Set([...prev.assignee, user])),
                  })
                )
              }
            />
          </Field.Root>

          {/* Priority */}
          <Field.Root orientation={"horizontal"}>
            <Field.Label>
              {" "}
              <Flag color="#BAC1CC" /> Priority
            </Field.Label>
            <SelectPriority
              value={form?.priority}
              onSelect={(priority) =>
                setForm((prev): Todo => ({ ...prev, priority }))
              }
            />
          </Field.Root>

          {/* Description */}
          <Field.Root>
            <Field.Label>
              {" "}
              <Stickynote color="#BAC1CC" /> Description
            </Field.Label>
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
