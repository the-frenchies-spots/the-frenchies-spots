import React, { useEffect, useRef } from "react";

import { ChatEntity } from "@frenchies-spots/gql";
import {
  Flex,
  ScrollArea,
  Stack,
  type StackProps,
} from "@frenchies-spots/material";

import { BubbleChat } from "../BubbleChat/BubbleChat";
import { Avatar } from "../Avatar/Avatar";

export interface DiscussionProps extends StackProps {
  messages: string[];
}

export const Discussion = (props: DiscussionProps) => {
  const { messages, ...stackProps } = props;

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
          return (
            <Flex key={index} gap="md" direction="row">
              {!!(index % 2) && <Avatar />}
              <BubbleChat
                message={message}
                position={index % 2 ? "left" : "right"}
                sx={{
                  flexGrow: 1,
                  background: index % 2 ? "white" : "#B68973",
                  color: index % 2 ? "purple" : "white",
                }}
              />
              {!(index % 2) && <Avatar />}
            </Flex>
          );
        })}
      </Stack>
    </ScrollArea>
  );
};
