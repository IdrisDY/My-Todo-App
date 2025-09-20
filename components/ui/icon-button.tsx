import { IconButton, IconButtonProps } from "@chakra-ui/react";
import React from "react";

const CustomIconButton = ({
  children,
  isRound = false,
  ...props
}: {
  children: React.ReactNode;
  isRound: boolean;
  props: IconButtonProps;
}) => {
  return (
    <IconButton
      border={"brand.50"}
      borderRadius={isRound ? "30px" : "md"}
      bg={"cream"}
      {...props}
    >
      {children}
    </IconButton>
  );
};

export default CustomIconButton;
