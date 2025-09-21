import CustomIconButton from "@/components/ui/icon-button";
import { fc } from "@/components/ui/snippet";
import { Box, HStack, Text } from "@chakra-ui/react";
import { Flag, More } from "iconsax-reactjs";
import React, { FC } from "react";

type PriorityProps = {
  text: string;
  onClick?: () => void;
};

const PriorityItem: FC<{ item: PriorityProps; showMoreButton?: boolean }> = ({
  item,
  showMoreButton = true,
}) => {
  let resolvedColor: string;
  switch (item.text) {
    case "Important":
      resolvedColor = "#F6BE38";
      break;
    case "Urgent":
      resolvedColor = "#FF515D";
      break;
    case "Medium":
      resolvedColor = "#75C5C1";
      break;
    default:
      resolvedColor = "gray";
  }

  return (
    <Box {...fc}>
      <HStack>
        <Flag variant="Bold" color={resolvedColor} />
        <Text>{item.text}</Text>
      </HStack>
      {showMoreButton && (
        <CustomIconButton border={"none"} onClick={item.onClick}>
          <More size={"20px"} color="black" />
        </CustomIconButton>
      )}{" "}
    </Box>
  );
};

export default PriorityItem;
