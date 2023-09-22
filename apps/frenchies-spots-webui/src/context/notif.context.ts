import { createContext } from "react";

import type { NotificationEntity } from "@frenchies-spots/gql";

interface NotifContextData {
  messageNotRead: number;
  notifications: NotificationEntity[];
}

const defaultContext: NotifContextData = {
  messageNotRead: 0,
  notifications: [],
};

const NotifContext = createContext<NotifContextData>(defaultContext);

export default NotifContext;
