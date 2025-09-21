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

type TodoMenuProps = {
  onEdit: () => void;
  onDelete: () => void;
};

const TodoMenu = ({ onEdit, onDelete }: TodoMenuProps) => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <IconButton aria-label="More actions" variant="ghost" size="sm">
          <More size={18} />
        </IconButton>
      </Menu.Trigger>

      <Menu.Positioner>
        <Menu.Content spaceY={".5em"} padding=".5em">
          <Menu.Item value="edit" onClick={onEdit}>
            <CreateTaskDialog
              triggerDialogComponent={
                <Box display={"flex "} gap={".5em"}>
                  <Edit size={"15px"} /> Edit
                </Box>
              }
            />
          </Menu.Item>
          <Menu.Item value="delete" color={"red"} onClick={onDelete}>
            <Trash size={"15px"} /> Delete
          </Menu.Item>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};

export default TodoMenu;
