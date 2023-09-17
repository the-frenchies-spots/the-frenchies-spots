import {
  IconBellFilled,
  IconMapPinFilled,
  IconUserSquareRounded,
} from "@frenchies-spots/icon";
import {
  Group,
  type GroupProps,
  Stack,
  ActionIcon,
  Text,
  Loader,
} from "@frenchies-spots/material";
import React from "react";
import { useStyles } from "./StatusBar.styles";
import { useLocationCtx } from "@frenchies-spots/map";
import { useSpotUi } from "../../hooks/use-spot-ui";
import { truncate } from "@frenchies-spots/utils";
import { useAuth } from "../../hooks/use-auth";
import { useRouter } from "next/router";

interface StatusBarProps extends GroupProps {
  isMapMode?: boolean;
}

const StatusBar = (props: StatusBarProps) => {
  const { isMapMode = false, ...groupProps } = props;

  const router = useRouter();
  const { location } = useLocationCtx();
  const { classes } = useStyles(isMapMode);
  const { user } = useAuth();

  return (
    <Group
      position={isMapMode ? "right" : "apart"}
      align="center"
      h={60}
      {...groupProps}
    >
      {!isMapMode && (
        <Stack spacing={5}>
          <Text sx={{ visibility: "visible" }}>Actuellement à</Text>
          <Group align="center">
            <IconMapPinFilled size="16" />
            {location ? (
              <Text truncate="end">{truncate(location?.value, 30)}</Text>
            ) : (
              <Loader />
            )}
          </Group>
        </Stack>
      )}

      {user && (
        <ActionIcon className={classes.actionIcon}>
          <IconBellFilled />
        </ActionIcon>
      )}

      {!user && (
        <ActionIcon
          className={classes.actionIcon}
          onClick={() => router.push("/sign-in")}
        >
          <IconUserSquareRounded />
        </ActionIcon>
      )}
    </Group>
  );
};

export default StatusBar;
