import React from "react";

import { ProfileEntity, SpotEntity } from "@frenchies-spots/gql";

import SpotsMapUi from "../SpotsMapUi/SpotsMapUi";
import SpotList from "../../Spots/SpotList/SpotList";
import FavoriteButton from "../../Spots/SpotButton/FavoriteButton/FavoriteButton";
import { useAuth } from "../../../hooks/use-auth";
import { Box, Text } from "@frenchies-spots/material";
import { useSpotUi } from "../../../hooks/use-spot-ui";
import ProfileList from "../../Profile/ProfileList/ProfileList";

interface SpotUiModeProps {
  spotList: SpotEntity[] | undefined;
  peopleList: ProfileEntity[] | undefined;
}

const SpotUiMode = (props: SpotUiModeProps) => {
  const { spotList, peopleList } = props;

  const { user } = useAuth();
  const { isMapMode } = useSpotUi();

  const authProfileId = user?.profile?.id;

  if (isMapMode) {
    return <SpotsMapUi spotList={spotList} peopleList={peopleList} />;
  }
  return (
    <Box pt={200} h="100%">
      {peopleList && <ProfileList profileList={peopleList} />}
      {/* <SpotList list={spotList}>
        {({ spotId, favoriteId, profileId }) => (
          <>
            {authProfileId !== profileId ? (
              <FavoriteButton favorite={{ spotId, favoriteId }} />
            ) : (
              <Text>Yours</Text>
            )}
          </>
        )}
      </SpotList> */}
    </Box>
  );
};

export default SpotUiMode;
