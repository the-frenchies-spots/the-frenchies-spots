import React from "react";

import { Box, Log } from "@frenchies-spots/material";
import { SpotEntity } from "@frenchies-spots/gql";

import SpotMenu from "./SpotMenu/SpotMenu";
import { useStyles } from "./SpotsUi.styles";
import SpotFilter from "./SpotFilter/SpotFilter";
import SpotUiMode from "./SpotUiMode/SpotUiMode";
import SpotModeButton from "./SpotModeButton/SpotModeButton";
import SpotDrawer from "./SpotDrawer/SpotDrawer";
import { useSpotUi } from "../../hooks/use-spot-ui";
import { getListElement } from "../../utils";
import SpotPreview from "./Preview/SpotPreview/SpotPreview";

interface SpotsUiProps {
  list: SpotEntity[] | undefined;
}

const SpotsUi = (props: SpotsUiProps) => {
  const { list } = props;

  const { classes } = useStyles();

  const { currentSpotId } = useSpotUi();
  const currentSpot = getListElement<SpotEntity>(
    list || [],
    `${currentSpotId}`
  );

  return (
    <Box w="100%" h="100%" className={classes.container}>
      <SpotMenu className={classes.spotMenu} />
      <SpotUiMode list={list} />
      <SpotModeButton className={classes.buttonMode} />
      <SpotDrawer>
        {currentSpot ? (
          <SpotPreview spot={currentSpot} h={250} />
        ) : (
          <SpotFilter />
        )}
      </SpotDrawer>
    </Box>
  );
};

export default SpotsUi;
