import React, { useEffect, useState } from "react";

import io, { type Socket } from "socket.io-client";

interface UseNotifParams<T> {
  event: string;
  eventId: string;
  initEventList: T[];
  onChange?: () => void;
}

export function useSocket<TInput>(params: UseNotifParams<TInput>) {
  const { event, eventId, initEventList, onChange } = params;
  const [loading, setLoading] = useState<boolean>(false);

  const [socket, setSocket] = useState<Socket>();
  const [eventList, setEventList] = useState<TInput[]>(initEventList);

  const send = (value: TInput) => {
    socket?.emit(event, value);
  };

  useEffect(() => {
    setLoading(true);
  }, []);

  useEffect(() => {
    if (loading) {
      const newSocket = io(process.env.NEXT_PUBLIC_SOCKET_URL || "");
      setSocket(newSocket);
    }
  }, [setSocket, loading]);

  const messageListener = (value: TInput) => {
    setEventList((prev) => [...prev, value]);
    if (typeof onChange === "function") {
      onChange();
    }
  };

  useEffect(() => {
    if (loading) {
      socket?.on(`${event}:${eventId}`, messageListener);
    }

    return () => {
      socket?.off(`${event}:${eventId}`, messageListener);
    };
  }, [event, eventId, loading]);

  return { eventList, send };
}
