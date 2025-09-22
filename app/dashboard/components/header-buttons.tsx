import CustomButton from "@/components/ui/button";
import CustomIconButton from "@/components/ui/icon-button";
import { Box, HStack, Stack } from "@chakra-ui/react";
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
      <Stack
        direction={{ base: "column", md: "row" }}
        spaceX={{ base: 2, md: 4 }}
        align="center"
        flexWrap="wrap"
      >
        <HStack spaceX={".5em"}>
          <CustomIconButton>
            <ToggleOnCircle size={"20px"} color="black" />
          </CustomIconButton>

          <CustomIconButton>
            <Sort size={"20px"} color="black" />
          </CustomIconButton>

          <CustomIconButton>
            <Calendar size={"20px"} color="black" />
          </CustomIconButton>
        </HStack>
        <HStack direction={{ base: "column", md: "row" }} spaceX={".5em"}>
          <CustomButton color="white" brand="s">
            <ExportCurve size={"18px"} /> Export xlsx
          </CustomButton>

          <CustomButton color="white" brand="p">
            <AddCircle size={"18px"} /> Add Task
          </CustomButton>
        </HStack>
      </Stack>{" "}
    </>
  );
};

export default HeaderButtons;
