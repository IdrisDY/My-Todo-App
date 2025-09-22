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
  { id: 2, name: "Disu Ade", avatar: "/images/user2.png" },
];

const UserSelect = ({
  onSelect,
  value,
}: {
  value: User;
  onSelect: (term: User) => void;
}) => {
  const [selected, setSelected] = useState<User[]>([]);
  const [query, setQuery] = useState("");

  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(query.toLowerCase())
  );
  const handleSelectUser = (user: User) => {
    setSelected((prev: User[]) => {
      const isSelected = prev.some((u) => u.id === user.id);
      if (isSelected) {
        return prev?.filter((u) => u.id !== user.id);
      } else {
        return [...prev, user];
      }
    });
    onSelect(user);
  };
  return (
    <Box paddingInline={".5em"}>
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button
            variant="outline"
            size="sm"
            rounded="full"
            justifyContent="flex-start"
            w="200px"
          >
            {selected?.length > 0 &&
              selected?.map((item) => (
                <HStack key={(item.id || item) as number} spaceX={2}>
                  <Avatar.Root size="2xs">
                    <Avatar.Fallback name={item.name} />
                    <Avatar.Image src={(item.avatar || item) as string} />
                  </Avatar.Root>
                  <Text>{item.name}</Text>
                </HStack>
              ))}

            {selected?.length == 0 && (
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
                filteredUsers.map((user, i) => (
                  <Menu.Item
                    value={user.id.toString()}
                    key={i}
                    onClick={() => {
                      handleSelectUser(user);
                    }}
                  >
                    <HStack spaceX={3} justify="space-between" w="full">
                      <HStack spaceX={2}>
                        <Avatar.Root size="2xs">
                          <Avatar.Fallback name={user.name} />
                          <Avatar.Image src={user.avatar} />
                        </Avatar.Root>{" "}
                        <Text fontSize="sm">{user.name}</Text>
                      </HStack>
                      {selected?.find((item) => (item.id = user.id))?.id ===
                        user.id && <Icon as={Check} boxSize={4} />}
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
