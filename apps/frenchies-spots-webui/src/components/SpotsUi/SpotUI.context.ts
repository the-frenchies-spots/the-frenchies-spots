import { Dispatch, createContext } from "react";

import type { SpotEntity, SpotsInput } from "@frenchies-spots/gql";
import { LazyQueryExecFunction } from "@apollo/client";
import { UseFormReturnType } from "@frenchies-spots/hooks";
import type { TCoordinate } from "@frenchies-spots/map";

export interface SpotUiContextData {
  getFilterSpots: LazyQueryExecFunction<
    {
      spots: SpotEntity[];
    },
    {
      spotsInput: SpotsInput;
    }
  > | null;
  form: UseFormReturnType<
    SpotsInput,
    (values: SpotsInput) => SpotsInput
  > | null;
  coordPoint: TCoordinate | null;
  setCoordPoint: Dispatch<React.SetStateAction<TCoordinate | null>> | null;
  isRayon: boolean;
  setIsRayon: Dispatch<React.SetStateAction<boolean>> | null;
  placeName: string;
  setPlaceName: Dispatch<React.SetStateAction<string>> | null;
  isMapMode: boolean;
  setIsMapMode: Dispatch<React.SetStateAction<boolean>> | null;
}

const defaultContext: SpotUiContextData = {
  getFilterSpots: null,
  form: null,
  coordPoint: null,
  setCoordPoint: null,
  isRayon: false,
  setIsRayon: null,
  placeName: "",
  setPlaceName: null,
  isMapMode: true,
  setIsMapMode: null,
};

export const SpotUiContext = createContext<SpotUiContextData>(defaultContext);
