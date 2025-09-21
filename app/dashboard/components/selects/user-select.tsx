import {
  Avatar,
  Box,
  Button,
  HStack,
  Icon,
  Input,
  Menu,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Check } from "iconsax-reactjs";
import { useState } from "react";

type User = {
  id: number;
  name: string;
  avatar: string;
};

const users: User[] = [
  { id: 1, name: "Idris Adekunle", avatar: "/images/user1.png" },
  { id: 1, name: "Disu Ade", avatar: "/images/user2.png" },
];

const UserSelect = ({ onSelect }: { onSelect: (term: User) => void }) => {
  const [selected, setSelected] = useState<User | null>(null);
  const [query, setQuery] = useState("");

  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Box>
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button
            variant="outline"
            size="sm"
            rounded="full"
            justifyContent="flex-start"
            w="200px"
          >
            {selected ? (
              <HStack spaceX={2}>
                {/* <Avatar src={selected.avatar} size="2xs" /> */}
                <Text>{selected.name}</Text>
              </HStack>
            ) : (
              <Text color="gray.500">Select a user</Text>
            )}
          </Button>
        </Menu.Trigger>

        <Menu.Positioner>
          <Menu.Content
            minW="250px"
            maxH="300px"
            overflowY="auto"
            rounded="md"
            shadow="md"
            p={2}
          >
            {/* Search input */}
            <Box px={1} pb={2}>
              <Input
                size="sm"
                placeholder="Search users..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </Box>

            {/* User list */}
            <VStack align="stretch" spaceY={1}>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <Menu.Item
                    value={user.id.toString()}
                    key={user.id}
                    onClick={() => {
                      setSelected(user);
                      onSelect(user);
                    }}
                  >
                    <HStack spaceX={3} justify="space-between" w="full">
                      <HStack spaceX={2}>
                        {/* <Avatar.Root src={user.avatar} size="2xs" /> */}
                        <Text fontSize="sm">{user.name}</Text>
                      </HStack>
                      {selected?.id === user.id && (
                        <Icon as={Check} boxSize={4} />
                      )}
                    </HStack>
                  </Menu.Item>
                ))
              ) : (
                <Text fontSize="sm" px={2} py={3} color="gray.500">
                  No users found
                </Text>
              )}
            </VStack>
          </Menu.Content>
        </Menu.Positioner>
      </Menu.Root>
    </Box>
  );
};

export default UserSelect;
