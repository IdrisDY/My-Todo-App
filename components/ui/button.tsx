import { Button, ButtonProps } from "@chakra-ui/react";
import React from "react";

const CustomButton = ({
  children,
  brand,
  ...props
}: {
  children: React.ReactNode;
  props: ButtonProps;
  brand: "p" | "s";
}) => {
  return (
    <Button bg={brand == "p" ? "primary" : "secondary"} {...props}>
      {children}
    </Button>
  );
};

export default CustomButton;
