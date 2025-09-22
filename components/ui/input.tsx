"use client";
import React, { FC } from "react";
import {
  Input,
  InputProps,
  Textarea,
  TextareaProps,
  InputGroup,
} from "@chakra-ui/react";
import { SearchNormal } from "iconsax-reactjs";
import { CustomInputProps } from "../types";

const CustomInput: FC<CustomInputProps & (InputProps | TextareaProps)> = ({
  type = "input",
  variant = "default",
  placeholder,
  startIcon,
  rows = 4,
  ...props
}) => {
  const resolvedStartIcon =
    variant === "search" ? (
      <SearchNormal size="18" style={{ marginLeft: "15px" }} />
    ) : (
      startIcon
    );

  if (type === "textarea") {
    return (
      <InputGroup>
        <Textarea
          bg={"gray.300"}
          placeholder={placeholder}
          rows={rows}
          {...props}
        />
      </InputGroup>
    );
  }

  return (
    <InputGroup height={"fit"} startElement={resolvedStartIcon}>
      <Input
        _hover={{ border: "1px gray.400" }}
        _focusVisible={{ border: "1px gray.400" }}
        bg={"gray.300"}
        paddingLeft={"5px"}
        border={"1px"}
        borderColor={"gray.300"}
        placeholder={placeholder}
        {...props}
      />
    </InputGroup>
  );
};

export { CustomInput };
