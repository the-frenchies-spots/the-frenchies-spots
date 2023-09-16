import React, { useEffect, useState } from "react";

import { ChatEntity, ChatMessageEntity } from "@frenchies-spots/gql";
import io, { type Socket } from "socket.io-client";

interface UseChatParams {
  event: string;
}
export interface ChatMessageInput {
  chatId: ChatEntity["id"];
  profileChatId: ChatMessageEntity["profileChatId"];
  message: ChatMessageEntity["message"];
}

export const useChat = (params: UseChatParams = { event: "chat" }) => {
  const { event } = params;

  const [chatId, setChatId] = useState<string>("");
  const [socket, setSocket] = useState<Socket>();
  const [messages, setMessages] = useState<ChatMessageInput[]>([]);

  const send = (value: ChatMessageInput) => {
    socket?.emit(event, value);
  };

  useEffect(() => {
    const newSocket = io(process.env.NEXT_PUBLIC_SOCKET_URL || "");
    setSocket(newSocket);
  }, [setSocket]);

  const messageListener = (value: ChatMessageInput) => {
    setMessages((prev) => [...prev, value]);
  };

  useEffect(() => {
    socket?.on(`${event}:${chatId}`, messageListener);
    return () => {
      socket?.off(`${event}:${chatId}`, messageListener);
    };
  }, [chatId]);

  return { messages, setMessages, send, setChatId };
};
