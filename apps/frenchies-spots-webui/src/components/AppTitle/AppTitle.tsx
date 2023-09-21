import React from "react";

import { Font, Stack, type StackProps } from "@frenchies-spots/material";

interface AppTitleProps extends StackProps {}

const AppTitle = (props: AppTitleProps) => {
  const { ...stackProps } = props;

  return (
    <Stack {...stackProps}>
      <Font variant="h1" color="white">
        Entraide
      </Font>
      <Font variant="h2" color="darkPurple" sx={{ fontSize: 40 }}>
        Partage
      </Font>
      <Font variant="h3" color="darkPurple" sx={{ fontSize: 40 }}>
        Voyage
      </Font>
    </Stack>
  );
};

export default AppTitle;
