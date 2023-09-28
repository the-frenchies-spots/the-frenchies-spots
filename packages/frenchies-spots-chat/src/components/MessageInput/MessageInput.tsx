import React, { useState } from "react";

import {
  Button,
  Flex,
  type FlexProps,
  TextInput,
  InputForm,
  Box,
  PrimaryButton,
} from "@frenchies-spots/material";
import { ChatMessageInput } from "../../hooks";
import { IconSend } from "@frenchies-spots/icon";

interface MessageInputProps extends FlexProps {
  send: (val: string) => void;
}

const MessageInput = (props: MessageInputProps) => {
  const { send, ...flexProps } = props;

  const [message, setMessage] = useState<string>("");

  const handleClick = () => {
    send(message);
    setMessage("");
  };

  return (
    <Flex gap="md" {...flexProps}>
      <Box sx={{ flexGrow: 1 }}>
        <InputForm
          sx={{ width: "100%", borderColor: "#3F3979" }}
          placeholder="Tape ton message..."
          value={message}
          onChange={(e) => setMessage(e.currentTarget.value)}
        />
      </Box>
      <PrimaryButton onClick={handleClick}>
        <IconSend color="white" />
      </PrimaryButton>
    </Flex>
  );
};

export default MessageInput;
