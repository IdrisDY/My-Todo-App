"use client";
import React from "react";
import { Input, InputProps, InputGroup } from "@chakra-ui/react";
import { SearchNormal } from "iconsax-reactjs";

type CustomInputProps = {
  variant?: "default" | "search";
  placeholder?: string;
  startIcon?: React.ReactNode;
} & InputProps;

const CustomInput: React.FC<CustomInputProps> = ({
  variant = "default",
  placeholder,
  startIcon,
  ...props
}) => {
  const resolvedStartIcon =
    variant === "search" ? (
      <SearchNormal size="18" style={{ marginLeft: "8px" }} />
    ) : (
      startIcon
    );

  return (
    <InputGroup startElement={resolvedStartIcon}>
      <Input
        bg="gray.300"
        placeholder={placeholder}
        pl={resolvedStartIcon ? "2.5rem" : "0.75rem"}
        border="1px"
        borderColor="gray.300"
        _hover={{ borderColor: "gray.400" }}
        _focusVisible={{ borderColor: "gray.400" }}
        {...props}
      />
    </InputGroup>
  );
};

export { CustomInput };
