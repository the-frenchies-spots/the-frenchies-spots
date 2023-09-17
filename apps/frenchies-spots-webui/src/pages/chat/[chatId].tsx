import React, { ReactElement, useCallback, useEffect } from "react";

import { Container, LoadingOverlay } from "@frenchies-spots/material";
import { ChatUi, useChat } from "@frenchies-spots/chat";

import { PageLayout } from "../../components/Layout/PageLayout/PageLayout";
import { useRouter } from "next/router";

import { useLazyQuery } from "@apollo/client";
import { ChatEntity, QueryChatByPkArgs, queries } from "@frenchies-spots/gql";
import { useAuth } from "./../../hooks/use-auth";
import { GuardLayout } from "../../components/Layout/GuardLayout/GuardLayout";

const ChatId = () => {
  const router = useRouter();
  const { chatId } = router.query;
  const { profile } = useAuth();

  const [getChat, { data, loading, refetch }] = useLazyQuery<
    { chatByPk: ChatEntity },
    QueryChatByPkArgs
  >(queries.chatByPk);

  const { messages, setMessages, send, setChatId } = useChat({
    event: "chat",
    onChange: refetch,
  });

  useEffect(() => {
    if (typeof chatId === "string") {
      setChatId(chatId);
      getChat({ variables: { chatId } }).then((response) => {
        const chat = response?.data?.chatByPk;
        if (chat) {
          setMessages(
            chat.chatMessages.map((chatMessage) => ({
              chatId: chatMessage.chatId,
              profileChatId: chatMessage.profileChatId,
              message: chatMessage.message,
            }))
          );
        }
      });
    }
  }, [chatId, getChat, setMessages, setChatId]);

  const handleSend = useCallback(
    (val: string) => {
      if (data) {
        const participant = data?.chatByPk?.participants?.find(
          (participant) => participant?.profile?.id === profile?.id
        );
        if (participant) {
          send({
            message: val,
            chatId: data?.chatByPk?.id,
            profileChatId: participant?.id,
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
          messages={messages}
          onCancel={() => router.back()}
        />
      )}
    </Container>
  );
};

export default ChatId;

ChatId.getLayout = function getLayout(page: ReactElement) {
  return (
    <GuardLayout isProtected>
      <PageLayout opacity={0.6}>{page}</PageLayout>
    </GuardLayout>
  );
};
