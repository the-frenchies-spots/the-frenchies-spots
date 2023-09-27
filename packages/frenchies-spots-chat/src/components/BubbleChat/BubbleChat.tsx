import React from "react";

import { type BoxProps } from "@frenchies-spots/material";

import { ChatMessageInput } from "../../hooks";
import { Avatar } from "../Avatar/Avatar";
import Bubble from "../Bubble/Bubble";
import { ProfileChatEntity } from "@frenchies-spots/gql";

export interface BubbleChatProps extends Omit<BoxProps, "position"> {
  message: ChatMessageInput;
  isParticipant: boolean;
  otherParticipant: ProfileChatEntity | undefined;
}

export const BubbleChat = (props: BubbleChatProps) => {
  const {
    message: chatMessage,
    isParticipant,
    otherParticipant,
    ...other
  } = props;

  return (
    <>
      {!!isParticipant && (
        <Avatar
          src={
            otherParticipant?.profile?.photoUrl ||
            otherParticipant?.profile?.avatarUrl ||
            undefined
          }
          sx={
            !otherParticipant?.profile?.photoUrl
              ? {
                  border: "1px solid #3F3979",
                }
              : {}
          }
        />
      )}
      <Bubble
        message={chatMessage.message}
        isParticipant={isParticipant}
        {...other}
      />
    </>
  );
};
