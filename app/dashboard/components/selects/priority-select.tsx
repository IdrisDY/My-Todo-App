import { Box, Menu, Button, HStack, Text, Icon } from "@chakra-ui/react";
import { useState } from "react";
import { Check } from "iconsax-reactjs";
import PriorityItem from "../priority-item";
import { Priority } from "../types";

const SelectPriority = ({
  onSelect,
  value,
}: {
  value: Priority;
  onSelect: (term: Priority) => void;
}) => {
  const priorityItems: Priority[] = ["Medium", "Important", "Urgent"];
  const [selected, setSelected] = useState<Priority>(value || priorityItems[0]);

  return (
    <Box>
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button
            variant="outline"
            size="sm"
            rounded="full"
            justifyContent="space-between"
            w="150px"
          >
            {/* Preview */}
            <HStack spaceX={2}>
              <PriorityItem showMoreButton={false} item={{ text: selected }} />
            </HStack>
          </Button>
        </Menu.Trigger>

        <Menu.Positioner>
          {/* Show Menu List */}
          <Menu.Content minW="180px" rounded="md" shadow="md" p={1}>
            {priorityItems.map((item) => (
              <Menu.Item
                key={item}
                value={item}
                onClick={() => {
                  setSelected(item);
                  onSelect(item);
                }}
              >
                <HStack spaceX={2} justify="space-between" w="full">
                  <PriorityItem showMoreButton={false} item={{ text: item }} />
                  {selected === item && <Icon as={Check} boxSize={4} />}
                </HStack>
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Menu.Root>
    </Box>
  );
};

export default SelectPriority;
