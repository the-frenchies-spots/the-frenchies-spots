import React, { useEffect, useState } from "react";
import io, { type Socket } from "socket.io-client";

interface UseChatParams {
  event: string;
}

export const useChat = (params: UseChatParams = { event: "message" }) => {
  const { event } = params;

  const [socket, setSocket] = useState<Socket>();
  const [messages, setMessages] = useState<string[]>([]);

  const send = (value: string) => {
    socket?.emit(event, value);
  };

  useEffect(() => {
    const newSocket = io(process.env.NEXT_PUBLIC_SOCKET_URL || "");
    setSocket(newSocket);
  }, [setSocket]);

  const messageListener = (message: string) => {
    setMessages((prev) => [...prev, message]);
  };

  useEffect(() => {
    socket?.on(event, messageListener);
    return () => {
      socket?.off(event, messageListener);
    };
  }, [messageListener]);

  return { messages, send };
};
