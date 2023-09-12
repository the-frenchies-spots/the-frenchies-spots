import { SpotsInput } from "@frenchies-spots/gql";
import { UseFormReturnType } from "@frenchies-spots/hooks";

export type TSpotFilterForm = UseFormReturnType<
  SpotsInput,
  (values: SpotsInput) => SpotsInput
>;
