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
  Font,
} from "@frenchies-spots/material";
import React from "react";
import { useStyles } from "./StatusBar.styles";
import { useLocationCtx } from "@frenchies-spots/map";
import { truncate } from "@frenchies-spots/utils";
import { useAuth } from "../../hooks/use-auth";
import { useRouter } from "next/router";
import Notifiction from "../Notification/Notifiction";

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
          <Font variant="subtitle2">Actuellement à</Font>
          <Group align="center">
            <IconMapPinFilled size="16" style={{ color: "#3F3979" }} />
            {location ? (
              <Font variant="h5" truncate="end">
                {truncate(location?.value, 30)}
              </Font>
            ) : (
              <Loader />
            )}
          </Group>
        </Stack>
      )}

      {user && <Notifiction isMapMode={isMapMode} />}

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
