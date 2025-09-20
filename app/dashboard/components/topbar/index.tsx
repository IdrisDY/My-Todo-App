import { CustomInput } from "@/components/ui/input";
import { Box } from "@chakra-ui/react";
import React from "react";

const Topbar = () => {
  return (
    <Box
      display={"flex"}
      right={0}
      left={0}
      paddingInline={"50px"}
      paddingTop={"22px"}
      position={"sticky"}
      bg={"white"}
      top={"0"}
      h={"100px"}
    >
      {/* Search Bar */}
      <CustomInput bg="cream" border="1px gray.300" variant="search" />
    </Box>
  );
};

export default Topbar;
