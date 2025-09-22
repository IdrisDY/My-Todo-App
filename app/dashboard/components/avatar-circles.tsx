import { Avatar, Box, For, GridItem, HStack, Text } from "@chakra-ui/react";

const AvatarCircles = ({ images }: { images: string[] }) => {
  return (
    <HStack>
      {images.slice(0, 2).map((img, i) => (
        <Avatar.Root
          marginLeft={i !== 0 ? "-1.5em" : ""}
          bg={"white"}
          p={".2em"}
          shadow={"sm"}
          size={i == 0 ? "md" : "sm"}
          key={i}
        >
          <Avatar.Fallback name={"U"} />
          <Avatar.Image src={img} />
        </Avatar.Root>
      ))}
      <Box
        zIndex={"2"}
        paddingInline={".3em"}
        paddingBlock={".25em"}
        bg={"white"}
        ml={"-1em"}
        rounded={"2xl"}
        shadow={"sm"}
        color={"gray.400"}
      >
        <Text
          paddingInline={".2em"}
          paddingBlock={".15em"}
          rounded={"xl"}
          bg={"pink"}
        >
          +1
        </Text>
      </Box>
    </HStack>
  );
};
export default AvatarCircles;
