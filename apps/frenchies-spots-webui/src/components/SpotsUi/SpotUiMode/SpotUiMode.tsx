import React from "react";

import { ProfileEntity, SpotEntity } from "@frenchies-spots/gql";

import SpotsMapUi from "../SpotsMapUi/SpotsMapUi";
import SpotList from "../../Spots/SpotList/SpotList";
import FavoriteButton from "../../Spots/SpotButton/FavoriteButton/FavoriteButton";
import { useAuth } from "../../../hooks/use-auth";
import { Box, Text } from "@frenchies-spots/material";
import { useSpotUi } from "../../../hooks/use-spot-ui";
import ProfileList from "../../Profile/ProfileList/ProfileList";
import { filterListMode } from "../../../enum";

interface SpotUiModeProps {
  spotList: SpotEntity[] | undefined;
  peopleList: ProfileEntity[] | undefined;
  uiMode: filterListMode;
}

const SpotUiMode = (props: SpotUiModeProps) => {
  const { spotList, peopleList, uiMode } = props;

  const { user } = useAuth();
  const { isMapMode } = useSpotUi();

  const authProfileId = user?.profile?.id;

  if (isMapMode) {
    return <SpotsMapUi spotList={spotList} peopleList={peopleList} />;
  }
  return (
    <Box pt={200} h="100%">
      {uiMode === filterListMode.PEOPLE && peopleList && (
        <ProfileList profileList={peopleList} />
      )}
      {uiMode === filterListMode.SPOT && (
        <SpotList list={spotList}>
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
      )}
    </Box>
  );
};

export default SpotUiMode;
