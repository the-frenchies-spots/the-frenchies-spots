import { useContext } from "react";

import { FrSpotsMapContext } from "../../FrSpotsMap.ctx";

export const useFrSpotsMapContext = () => {
  const ctx = useContext(FrSpotsMapContext);
  if (!ctx) {
    throw new Error("Sorry but no context found.");
  }
  return ctx;
};

export const useLocationCtx = () => {
  const { location, refreshLocation } = useFrSpotsMapContext();
  return { location, refreshLocation };
};
