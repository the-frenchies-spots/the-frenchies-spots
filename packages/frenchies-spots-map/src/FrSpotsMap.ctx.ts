import { createContext } from "react";

import type { TLocation } from "./hooks";

export interface FrSpotsMapContextData {
  location: TLocation | null;
  refreshLocation: (() => void) | null;
}

export const defaultContext: FrSpotsMapContextData = {
  location: null,
  refreshLocation: null,
};

export const FrSpotsMapContext =
  createContext<FrSpotsMapContextData>(defaultContext);

FrSpotsMapContext.displayName = "@frenchies-spots/map/FrSpotsMapContext";
