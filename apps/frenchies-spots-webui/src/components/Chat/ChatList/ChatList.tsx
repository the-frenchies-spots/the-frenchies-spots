import React, { useState } from "react";

import { UserChatResponse, queries } from "@frenchies-spots/gql";
import ChatCard from "../ChatCard/ChatCard";
import { useAuth } from "../../../hooks/use-auth";
import { InputForm, Stack } from "@frenchies-spots/material";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import LoadingOverlay from "../../LoadingOverlay/LoadingOverlay";
import { IconSearch } from "@frenchies-spots/icon";
import { getOtherParticipant } from "../../../utils/get-other-participant";

interface ChatListProps {}

const ChatList = (props: ChatListProps) => {
  const router = useRouter();
  const { profile } = useAuth();

  const [searchKey, setSearchKey] = useState<string>("");

  const { data, loading } = useQuery<{ chats: UserChatResponse[] }>(
    queries.chats,
    {
      notifyOnNetworkStatusChange: true,
      fetchPolicy: "no-cache",
    }
  );

  const handleChatClick = (chatId: string) => {
    router.push(`/chat/${chatId}`);
  };

  if (!profile || loading)
    return <LoadingOverlay visible={true} overlayBlur={2} />;
  return (
    <Stack>
      <InputForm
        placeholder="Rechercher"
        onChange={(e) => setSearchKey(e.currentTarget.value)}
        sx={{ borderColor: "#A480A6" }}
        isShadow={false}
        icon={<IconSearch style={{ color: "#A480A6" }} size={20} />}
      />
      {data?.chats
        ?.filter((_chat) => {
          const other = getOtherParticipant(
            _chat?.participants || [],
            profile.id
          );
          const current = other?.length > 0 ? other[0] : undefined;
          return current?.profile?.pseudo?.includes(searchKey);
        })
        ?.map((chat, index) => (
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
