import React, { Dispatch } from "react";

import { SpotEntity } from "@frenchies-spots/gql";
import type { TCoordinate, TLocation, TViewport } from "@frenchies-spots/map";

import SpotsMapUi from "../SpotsMapUi/SpotsMapUi";
import SpotList from "../../Spots/SpotList/SpotList";
import FavoriteButton from "../../Spots/SpotButton/FavoriteButton/FavoriteButton";
import { useAuth } from "../../../hooks/use-auth";
import { Text } from "@frenchies-spots/material";
import { TSpotFilterForm } from "../../../types";

interface SpotUiModeProps {
  spotList: SpotEntity[] | undefined;
  userPosition: TCoordinate | null;
  isMapMode: boolean;
  form: TSpotFilterForm;
  viewport: TViewport;
  isRayon: boolean;
  coordPoint: TLocation["coordinates"] | null;
  onViewportChange: Dispatch<React.SetStateAction<TViewport>>;
}

const SpotUiMode = (props: SpotUiModeProps) => {
  const {
    onViewportChange,
    viewport,
    spotList,
    userPosition,
    isMapMode,
    isRayon,
    form,
    coordPoint,
  } = props;
  const { user } = useAuth();

  const authProfileId = user?.profile?.id;

  if (isMapMode) {
    return (
      <SpotsMapUi
        list={spotList}
        coordPoint={coordPoint}
        userPosition={userPosition}
        form={form}
        isRayon={isRayon}
        viewport={viewport}
        onViewportChange={onViewportChange}
      />
    );
  }
  return (
    <SpotList list={spotList} mt={140}>
      {({ spotId, favoriteId, profileId }) => (
        <>
          {authProfileId !== profileId ? (
            <FavoriteButton favorite={{ spotId, favoriteId }} />
          ) : (
            <Text>Yours</Text>
          )}
        </>
      )}
    </SpotList>
  );
};

export default SpotUiMode;
