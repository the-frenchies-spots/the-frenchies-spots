import React from "react";

import { Box, type BoxProps, Text, Log } from "@frenchies-spots/material";
import { useStyles } from "./BubbleChat.styles";
import { ChatMessageInput } from "../../hooks";
import { Avatar } from "../Avatar/Avatar";

export interface BubbleChatProps extends Omit<BoxProps, "position"> {
  message: ChatMessageInput;
  isParticipant: boolean;
}

export const BubbleChat = (props: BubbleChatProps) => {
  const { message: chatMessage, isParticipant, className, ...other } = props;

  const { cx, classes } = useStyles({
    position: isParticipant ? "left" : "right",
  });

  return (
    <>
      {!!isParticipant && <Avatar />}
      <Box
        className={cx(classes.bubble, className)}
        p="md"
        my="md"
        sx={{
          background: isParticipant ? "white" : "#B68973",
          color: isParticipant ? "purple" : "white",
        }}
        {...other}
      >
        <Text>{chatMessage.message}</Text>
      </Box>
      {!isParticipant && <Avatar />}
    </>
  );
};
