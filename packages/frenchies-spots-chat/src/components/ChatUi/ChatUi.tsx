import React from "react";

import { Flex } from "@frenchies-spots/material";

import { Discussion } from "../Discussion/Discussion";
import MessageInput from "../MessageInput/MessageInput";
import NavChat from "../NavChat/NavChat";

export interface ChatUiProps {
  send: (val: string) => void;
  messages: string[];
  onCancel?: () => void;
}

export const ChatUi = (props: ChatUiProps) => {
  const { send, onCancel, messages } = props;

  return (
    <Flex direction="column" h="100%">
      <NavChat onCancel={onCancel} />
      <Discussion messages={messages} sx={{ flexGrow: 1 }} />
      <MessageInput send={send} my="md" />
    </Flex>
  );
};
