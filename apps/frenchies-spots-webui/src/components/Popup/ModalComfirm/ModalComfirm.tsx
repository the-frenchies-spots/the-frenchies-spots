import React, { MouseEvent, MouseEventHandler, ReactNode } from "react";

import { useDisclosure } from "@frenchies-spots/hooks";
import {
  Button,
  Group,
  Modal,
  Text,
  type ModalProps,
} from "@frenchies-spots/material";

interface ModalComfirmProps
  extends Omit<ModalProps, "children" | "opened" | "onClose"> {
  children: (open: () => void) => ReactNode;
  label?: string;
  comfirmLabel?: string;
  cancelLabel?: string;
  onComfirm?: () => void;
  onCancel?: () => void;
}

const ModalComfirm = (props: ModalComfirmProps) => {
  const {
    children,
    label,
    comfirmLabel,
    cancelLabel,
    onComfirm,
    onCancel,
    ...modalProps
  } = props;

  const [opened, { open, close }] = useDisclosure(false);

  const handleComfirm: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    if (typeof onComfirm === "function") {
      onComfirm();
    }
    close();
  };

  const handleCancel: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    if (typeof onCancel === "function") {
      onCancel();
    }
    close();
  };

  return (
    <>
      <Modal
        {...modalProps}
        opened={opened}
        onClose={close}
        onClick={(e) => e.stopPropagation()}
      >
        <Text>{label || "Êtes-vous sûr de cette action ?"}</Text>
        <Group position="right" mt="md">
          <Button onClick={handleComfirm}>{comfirmLabel || "Oui"}</Button>
          <Button onClick={handleCancel}>{cancelLabel || "Non"}</Button>
        </Group>
      </Modal>
      {children(open)}
    </>
  );
};

export default ModalComfirm;
