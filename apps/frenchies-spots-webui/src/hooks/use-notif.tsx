import { useContext } from "react";

import NotifContext from "../context/notif.context";

export const useNotif = () => {
  const ctx = useContext(NotifContext);
  if (!ctx) {
    throw new Error("Sorry but no context found.");
  }
  return ctx;
};
