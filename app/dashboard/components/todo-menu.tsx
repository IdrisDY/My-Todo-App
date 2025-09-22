import {
  Menu,
  Box,
} from "@chakra-ui/react";
import { Edit, More, Trash } from "iconsax-reactjs";
import { CreateTaskDialog } from "./modals/createTodoDialog";
import { useState } from "react";
import { TodoContextType, useTodos } from "@/app/contexts/todoContext";

type TodoMenuProps = {
  onDelete: () => void;
  id?: string | number;
};

const TodoMenu = ({ id, onDelete }: TodoMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    todoState: { filtered },
  } = useTodos() as TodoContextType;
  const todo = filtered.find((item) => item.id === id);
  return (
    <>
      <Menu.Root>
        <Menu.Trigger asChild>
          <Box aria-label="More actions">
            <More size={18} />
          </Box>
        </Menu.Trigger>

        <Menu.Positioner>
          <Menu.Content spaceY={"1em"} padding="1em">
            {/* Edit Button */}
            <Menu.Item
              value="edit"
              onClick={() => setIsOpen(true)}
              display={"flex "}
              gap={".5em"}
            >
              <Edit size={"15px"} /> Edit
            </Menu.Item>{" "}
            {/* Delete Button */}
            <Menu.Item value="delete" color={"red"} onClick={onDelete}>
              <Trash size={"15px"} /> Delete
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Menu.Root>
      {/* Create Dialog by controlling open */}
      <CreateTaskDialog
        initialData={todo}
        open={isOpen}
        onOpenChange={(value) => setIsOpen(value)}
      />
    </>
  );
};

export default TodoMenu;
