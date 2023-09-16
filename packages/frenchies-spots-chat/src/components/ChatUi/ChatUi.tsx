import React from "react";

import { Flex, Log } from "@frenchies-spots/material";

import { Discussion } from "../Discussion/Discussion";
import MessageInput from "../MessageInput/MessageInput";
import NavChat from "../NavChat/NavChat";
import { ChatMessageInput } from "../../hooks";
import { ProfileChatEntity } from "@frenchies-spots/gql";

export interface ChatUiProps {
  send: (val: string) => void;
  participants: ProfileChatEntity[];
  messages: ChatMessageInput[];
  currentProfileId: string;
  onCancel?: () => void;
}

export const ChatUi = (props: ChatUiProps) => {
  const { send, onCancel, currentProfileId, participants, messages } = props;

  const loginParticipant = participants.find(
    (participant) => participant.profileId === currentProfileId
  );

  return (
    <Flex direction="column" h="100%">
      <NavChat
        onCancel={onCancel}
        participants={participants.filter(
          (participants) => participants.profileId !== currentProfileId
        )}
      />
      {loginParticipant && (
        <Discussion
          messages={messages}
          currentProfileId={loginParticipant.id}
          sx={{ flexGrow: 1 }}
        />
      )}

      <MessageInput send={send} my="md" />
    </Flex>
  );
};
