import React, { useCallback, useEffect, useState } from "react";
import { ChatMessageInput, ChatUi } from "@frenchies-spots/chat";
import {
  ChatEntity,
  ChatMessageEntity,
  MutationSendChatMessageArgs,
  ProfileEntity,
  QueryChatByPkArgs,
  mutations,
  queries,
} from "@frenchies-spots/gql";
import { useQuery, useMutation } from "@apollo/client";
import { Container, LoadingOverlay } from "@frenchies-spots/material";
import { useRouter } from "next/router";

interface ChatPageProps {
  chatId: string;
  profile: ProfileEntity;
}

const ChatPage = (props: ChatPageProps) => {
  const { chatId, profile } = props;

  const router = useRouter();
  const [messages, setMessages] = useState<ChatMessageInput[]>([]);

  const [markAsRead] = useMutation(mutations.markChatMessageAsRead, {
    variables: { chatId },
    refetchQueries: [queries.chats, queries.chatMessagesNotRead],
  });

  const { data, loading, refetch } = useQuery<
    { chatByPk: ChatEntity },
    QueryChatByPkArgs
  >(queries.chatByPk, {
    variables: { chatId },
    pollInterval: 500,
  });

  const [send] = useMutation<
    { sendChatMessage: ChatMessageEntity },
    MutationSendChatMessageArgs
  >(mutations.sendChatMessage);

  const handleSend = useCallback(
    (val: string) => {
      if (data) {
        const participant = data?.chatByPk?.participants?.find(
          (participant) => participant?.profile?.id === profile?.id
        );
        if (participant && data?.chatByPk?.id && participant?.id) {
          const sendChatMessageInput = {
            message: val,
            chatId: data.chatByPk.id,
            profileChatId: participant.id,
          };
          send({ variables: { sendChatMessageInput } });
          setMessages((prev) => [...prev, sendChatMessageInput]);
          refetch();
        }
      }
    },
    [data, send, profile, refetch]
  );

  useEffect(() => {
    if (data?.chatByPk?.chatMessages) {
      markAsRead();
      setMessages(
        data?.chatByPk?.chatMessages.map((chatMessage) => ({
          chatId: chatMessage.chatId,
          profileChatId: chatMessage.profileChatId,
          message: chatMessage.message,
        })) || []
      );
    }
  }, [data?.chatByPk.chatMessages, markAsRead]);

  return (
    <Container size="md" h="100%">
      <LoadingOverlay visible={loading} overlayBlur={2} />
      {data?.chatByPk?.participants && profile && (
        <ChatUi
          send={handleSend}
          currentProfileId={profile.id}
          onCancel={() => router.back()}
          participants={data.chatByPk.participants}
          messages={messages}
        />
      )}
    </Container>
  );
};

export default ChatPage;
