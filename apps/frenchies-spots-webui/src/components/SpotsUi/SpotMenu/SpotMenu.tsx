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
  onOpenFilter?: () => void;
}

const SpotMenu = (props: SpotMenuProps) => {
  const { onOpenFilter, onChange, ...other } = props;

  const handleModeClick = (displayMode: SPOTS_DISPLAY_MODE) => {
    if (typeof onChange === "function") {
      onChange(displayMode);
    }
  };

  return (
    <Container size="md" mt="xl" {...other}>
      <Stack>
        <Group grow>
          <TextInput />
          <Button w={20} onClick={onOpenFilter}>
            Filtre
          </Button>
        </Group>

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
