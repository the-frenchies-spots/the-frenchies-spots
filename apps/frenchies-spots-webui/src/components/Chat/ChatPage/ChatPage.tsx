import { ChatUi, ChatMessageInput, useSocket } from "@frenchies-spots/chat";
import { ProfileChatEntity, ProfileEntity } from "@frenchies-spots/gql";
import { Container } from "@frenchies-spots/material";
import { useRouter } from "next/router";
import React, { useCallback } from "react";

interface ChatPageProps {
  chatId: string;
  onChange: () => void;
  messages: ChatMessageInput[];
  participants: ProfileChatEntity[];
  profile: ProfileEntity;
}

const ChatPage = (props: ChatPageProps) => {
  const {
    chatId,
    profile,
    messages: initMessage,
    participants,
    onChange,
  } = props;

  const { eventList, send } = useSocket<ChatMessageInput>({
    event: "chat",
    eventId: chatId,
    initEventList: initMessage,
    onChange,
  });
  const router = useRouter();

  const handleSend = useCallback(
    (val: string) => {
      const participant = participants?.find(
        (participant) => participant?.profile?.id === profile?.id
      );
      if (participant) {
        send({
          message: val,
          chatId,
          profileChatId: participant?.id,
        });
        onChange();
      }
    },
    [send, profile, onChange, chatId, participants]
  );

  return (
    <Container size="md" h="100%">
      {participants && profile && (
        <ChatUi
          send={handleSend}
          currentProfileId={profile.id}
          participants={participants}
          messages={eventList}
          onCancel={() => router.back()}
        />
      )}
    </Container>
  );
};

export default ChatPage;
