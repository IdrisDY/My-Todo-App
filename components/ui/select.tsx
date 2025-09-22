import { Box, NativeSelect } from "@chakra-ui/react";
import { SelectOption } from "../types";

export default function RoundedSelect({
  options,
  onChange,
}: {
  options: SelectOption[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <Box minW={{ base: "100px", lg: "150px" }} w="fit-content">
      <NativeSelect.Root
        size="sm"
        padding={".1em"}
        border="1px solid"
        borderColor="primary"
        rounded="full"
        // focusBorderColor="blue.400"
      >
        <NativeSelect.Field onChange={onChange} placeholder="Select option">
          {options.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </NativeSelect.Field>
        <NativeSelect.Indicator />
      </NativeSelect.Root>
    </Box>
  );
}
