import { Box, Menu, Button, HStack, Text, Icon } from "@chakra-ui/react";
import { useState } from "react";
import { statusTabs } from "./common/tabs";
import StatusItem from "./status-item";
import { Check } from "iconsax-reactjs";

const SelectStatus = () => {
  const [selected, setSelected] = useState(statusTabs[0]);

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
              <StatusItem isInSelect item={selected} />
            </HStack>
          </Button>
        </Menu.Trigger>

        <Menu.Positioner>
          {/* Show Menu List */}
          <Menu.Content minW="180px" rounded="md" shadow="md" p={1}>
            {statusTabs.map((item) => (
              <Menu.Item
                key={item.value}
                value={item.value}
                onClick={() => setSelected(item)}
              >
                <HStack spaceX={2} justify="space-between" w="full">
                  <StatusItem isInSelect item={item} />
                  {selected.value === item.value && (
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
