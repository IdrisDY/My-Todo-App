"use client";
import CustomButton from "@/components/ui/button";
import CustomIconButton from "@/components/ui/icon-button";
import { CustomInput } from "@/components/ui/input";
import {
  Box,
  HStack,
  Text,
  useBreakpointValue,
  Menu,
  IconButton,
  VStack,
} from "@chakra-ui/react";
import { ArrowDown2, Link1, Notification, More } from "iconsax-reactjs";
import React from "react";

const Topbar = () => {
  const icons = [
    "/images/yellow.png",
    "/images/blue-green.png",
    "/images/3cx.png",
    "/images/E.png",
  ];

  const showAll = useBreakpointValue({ base: false, lg: true });

  return (
    <Box
      display={"flex"}
      right={0}
      left={0}
      paddingInline={"20px"}
      paddingBlock={"16px"}
      position={"sticky"}
      bg={"white"}
      alignItems={"center"}
      justifyContent={"space-between"}
      top={"0"}
      h={"80px"}
      gap={"16px"}
      zIndex={10}
    >
      {/* Search Bar */}
      <Box h={"fit"} maxW={"220px"} flexShrink={0}>
        <CustomInput bg="cream" border="1px gray.300" variant="search" />
      </Box>

      {/* icon buttons */}
      {showAll ? (
        <HStack h={"fit"} spacingX={"10px"} as={"ul"}>
          {icons.map((item) => (
            <CustomIconButton key={item}>
              <img
                style={{ height: "18px", width: "20px" }}
                src={item}
                alt={`icon button${item.split(".")[0]}`}
              />
            </CustomIconButton>
          ))}
        </HStack>
      ) : (
        <Menu.Root>
          <Menu.Trigger asChild aria-label="More">
            <CustomIconButton variant={"ghost"}>
              <More size={"20px"} color="black" />
            </CustomIconButton>
          </Menu.Trigger>
          <Menu.Positioner>
            <Menu.Content>
              {icons.map((item) => (
                <Menu.Item value={item} key={item}>
                  <img
                    style={{ height: "18px", width: "20px", marginRight: 8 }}
                    src={item}
                    alt={`icon button${item.split(".")[0]}`}
                  />
                  {item.split("/").pop()?.split(".")[0]}
                </Menu.Item>
              ))}
            </Menu.Content>
          </Menu.Positioner>
        </Menu.Root>
      )}

      {/* Buttons */}
      {showAll ? (
        <Box h={"fit"} alignItems={"center"} display={"flex"}>
          <HStack padding={"4px"} borderRadius={"md"} h={"fit"} bg={"cream"}>
            <CustomButton brand="s">Melding maken</CustomButton>
            <CustomButton brand="p">VIM</CustomButton>
            <CustomButton brand="p">LMS</CustomButton>
            <CustomButton brand="p">BHV</CustomButton>
            <CustomButton brand="p">DataLek</CustomButton>
          </HStack>
          <CustomIconButton maxH={"40px"} h={"full"}>
            <Link1 color="gray" size={"25px"} />
          </CustomIconButton>
        </Box>
      ) : (
        <Menu.Root>
          <Menu.Trigger asChild aria-label="More">
            <button>
              <More size={"20px"} color="black" />
            </button>
          </Menu.Trigger>
          <Menu.Positioner>
            <Menu.Content>
              <Menu.Item value="btn-2">
                <CustomButton brand="s">Melding maken</CustomButton>
              </Menu.Item>
              <Menu.Item value="btn-2">
                <CustomButton brand="p">VIM</CustomButton>
              </Menu.Item>
              <Menu.Item value="btn-2">
                <CustomButton brand="p">LMS</CustomButton>
              </Menu.Item>
              <Menu.Item value="btn-2">
                <CustomButton brand="p">BHV</CustomButton>
              </Menu.Item>

              <Menu.Item value="btn-2">
                <CustomButton brand="p">DataLek</CustomButton>
              </Menu.Item>
              <Menu.Item value="btn-2">
                <CustomIconButton maxH={"40px"} h={"full"}>
                  <Link1 color="gray" size={"25px"} />
                </CustomIconButton>
              </Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
        </Menu.Root>
      )}

      {/* Profile */}
      <Box display={"flex"} gap={"10px"} alignItems={"center"}>
        <CustomIconButton h="full" w={"40px"} maxH={"40px"} isRound>
          <Notification color="gray" size={"20px"} />
        </CustomIconButton>

        {/* Profile picture */}
        <Box
          display={"flex"}
          bg={"cream"}
          gap={"16px"}
          justifyContent={"space-between"}
          alignItems={"center"}
          w={"full"}
          padding={["4px", "10px", "4px", "4px"]}
          borderRadius={"30px"}
        >
          <Box alignItems={"center"} gap={"10px"} display={"flex"}>
            <img src={"/images/profile.png"} alt="profile picture" />
            <Text
              as="span"
              whiteSpace={"nowrap"}
              fontWeight={600}
              color={"black"}
            >
              Hi Paul
            </Text>
          </Box>
          <button style={{ marginLeft: "12px" }}>
            <ArrowDown2 size={"20px"} color="gray" variant="Bold" />
          </button>
        </Box>
      </Box>
    </Box>
  );
};

export default Topbar;
