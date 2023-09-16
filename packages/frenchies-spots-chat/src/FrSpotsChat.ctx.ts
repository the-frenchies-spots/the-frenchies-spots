import { createContext } from "react";

interface FrSpotsChatContextData {}

const defaultContext: FrSpotsChatContextData = {};

export const FrSpotsChatContext =
  createContext<FrSpotsChatContextData>(defaultContext);
