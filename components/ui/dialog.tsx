import {
  Box,
  Button,
  CloseButton,
  Dialog,
  DialogOpenChangeDetails,
  DialogRootProps,
  Portal,
} from "@chakra-ui/react";
import { ReactNode } from "react";

type BaseDialogProps = {
  triggerComponent?: React.ReactNode;
  title?: string;
  children: ReactNode;
  footer?: ReactNode;
  open?: boolean;
  onOpenChange?: (details: DialogOpenChangeDetails) => void;
  size?: DialogRootProps["size"];
};

export const CustomDialog = ({
  triggerComponent,
  title,
  children,
  onOpenChange,
  footer,
  open,
  size = { mdDown: "full", md: "lg" },
}: BaseDialogProps) => {
  return (
    <Dialog.Root
      onOpenChange={onOpenChange}
      open={open}
      placement={"center"}
      size={size}
    >
      {triggerComponent && (
        <Dialog.Trigger w={"full"} asChild>
          <Box w={"full"} asChild>
            {triggerComponent}
          </Box>
        </Dialog.Trigger>
      )}{" "}
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content paddingInline={"2.5em"} paddingBlock={"4em"}>
            <Dialog.Header>
              <Dialog.Title>{title}</Dialog.Title>
            </Dialog.Header>

            <Dialog.Body>{children}</Dialog.Body>

            {footer && <Dialog.Footer>{footer}</Dialog.Footer>}

            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};
