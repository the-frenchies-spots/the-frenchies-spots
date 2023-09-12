import React from "react";

import { Box } from "@frenchies-spots/material";
import { SpotEntity } from "@frenchies-spots/gql";

import SpotMenu from "./SpotMenu/SpotMenu";
import { useStyles } from "./SpotsUi.styles";
import SpotFilter from "./SpotFilter/SpotFilter";
import SpotUiMode from "./SpotUiMode/SpotUiMode";
import SpotModeButton from "./SpotModeButton/SpotModeButton";

interface SpotsUiProps {
  list: SpotEntity[] | undefined;
}

const SpotsUi = (props: SpotsUiProps) => {
  const { list } = props;

  const { classes } = useStyles();

  return (
    <Box w="100%" h="100%" className={classes.container}>
      <SpotMenu className={classes.spotMenu} />
      <SpotUiMode list={list} />
      <SpotModeButton className={classes.buttonMode} />
      <SpotFilter />
    </Box>
  );
};

export default SpotsUi;
