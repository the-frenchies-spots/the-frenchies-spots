import React, { useState } from "react";

import {
  Button,
  Flex,
  type FlexProps,
  TextInput,
} from "@frenchies-spots/material";

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
      <TextInput
        sx={{ flexGrow: 1 }}
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.currentTarget.value)}
      />
      <Button onClick={handleClick}>Send</Button>
    </Flex>
  );
};

export default MessageInput;
