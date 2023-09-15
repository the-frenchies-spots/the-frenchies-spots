import React, { ReactElement } from "react";

import { Container } from "@frenchies-spots/material";
import { ChatUi, useChat } from "@frenchies-spots/chat";

import { PageLayout } from "../../components/Layout/PageLayout/PageLayout";
import { useRouter } from "next/router";

const ChatId = () => {
  const { messages, send } = useChat({ event: "message" });

  const router = useRouter();

  return (
    <Container size="md" h="100%">
      <ChatUi
        send={send}
        messages={messages}
        onCancel={() => router.push("/chat")}
      />
    </Container>
  );
};

export default ChatId;

ChatId.getLayout = function getLayout(page: ReactElement) {
  return <PageLayout opacity={0.6}>{page}</PageLayout>;
};
