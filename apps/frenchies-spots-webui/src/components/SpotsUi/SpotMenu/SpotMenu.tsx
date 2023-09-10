import React from "react";
import {
  Stack,
  TextInput,
  Group,
  Button,
  Container,
} from "@frenchies-spots/material";
import type { ContainerProps } from "@frenchies-spots/material";

import { SPOTS_DISPLAY_MODE } from "@/enum/spots-display-mode.enum";

interface SpotMenuProps extends Omit<ContainerProps, "onChange"> {
  onChange?: (displayMode: SPOTS_DISPLAY_MODE) => void;
}

const SpotMenu = (props: SpotMenuProps) => {
  const { onChange, ...other } = props;

  const handleModeClick = (displayMode: SPOTS_DISPLAY_MODE) => {
    if (typeof onChange === "function") {
      onChange(displayMode);
    }
  };

  return (
    <Container size="md" mt="xl" {...other}>
      <Stack>
        <TextInput />
        <Group grow>
          <Button onClick={() => handleModeClick(SPOTS_DISPLAY_MODE.MAP_MODE)}>
            Tout
          </Button>
          <Button
            onClick={() => handleModeClick(SPOTS_DISPLAY_MODE.SPOTS_MODE)}
          >
            Spots
          </Button>
          <Button
            onClick={() => handleModeClick(SPOTS_DISPLAY_MODE.SPOTS_MODE)}
          >
            Entraide
          </Button>
        </Group>
      </Stack>
    </Container>
  );
};

export default SpotMenu;
