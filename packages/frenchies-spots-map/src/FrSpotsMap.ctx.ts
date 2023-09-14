import { createContext } from "react";

import type { TLocation } from "./hooks";

interface FrSpotsMapContextData {
  location: TLocation | null;
}

const defaultContext: FrSpotsMapContextData = {
  location: null,
};

export const FrSpotsMapContext =
  createContext<FrSpotsMapContextData>(defaultContext);
