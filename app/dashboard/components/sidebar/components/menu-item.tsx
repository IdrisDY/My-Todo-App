"use client";
import React, { useState } from "react";
import { CustomMenuItemProps } from "../types";
import Link from "next/link";
import { Box, Link as ChakraLink, Text } from "@chakra-ui/react";
import { ArrowDown2 } from "iconsax-reactjs";

const MenuItem = ({ item }: { item: CustomMenuItemProps }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasSubItems = item?.subItems && item?.subItems?.length > 0;
  const IconComponent = item?.icon;
  return (
    <Box w={"full"} listStyle={"none"} as={"li"}>
      {/* Main menu item */}
      <Box
        as="button"
        onClick={() => hasSubItems && setIsOpen((prev) => !prev)}
        display="flex"
        cursor={"pointer"}
        alignItems="center"
        justifyContent="space-between"
        w="100%"
        px="20px"
        py="12px"
        borderRadius="md"
        _hover={{
          color: "primary",
          bg: "gray.200",
          transition: "all 0.3s ease-in-out",
        }}
        role="group"
      >
        {/* Icon */}
        <Box display="flex" alignItems="center" gap="14px">
          <Box color={"gray.400"} _groupHover={{ color: "primary" }}>
            {IconComponent && <IconComponent />}
          </Box>
          {/* Teext */}
          <Text textAlign={"left"} fontWeight={600}>
            {item?.text}
          </Text>
        </Box>
        {/* Arrow  */}
        {hasSubItems && (
          <Box transform={isOpen ? "rotate(180deg)" : "rotate(0deg)"}>
            <ArrowDown2 color="black" size={"18px"} />
          </Box>
        )}
      </Box>

      {/* Sub items */}
      {hasSubItems && isOpen && (
        <Box pl="30px" mt="4px" display="flex" flexDirection="column" gap="6px">
          {item?.subItems?.map((sub) => (
            <ChakraLink
              asChild
              key={sub.text}
              paddingBlock={"12px"}
              paddingInline={"24px"}
              _hover={{
                color: "primary",
                bg: "gray.200",
                borderRadius: "md",
              }}
            >
              <Link href={sub.path} style={{ display: "flex", gap: "10px" }}>
                <Text textAlign={"left"}>{sub.text}</Text>
              </Link>
            </ChakraLink>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default MenuItem;
