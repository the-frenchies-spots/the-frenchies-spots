import React from "react";

import { Box, Log } from "@frenchies-spots/material";
import { ProfileEntity, SpotEntity } from "@frenchies-spots/gql";

import SpotMenu from "./SpotMenu/SpotMenu";
import { useStyles } from "./SpotsUi.styles";
import SpotFilter from "./SpotFilter/SpotFilter";
import SpotUiMode from "./SpotUiMode/SpotUiMode";
import SpotModeButton from "./SpotModeButton/SpotModeButton";
import SpotDrawer from "./SpotDrawer/SpotDrawer";
import { useSpotUi } from "../../hooks/use-spot-ui";
import { getListElement } from "../../utils";
import SpotPreview from "./Preview/SpotPreview/SpotPreview";
import ProfilePreview from "./Preview/ProfilePreview/ProfilePreview";

interface SpotsUiProps {
  spotList: SpotEntity[] | undefined;
  peopleList: ProfileEntity[] | undefined;
}

const SpotsUi = (props: SpotsUiProps) => {
  const { spotList, peopleList } = props;

  const { classes } = useStyles();

  const { currentSpotId, currentProfileId } = useSpotUi();
  const currentSpot = getListElement<SpotEntity>(
    spotList || [],
    `${currentSpotId}`
  );

  const currentProfile = getListElement<ProfileEntity>(
    peopleList || [],
    `${currentProfileId}`
  );

  return (
    <Box w="100%" h="100%" className={classes.container}>
      <SpotMenu className={classes.spotMenu} />
      <SpotUiMode spotList={spotList} peopleList={peopleList} />
      <SpotModeButton className={classes.buttonMode} />
      <SpotDrawer>
        {currentSpot ? (
          <SpotPreview spot={currentSpot} h={250} />
        ) : currentProfile ? (
          <ProfilePreview profile={currentProfile} h={250} />
        ) : (
          <SpotFilter />
        )}
      </SpotDrawer>
    </Box>
  );
};

export default SpotsUi;
