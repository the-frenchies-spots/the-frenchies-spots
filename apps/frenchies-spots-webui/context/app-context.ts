import { createContext } from "react";
import { TCoordinate, Tag } from "../types";

interface AppContextData {
  currentLocation: TCoordinate | undefined;
  currentPlace: string | undefined;
  onTagChange: (data: Tag[]) => void;
  tags: Tag[] | undefined;
}

const defaultContext: AppContextData = {
  currentLocation: undefined,
  currentPlace: undefined,
  tags: undefined,
  onTagChange: (data: Tag[]) => undefined,
};

const AppContext = createContext<AppContextData>(defaultContext);

export default AppContext;
