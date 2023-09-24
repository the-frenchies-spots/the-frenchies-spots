/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import {
  ActionIcon,
  Container,
  Group,
  Stack,
  type StackProps,
} from "@frenchies-spots/material";
import {
  IconCurrentLocation,
  IconMinus,
  IconPlus,
} from "@frenchies-spots/icon";
import { useStyles } from "./SpotUiParamBar.styles";
import { useLocationCtx } from "@frenchies-spots/map";
import { useSpotUi } from "../../../hooks/use-spot-ui";
import { getZoomByRadius } from "../../../utils/get-zoom-by-radius";

interface SpotUiParamBarProps extends StackProps {}

const SpotUiParamBar = (props: SpotUiParamBarProps) => {
  const { ...other } = props;

  const { classes } = useStyles();

  const { refreshLocation } = useLocationCtx();
  const { form, setViewPort, coordPoint } = useSpotUi();
  const handlePositionClick = () => {
    if (typeof refreshLocation === "function") {
      refreshLocation();
    }
  };

  const handlePlusClick = () => {
    form.setValues((prev) => ({
      ...prev,
      point: { ...prev.point, maxDistance: prev.point.maxDistance + 1000 },
    }));
  };

  const handleMinusClick = () => {
    form.setValues((prev) => {
      if (prev.point.maxDistance - 1000 <= 0) return prev;
      return {
        ...prev,
        point: { ...prev.point, maxDistance: prev.point.maxDistance - 1000 },
      };
    });
  };

  useEffect(() => {
    if (form?.values?.point?.maxDistance) {
      const zoom = getZoomByRadius(form?.values?.point?.maxDistance);
      setViewPort((prev) => {
        if (coordPoint) {
          return {
            ...prev,
            zoom,
            latitude: coordPoint.lat,
            longitude: coordPoint.lng,
          };
        }
        return { ...prev, zoom };
      });
    }
  }, [form?.values?.point?.maxDistance]);

  return (
    <Stack {...other} className={classes.container} pr="md">
      <ActionIcon
        className={classes.locationButton}
        onClick={handlePositionClick}
      >
        <IconCurrentLocation color="black" />
      </ActionIcon>
      <Stack spacing={0}>
        <ActionIcon className={classes.zoomButton} onClick={handlePlusClick}>
          <IconPlus color="black" />
        </ActionIcon>
        <ActionIcon className={classes.zoomButton} onClick={handleMinusClick}>
          <IconMinus color="black" />
        </ActionIcon>
      </Stack>
    </Stack>
  );
};

export default SpotUiParamBar;
