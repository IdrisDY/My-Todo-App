import CustomButton from "@/components/ui/button";
import CustomIconButton from "@/components/ui/icon-button";
import { HStack } from "@chakra-ui/react";
import {
  AddCircle,
  Calendar,
  ExportCurve,
  Sort,
  ToggleOnCircle,
} from "iconsax-reactjs";
import React from "react";

const HeaderButtons = () => {
  return (
    <>
      <HStack spaceX={".9"}>
        <CustomIconButton>
          <ToggleOnCircle size={"20px"} color="black" />
        </CustomIconButton>
        {/* Sort Icon */}
        <CustomIconButton>
          <Sort size={"20px"} color="black" />
        </CustomIconButton>
        {/* Calenddar */}
        <CustomIconButton>
          <Calendar size={"20px"} color="black" />
        </CustomIconButton>
        {/* Export btn */}
        <CustomButton color="white" brand="s">
          {" "}
          <ExportCurve size={"18px"} /> Export xlsx
        </CustomButton>
        {/* Add task btn */}
        <CustomButton color={"white"} brand="p">
          {" "}
          <AddCircle size={"18px"} /> Add Task
        </CustomButton>
      </HStack>
    </>
  );
};

export default HeaderButtons;
