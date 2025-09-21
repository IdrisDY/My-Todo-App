import { Table } from "@chakra-ui/react";

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
  return (
    <Table.Root borderRadius={"base"} size={size} variant={variant}>
      <Table.Header>
        <Table.Row>
          {columns?.map((col) => (
            <Table.ColumnHeader
              paddingRight={"2.5em"}
              paddingLeft={"1em"}
              paddingBlock={"1.75em"}
              borderRight={
                columns[columns.length - 1].key !== col.key ? "1px solid" : ""
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
        {data.map((row) => (
          <Table.Row key={row.id}>
            {columns.map((col) => (
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
  );
}
