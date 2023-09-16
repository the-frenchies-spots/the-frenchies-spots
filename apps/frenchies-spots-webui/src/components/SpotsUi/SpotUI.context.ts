import { Dispatch, createContext } from "react";

import type {
  ProfileEntity,
  QueryProfilesArgs,
  SpotEntity,
  SpotsInput,
} from "@frenchies-spots/gql";
import { LazyQueryExecFunction } from "@apollo/client";
import { UseFormReturnType } from "@frenchies-spots/hooks";
import type { TCoordinate, TViewport } from "@frenchies-spots/map";

const franceViewPort: TViewport = {
  bearing: 0,
  latitude: 46.851348046414415,
  longitude: 3.2371168456396333,
  padding: { top: 0, bottom: 0, left: 0, right: 0 },
  pitch: 0,
  zoom: 4.144539557736261,
};

export type TForm = UseFormReturnType<
  SpotsInput,
  (values: SpotsInput) => SpotsInput
>;
export interface SpotUiContextData {
  getFilterSpots: LazyQueryExecFunction<
    {
      spots: SpotEntity[];
    },
    {
      spotsInput: SpotsInput;
    }
  > | null;
  getPeoples: LazyQueryExecFunction<
    {
      profiles: ProfileEntity[];
    },
    QueryProfilesArgs
  > | null;
  form: TForm | null;
  coordPoint: TCoordinate | null;
  setCoordPoint: Dispatch<React.SetStateAction<TCoordinate | null>> | null;
  isRayon: boolean;
  setIsRayon: Dispatch<React.SetStateAction<boolean>> | null;
  placeName: string;
  setPlaceName: Dispatch<React.SetStateAction<string>> | null;
  isMapMode: boolean;
  setIsMapMode: Dispatch<React.SetStateAction<boolean>> | null;
  viewport: TViewport;
  onViewportChange: Dispatch<React.SetStateAction<TViewport>> | null;
  drawerOpened: boolean;
  openDrawer: (() => void) | null;
  closeFilter: (() => void) | null;
  currentSpotId: string | null;
  setCurrentSpotId: Dispatch<React.SetStateAction<string | null>> | null;
  currentProfileId: string | null;
  setCurrentProfileId: Dispatch<React.SetStateAction<string | null>> | null;
  isFilter: boolean;
  setIsFilter: Dispatch<React.SetStateAction<boolean>> | null;
}

const defaultContext: SpotUiContextData = {
  currentSpotId: null,
  setCurrentSpotId: null,
  getFilterSpots: null,
  getPeoples: null,
  form: null,
  coordPoint: null,
  setCoordPoint: null,
  isRayon: false,
  setIsRayon: null,
  placeName: "",
  setPlaceName: null,
  isMapMode: true,
  setIsMapMode: null,
  viewport: franceViewPort,
  onViewportChange: null,
  drawerOpened: false,
  openDrawer: null,
  closeFilter: null,
  isFilter: false,
  setIsFilter: null,
  currentProfileId: null,
  setCurrentProfileId: null,
};

export const SpotUiContext = createContext<SpotUiContextData>(defaultContext);
