import React from "react";

import { Box, Button, Group, Text } from "@frenchies-spots/material";

import { Toaster, toast } from "react-hot-toast";
import { styles } from "./ComfirmPopup.styles";

interface showConfirmationParams {
  label?: string;
  comfirmLabel?: string;
  cancelLabel?: string;
  onComfirm?: () => void;
  onCancel?: () => void;
}

export const showConfirmation = (params?: showConfirmationParams) => {
  const handleComfirm = () => {
    if (typeof params?.onComfirm === "function") {
      params.onComfirm();
    }
    toast.remove();
  };

  const handleCancel = () => {
    if (typeof params?.onCancel === "function") {
      params.onCancel();
    }
    toast.remove();
  };

  return toast.custom(
    () => (
      <Box sx={styles.boxPopup} p="md" className="confirmation-toast">
        <Text>
          {params?.label ? params.label : "Êtes-vous sûr de cette action ?"}
        </Text>
        <Group position="right" mt="md">
          <Button onClick={handleComfirm}>
            {params?.comfirmLabel ? params.comfirmLabel : "Oui"}
          </Button>
          <Button onClick={handleCancel}>
            {params?.cancelLabel ? params.cancelLabel : "Non"}
          </Button>
        </Group>
      </Box>
    ),
    { duration: Infinity }
  );
};

const ComfirmPopup = () => {
  return <Button onClick={() => showConfirmation()}>Comfirm</Button>;
};

export default ComfirmPopup;
