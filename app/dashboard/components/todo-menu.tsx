import {
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
  IconButton,
} from "@chakra-ui/react";
import { More } from "iconsax-reactjs";

type TodoMenuProps = {
  onEdit: () => void;
  onDelete: () => void;
  onList?: () => void;
};

const TodoMenu = ({ onEdit, onDelete, onList }: TodoMenuProps) => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <IconButton aria-label="More actions" variant="ghost" size="sm">
          <More size={18} />
        </IconButton>
      </Menu.Trigger>

      <Menu.Positioner>
        <Menu.Content>
          <Menu.Item value="edit" onClick={onEdit}>
            Edit
          </Menu.Item>
          <Menu.Item value="delete" onClick={onDelete}>
            Delete
          </Menu.Item>
          <Menu.Item value="list" onClick={onList}>
            List
          </Menu.Item>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};

export default TodoMenu;
