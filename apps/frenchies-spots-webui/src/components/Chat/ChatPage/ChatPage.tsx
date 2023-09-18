import React, { useCallback } from "react";
import { ChatUi } from "@frenchies-spots/chat";
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
        if (participant) {
          send({
            variables: {
              sendChatMessageInput: {
                message: val,
                chatId: data?.chatByPk?.id,
                profileChatId: participant?.id,
              },
            },
          });
          refetch();
        }
      }
    },
    [data, send, profile, refetch]
  );

  return (
    <Container size="md" h="100%">
      <LoadingOverlay visible={loading} overlayBlur={2} />
      {data?.chatByPk?.participants && profile && (
        <ChatUi
          send={handleSend}
          currentProfileId={profile.id}
          participants={data.chatByPk.participants}
          messages={data?.chatByPk.chatMessages.map((chatMessage) => ({
            chatId: chatMessage.chatId,
            profileChatId: chatMessage.profileChatId,
            message: chatMessage.message,
          }))}
          onCancel={() => router.back()}
        />
      )}
    </Container>
  );
};

export default ChatPage;
