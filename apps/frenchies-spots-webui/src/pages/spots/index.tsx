import React, { ReactElement, useState } from "react";

import { useQuery } from "@apollo/client";
import { Box, Button, Log, createStyles } from "@frenchies-spots/material";
import { queries, SpotEntity, SpotsInput } from "@frenchies-spots/gql";
import { useGeoloc } from "@frenchies-spots/map";

import SpotsUi from "@/components/SpotsUi/SpotsUi";
import { SPOTS_DISPLAY_MODE } from "@/enum/spots-display-mode.enum";
import { PageLayout } from "./../../components/Layout/PageLayout/PageLayout";
import NavigationLayout from "../../components/Layout/NavigationLayout/NavigationLayout";
import SpotMenu from "../../components/SpotsUi/SpotMenu/SpotMenu";

export const useStyles = createStyles((theme) => ({
  container: { position: "relative" },
  spotMenu: {
    zIndex: 1,
    position: "absolute",
    width: "100%",
    top: 0,
    left: 0,
    right: 0,
  },
}));

const SpotsPage = () => {
  const [displayMode, setDisplayMode] = useState<SPOTS_DISPLAY_MODE>(
    SPOTS_DISPLAY_MODE.MAP_MODE
  );

  const { classes } = useStyles();
  const { userPosition } = useGeoloc();

  const { data } = useQuery<
    { spots: SpotEntity[] },
    { spotsInput: SpotsInput }
  >(queries.spots, {
    variables: { spotsInput: { searchValue: "" } },
  });

  return (
    <Box w="100%" h="100%">
      <SpotMenu className={classes.spotMenu} onChange={setDisplayMode} />
      <SpotsUi
        mode={displayMode}
        userPosition={userPosition}
        spotList={data?.spots}
      />
    </Box>
  );
};

SpotsPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <PageLayout>
      <NavigationLayout>{page}</NavigationLayout>
    </PageLayout>
  );
};

export default SpotsPage;
