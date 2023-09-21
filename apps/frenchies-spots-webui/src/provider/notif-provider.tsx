import React, { ReactNode, useEffect } from "react";

import { useQuery } from "@apollo/client";
import { client } from "../utils/client.gql";
import { NotificationEntity, queries } from "@frenchies-spots/gql";

import NotifContext from "./../context/notif.context";

interface NotifProviderProps {
  children: ReactNode;
}

const NotifProvider = ({ children }: NotifProviderProps) => {
  const { data } = useQuery<{
    chatMessagesNotRead: number;
    notifications: NotificationEntity[];
  }>(queries.appNotification, {
    // pollInterval: 2000,
  });

  useEffect(() => {
    client.query({ query: queries.chats });
  }, [data]);

  return (
    <NotifContext.Provider
      value={{
        messageNotRead: data?.chatMessagesNotRead || 0,
        notifications: data?.notifications || [],
      }}
    >
      {children}
    </NotifContext.Provider>
  );
};

export default NotifProvider;
