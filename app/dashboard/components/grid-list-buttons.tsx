import React, { useState } from "react";
import { ViewMode } from "./types";
import { HStack } from "@chakra-ui/react";
import CustomIconButton from "@/components/ui/icon-button";
import { RowHorizontal, RowVertical } from "iconsax-reactjs";

const GridListButtons = ({
  onClick,
}: {
  onClick: (term: ViewMode) => void;
}) => {
  const [viewMode, setViewMode] = useState<ViewMode>("list");
  const handleViewMode = (term: ViewMode) => {
    setViewMode(term);
    onClick(term);
  };
  return (
    <HStack
      bg={"white"}
      padding={".4em"}
      borderRadius={"base"}
      spaceX={".4em"}
      w={{ base: "full", md: "fit" }}
    >
      <CustomIconButton
        border={"none"}
        bg={viewMode === "grid" ? "primary" : "cream"}
        onClick={() => handleViewMode("grid")}
      >
        <RowHorizontal
          size={"15px"}
          color={viewMode === "grid" ? "white" : "gray"}
        />
      </CustomIconButton>
      <CustomIconButton
        border={"none"}
        bg={viewMode === "list" ? "primary" : "cream"}
        onClick={() => handleViewMode("list")}
      >
        <RowVertical
          size={"15px"}
          color={viewMode === "list" ? "white" : "gray"}
        />
      </CustomIconButton>
    </HStack>
  );
};

export default GridListButtons;
