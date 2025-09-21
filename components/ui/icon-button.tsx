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
      border={"1px solid"}
      _hover={{
        scale: 1.2,
        borderColor: "primary",
        translateY: "2",
        transitionDuration: ".5s",
        transitionBehavior: "normal",
        transition: "transform",
      }}
      borderColor={"gray.300"}
      borderRadius={isRound ? "30px" : "md"}
      bg={"cream"}
      paddingBlock={"12px"}
      paddingInline={"8px"}
      {...props}
    >
      {children}
    </IconButton>
  );
};

export default CustomIconButton;
