import React from "react";

import { SpotEntity } from "@frenchies-spots/gql";

import SpotsMapUi from "../SpotsMapUi/SpotsMapUi";
import SpotList from "../../Spots/SpotList/SpotList";
import FavoriteButton from "../../Spots/SpotButton/FavoriteButton/FavoriteButton";
import { useAuth } from "../../../hooks/use-auth";
import { Text } from "@frenchies-spots/material";
import { useSpotUi } from "../../../hooks/use-spot-ui";

interface SpotUiModeProps {
  list: SpotEntity[] | undefined;
}

const SpotUiMode = (props: SpotUiModeProps) => {
  const { list } = props;

  const { user } = useAuth();
  const { isMapMode } = useSpotUi();

  const authProfileId = user?.profile?.id;

  if (isMapMode) {
    return <SpotsMapUi list={list} />;
  }
  return (
    <SpotList list={list} mt={140}>
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
