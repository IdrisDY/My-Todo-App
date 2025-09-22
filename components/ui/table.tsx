import {
  Box,
  ButtonGroup,
  IconButton,
  Pagination,
  Table,
  Text,
} from "@chakra-ui/react";
import {
  ArrowLeft,
  ArrowLeft2,
  ArrowRight,
  ArrowRight2,
} from "iconsax-reactjs";
import { useState } from "react";
import { fc } from "./snippet";
import { CustomInput } from "./input";
import RoundedSelect from "./select";
import { SelectOption } from "../types";

type Column<T> = {
  key: keyof T | string;
  header: string;
  render?: (row: T) => React.ReactNode;
};

type CustomTableProps<T> = {
  columns: Column<T>[];
  data: T[];
  variant?: "line" | "outline";
  size?: "sm" | "md" | "lg";
};

export function CustomTable<T extends { id: string | number }>({
  columns,
  data,
  variant = "outline",
  size = "sm",
}: CustomTableProps<T>) {
  const [page, setPage] = useState(1);
  const options: SelectOption[] = [
    {
      label: "5",
      value: 5,
    },
    {
      label: "10",
      value: 10,
    },
  ];
  return (
    <Box
      borderRadius={"base"}
      border={variant === "outline" ? "1px solid" : ""}
      borderColor={"gray.300"}
    >
      <Table.ScrollArea>
        <Table.Root
          borderRadius={"base"}
          border={"0"}
          size={size}
          variant={variant}
        >
          <Table.Header>
            <Table.Row>
              {columns?.map((col) => (
                <Table.ColumnHeader
                  paddingRight={"2.5em"}
                  paddingLeft={"1em"}
                  paddingBlock={"1.75em"}
                  borderRight={
                    columns[columns.length - 1].key !== col.key
                      ? "1px solid"
                      : ""
                  }
                  borderColor={"gray.300"}
                  key={col.key as string}
                >
                  {col.header}
                </Table.ColumnHeader>
              ))}
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {data?.map?.((row) => (
              <Table.Row key={row.id}>
                {columns?.map?.((col) => (
                  <Table.Cell
                    paddingRight={"2.5em"}
                    paddingLeft={"1em"}
                    paddingBlock={"1.75em"}
                    key={col.key as string}
                  >
                    {col.render
                      ? col.render(row)
                      : (row[col.key as keyof T] as any)}
                  </Table.Cell>
                ))}
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Table.ScrollArea>
      {/* Pagination Container */}
      <Box
        {...fc}
        paddingBottom={"1.5em"}
        alignItems={{ base: "center", lg: "space-between" }}
        flexDirection={{ base: "column", lg: "row" }}
      >
        <Box
          bg="cream"
          maxW={{ base: "50%", lg: "30%" }}
          minW={"fit-content"}
          rounded={"1.85em"}
          my="1.75em"
          ml={"1.75em"}
          {...fc}
          paddingInline="1.25em"
          paddingBlock={".7em"}
        >
          {/* Pagination Buttons */}
          <Pagination.Root
            w={"full"}
            count={data.length * 5}
            pageSize={5}
            page={1}
          >
            <ButtonGroup
              w="full"
              justifyContent={"space-between"}
              variant="ghost"
              size="sm"
              wrap="wrap"
            >
              <IconButton gap={"0"} variant={"ghost"}>
                <ArrowLeft2 color="black" />
                <ArrowLeft2
                  style={{
                    marginLeft: "-.5em",
                  }}
                  color="black"
                />
              </IconButton>

              <Pagination.PrevTrigger asChild>
                <IconButton>
                  <ArrowLeft2 color="black" />
                </IconButton>
              </Pagination.PrevTrigger>

              <Pagination.Items
                render={(item) => {
                  const isSelected = item.value == page;
                  return (
                    <IconButton
                      bg={isSelected ? "primary" : "transparent"}
                      border={isSelected ? "none" : "1px solid"}
                      color={isSelected ? "white" : "primary"}
                      rounded={"2xl"}
                      variant={{ base: "ghost", _selected: "solid" }}
                      onClick={() => setPage(item.value)}
                    >
                      {item.value}
                    </IconButton>
                  );
                }}
              />

              <Pagination.NextTrigger asChild>
                <IconButton>
                  <ArrowRight2 color="black" />
                </IconButton>
              </Pagination.NextTrigger>

              <IconButton gap={"0"} variant={"ghost"}>
                <ArrowRight2 color="black" />
                <ArrowRight2
                  style={{
                    marginLeft: "-.5em",
                  }}
                  color="black"
                />
              </IconButton>
            </ButtonGroup>
          </Pagination.Root>
        </Box>
        {/* Rows Per Page */}

        {/*  */}
        <Box
          display="flex"
          gap=".7em"
          justifyContent={"center"}
          alignItems={"center"}
          minW={{ base: "100%", lg: "30%" }}
        >
          <Text fontWeight={600} whiteSpace={{ base: "wrap", lg: "nowrap" }}>
            {" "}
            Rows Per Page:
          </Text>
          <RoundedSelect options={options} />
        </Box>
      </Box>
    </Box>
  );
}
