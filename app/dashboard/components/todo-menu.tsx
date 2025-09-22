import {
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
  IconButton,
  Box,
} from "@chakra-ui/react";
import { Edit, More, Trash } from "iconsax-reactjs";
import { CreateTaskDialog } from "./modals/createTodoDialog";
import { useState } from "react";
import { TodoContextType, useTodos } from "@/app/contexts/todoContext";

type TodoMenuProps = {
  onEdit: () => void;
  onDelete: () => void;
  id?: string | number;
};

const TodoMenu = ({ onEdit, id, onDelete }: TodoMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { todos } = useTodos() as TodoContextType;
  const todo = todos.find((item) => item.id === id);
  console.log(todo);
  return (
    <>
      <Menu.Root>
        <Menu.Trigger asChild>
          <Box aria-label="More actions">
            <More size={18} />
          </Box>
        </Menu.Trigger>

        <Menu.Positioner>
          <Menu.Content spaceY={".5em"} padding=".5em">
            <Menu.Item
              value="edit"
              onClick={() => setIsOpen(true)}
              display={"flex "}
              gap={".5em"}
            >
              <Edit size={"15px"} /> Edit
            </Menu.Item>{" "}
            <Menu.Item value="delete" color={"red"} onClick={onDelete}>
              <Trash size={"15px"} /> Delete
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Menu.Root>
      <CreateTaskDialog
        initialData={todo}
        open={isOpen}
        onOpenChange={(value) => setIsOpen(value)}
      />
    </>
  );
};

export default TodoMenu;
