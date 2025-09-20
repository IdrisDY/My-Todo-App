"use client";
import React from "react";
import { CustomMenuItemProps } from "../types";
import Link from "next/link";
import { Link as ChakraLink } from "@chakra-ui/react";

const MenuItem = ({ icon, path, text }: CustomMenuItemProps) => {
  return (
    <ChakraLink _hover={{ bg: "primary" }} asChild>
      <Link className="" href={path}>
        {icon}
        <span>{text}</span>
      </Link>
    </ChakraLink>
  );
};

export default MenuItem;
