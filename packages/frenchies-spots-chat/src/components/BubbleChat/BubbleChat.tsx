import React from "react";

import { type BoxProps } from "@frenchies-spots/material";

import { ChatMessageInput } from "../../hooks";
import { Avatar } from "../Avatar/Avatar";
import Bubble from "../Bubble/Bubble";

export interface BubbleChatProps extends Omit<BoxProps, "position"> {
  message: ChatMessageInput;
  isParticipant: boolean;
}

export const BubbleChat = (props: BubbleChatProps) => {
  const { message: chatMessage, isParticipant, ...other } = props;

  return (
    <>
      {!!isParticipant && <Avatar />}
      <Bubble
        message={chatMessage.message}
        isParticipant={isParticipant}
        {...other}
      />
      {!isParticipant && <Avatar />}
    </>
  );
};
