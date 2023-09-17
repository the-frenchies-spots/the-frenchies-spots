import React from "react";

import { ChatEntity, queries } from "@frenchies-spots/gql";
import ChatCard from "../ChatCard/ChatCard";
import { useAuth } from "../../../hooks/use-auth";
import { LoadingOverlay, Stack } from "@frenchies-spots/material";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";

interface ChatListProps {}

const ChatList = (props: ChatListProps) => {
  const router = useRouter();
  const { profile } = useAuth();

  const { data, loading } = useQuery<{ chats: ChatEntity[] }>(queries.chats);

  const handleChatClick = (chatId: string) => {
    router.push(`/chat/${chatId}`);
  };

  if (!profile || loading)
    return <LoadingOverlay visible={true} overlayBlur={2} />;
  return (
    <Stack>
      {data?.chats.map((chat, index) => (
        <ChatCard
          key={index}
          chat={chat}
          profileId={profile.id}
          onClick={handleChatClick}
        />
      ))}
    </Stack>
  );
};

export default ChatList;
