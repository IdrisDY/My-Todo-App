import { Box, Menu, HStack, Icon } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { statusTabs } from "../common/tabs";
import StatusItem from "../status-item";
import { Check } from "iconsax-reactjs";
import { Todo } from "../types";
import { StatusItemProps } from "@/components/types";

const SelectStatus = ({
  onSelect,
  value,
}: {
  value: string;
  onSelect?: (term: Todo["status"]) => void;
}) => {
  const [selectedItem, setSelectedItem] = useState<StatusItemProps | null>(
    null
  );
  // Update value from props
  useEffect(() => {
    if (value) {
      const item = statusTabs.find((item) => item.value === value);
      setSelectedItem(item || null);
    } else {
      setSelectedItem(statusTabs[0] || null);
    }
  }, [value]);

  const handleSelect = (item: statusTabs) => {
    setSelectedItem(item);
    onSelect?.(item?.value);
  };

  return (
    <Box w={"full"}>
      <Menu.Root>
        <Menu.Trigger as={"div"} asChild>
          <Box rounded="full" justifyContent="space-between" w="full">
            {/* Preview */}
            <HStack w={"full"} spaceX={2}>
              <StatusItem isInSelect item={selectedItem as StatusItemProps} />
            </HStack>
          </Box>
        </Menu.Trigger>

        <Menu.Positioner>
          {/* Show Menu List */}
          <Menu.Content minW="180px" rounded="md" shadow="md" p={1}>
            {statusTabs.map((item) => (
              <Menu.Item
                key={item.value}
                value={item.value}
                onClick={() => {
                  handleSelect(item);
                }}
              >
                <HStack spaceX={2} justify="space-between" w="full">
                  <StatusItem isInSelect item={item} />
                  {selectedItem?.value === item.value && (
                    <Icon as={Check} boxSize={4} />
                  )}
                </HStack>
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Menu.Root>
    </Box>
  );
};

export default SelectStatus;
