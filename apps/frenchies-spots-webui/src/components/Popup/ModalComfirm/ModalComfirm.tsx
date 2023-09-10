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
  onComfirm?: MouseEventHandler<HTMLDivElement>;
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

  const handleComfirm: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    if (typeof onComfirm === "function") {
      onComfirm(e as any);
    }
    close();
  };

  const handleCancel = () => {
    if (typeof onCancel === "function") {
      onCancel();
    }
    close();
  };

  return (
    <>
      <Modal {...modalProps} opened={opened} onClose={close}>
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
