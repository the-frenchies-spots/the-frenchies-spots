import React, { ReactElement } from "react";
import { Log } from "@frenchies-spots/material";
import { PageLayout } from "../../components/Layout/PageLayout/PageLayout";
import { useRouter } from "next/router";
import { useAuth } from "./../../hooks/use-auth";
import { GuardLayout } from "../../components/Layout/GuardLayout/GuardLayout";
import ChatPage from "../../components/Chat/ChatPage/ChatPage";

const ChatId = () => {
  const router = useRouter();

  const { chatId } = router.query;
  const { profile } = useAuth();

  const isChatId = typeof chatId === "string";

  if (!isChatId || !profile) return <Log value={{ chatId, profile }} />;
  return <ChatPage chatId={chatId} profile={profile} />;
};

export default ChatId;

ChatId.getLayout = function getLayout(page: ReactElement) {
  return (
    <GuardLayout isProtected>
      <PageLayout opacity={0.6}>{page}</PageLayout>
    </GuardLayout>
  );
};
