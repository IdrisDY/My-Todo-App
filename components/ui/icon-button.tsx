import { IconButton, IconButtonProps } from "@chakra-ui/react";
import React from "react";

type CustomIconButtonProps = IconButtonProps & {
  isRound?: boolean;
};

const CustomIconButton = ({
  children,
  isRound = false,
  ...props
}: CustomIconButtonProps) => {
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
