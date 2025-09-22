import React from "react";
import Sidebar from "./components/sidebar";
import Topbar from "./components/topbar";
import { Container, Box } from "@chakra-ui/react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      display={{ base: "block", md: "grid" }}
      gridTemplateColumns={{
        base: "none",
        md: "20% 80%",
      }}
      h="100vh"
      overflowX={"hidden"}
    >
      {/* sidebar */}
      <Box
        as="aside"
        gridColumn={{ md: "1 / 2" }}
        overflowY={"auto"}
        position={"relative"}
        w={{ base: "100%", md: "100%", lg: "100%" }}
      >
        <Sidebar />
      </Box>

      <Box
        as="main"
        bg={"gray.200"}
        gridColumn={{ md: "2 / 3" }}
        w={{ base: "100%", md: "100%", lg: "100%" }}
        position={"relative"}
        overflowY={"auto"}
        minH={"100vh"}
      >
        <Topbar />
        <Container padding={["1em", "50px"]}>{children}</Container>
      </Box>
    </Box>
  );
};

export default Layout;
