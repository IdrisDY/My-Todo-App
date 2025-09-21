import { Button, ButtonProps } from "@chakra-ui/react";
import React from "react";

const CustomButton = ({
  children,
  brand,
  ...props
}: {
  children?: React.ReactNode;
  props?: ButtonProps;
  brand?: "p" | "s";
}) => {
  return (
    <Button
      _hover={{ scale: 1.1 }}
      paddingInline={"10px"}
      paddingBlock={"12px"}
      bg={brand == "p" ? "primary" : "secondary"}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
