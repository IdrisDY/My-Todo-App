import { Button, ButtonProps } from "@chakra-ui/react";
import React, { FC } from "react";

type CustomProps = ButtonProps & {
  children?: React.ReactNode;
  brand?: "p" | "s";
};

const CustomButton: FC<CustomProps> = ({ children, brand, ...props }) => {
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
