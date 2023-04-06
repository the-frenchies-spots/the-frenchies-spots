import { createContext } from "react";
import { TCoordinate } from "../types";

interface AppContextData {
  currentLocation: TCoordinate | undefined;
  currentPlace: string | undefined;
}

const defaultContext: AppContextData = {
  currentLocation: undefined,
  currentPlace: undefined,
};

const AppContext = createContext<AppContextData>(defaultContext);

export default AppContext;
