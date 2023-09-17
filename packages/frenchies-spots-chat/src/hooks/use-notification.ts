import React, { useEffect, useState } from "react";

import io, { type Socket } from "socket.io-client";

interface UseNotifParams {
  event: string;
  onChange?: () => void;
  profileId: string;
}

export interface NotificationInput {
  profileId: string;
  isRead: boolean;
  content: Record<string, unknown>;
  type: string;
  subject: string;
}

export const useNotification = (params: UseNotifParams) => {
  const { event, profileId, onChange } = params;

  const [socket, setSocket] = useState<Socket>();
  const [notifications, setNotifications] = useState<NotificationInput[]>([]);

  const send = (value: NotificationInput) => {
    socket?.emit(event, value);
  };

  useEffect(() => {
    const newSocket = io(process.env.NEXT_PUBLIC_SOCKET_URL || "");
    setSocket(newSocket);
  }, [setSocket]);

  const messageListener = (value: NotificationInput) => {
    setNotifications((prev) => [...prev, value]);
    if (typeof onChange === "function") {
      onChange();
    }
  };

  useEffect(() => {
    socket?.on(`${event}:${profileId}`, messageListener);
    return () => {
      socket?.off(`${event}:${profileId}`, messageListener);
    };
  }, [profileId]);

  return { notifications, setNotifications, send };
};
