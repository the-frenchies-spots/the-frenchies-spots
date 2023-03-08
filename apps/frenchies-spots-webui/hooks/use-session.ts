import React, { useMemo } from "react";
import { TOKEN_STORAGE_KEY } from "../utils";

const useSession = () => {
  // const token = useMemo(
  //   () => localStorage.getItem(TOKEN_STORAGE_KEY) || "{}",
  //   [localStorage]
  // );

  return { token: "" };
};

export default useSession;
