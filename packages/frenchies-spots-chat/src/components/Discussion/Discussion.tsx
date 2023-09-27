import React, { useEffect, useRef } from "react";

import {
  Flex,
  ScrollArea,
  Stack,
  type StackProps,
} from "@frenchies-spots/material";

import { BubbleChat } from "../BubbleChat/BubbleChat";
import { ChatMessageInput } from "../../hooks";
import { Maybe, ProfileChatEntity } from "@frenchies-spots/gql";

export interface DiscussionProps extends StackProps {
  messages: ChatMessageInput[];
  currentProfileId: Maybe<string> | string | undefined;
  otherParticipant: ProfileChatEntity | undefined;
}

export const Discussion = (props: DiscussionProps) => {
  const { messages, currentProfileId, otherParticipant, ...stackProps } = props;

  const viewport = useRef<HTMLDivElement>(null);

  const scrollToBottom = () =>
    viewport?.current?.scrollTo({
      top: viewport?.current?.scrollHeight,
      behavior: "smooth",
    });

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <ScrollArea h="100%" viewportRef={viewport}>
      <Stack h="100%" pt="md" {...stackProps}>
        {messages.map((message, index) => {
          const isParticipant = currentProfileId !== message.profileChatId;
          return (
            <Flex
              key={index}
              gap="md"
              direction="row"
              w="100%"
              justify={isParticipant ? "start" : "end"}
            >
              <BubbleChat
                w="70%"
                otherParticipant={otherParticipant}
                isParticipant={isParticipant}
                message={message}
              />
            </Flex>
          );
        })}
      </Stack>
    </ScrollArea>
  );
};
