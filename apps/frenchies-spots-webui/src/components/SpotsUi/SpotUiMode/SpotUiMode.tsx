import React from "react";

import { ProfileEntity, SpotEntity } from "@frenchies-spots/gql";

import SpotsMapUi from "../SpotsMapUi/SpotsMapUi";
import SpotList from "../../Spots/SpotList/SpotList";
import FavoriteButton from "../../Spots/SpotButton/FavoriteButton/FavoriteButton";
import { useAuth } from "../../../hooks/use-auth";
import { Box, Font, Group, ScrollArea, Text } from "@frenchies-spots/material";
import { useSpotUi } from "../../../hooks/use-spot-ui";
import ProfileList from "../../Profile/ProfileList/ProfileList";
import { filterListMode } from "../../../enum";
import EditButton from "../../Spots/SpotButton/EditButton/EditButton";
import DeleteButton from "../../Spots/SpotButton/DeleteButton/DeleteButton";

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
    return (
      <SpotsMapUi uiMode={uiMode} spotList={spotList} peopleList={peopleList} />
    );
  }

  return (
    <>
      <ScrollArea h="100%" sx={{ boxSizing: "border-box" }} pt={250}>
        {uiMode === filterListMode.PEOPLE && peopleList && (
          <ProfileList profileList={peopleList} />
        )}
        {(uiMode === filterListMode.SPOT || uiMode === filterListMode.ALL) && (
          <SpotList list={spotList}>
            {({ spotId, favoriteId, profileId }) => (
              <>
                {authProfileId !== profileId ? (
                  <FavoriteButton favorite={{ spotId, favoriteId }} />
                ) : (
                  <Group>
                    <EditButton spotId={spotId} />
                    <DeleteButton spotId={spotId} />
                  </Group>
                )}
              </>
            )}
          </SpotList>
        )}
      </ScrollArea>
    </>
  );
};

export default SpotUiMode;
