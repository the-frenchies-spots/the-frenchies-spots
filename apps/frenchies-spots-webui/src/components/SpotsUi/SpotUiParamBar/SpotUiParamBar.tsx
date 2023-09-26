/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect } from "react";
import { ActionIcon, Stack, type StackProps } from "@frenchies-spots/material";
import {
  IconCurrentLocation,
  IconMinus,
  IconPlus,
} from "@frenchies-spots/icon";
import { useStyles } from "./SpotUiParamBar.styles";
import { useLocationCtx } from "@frenchies-spots/map";
import { useSpotUi } from "../../../hooks/use-spot-ui";
import { getZoomByRadius } from "../../../utils/get-zoom-by-radius";
import { SpotsInput } from "@frenchies-spots/gql";
import { debounce } from "lodash";

interface SpotUiParamBarProps extends StackProps {}

const SpotUiParamBar = (props: SpotUiParamBarProps) => {
  const { ...other } = props;

  const { classes } = useStyles();
  const { location } = useLocationCtx();

  const {
    form,
    setViewPort,
    coordPoint,
    setCoordPoint,
    onFilterSpot,
    onFilterPeople,
  } = useSpotUi();

  const handlePositionClick = () => {
    if (location?.coordinates) {
      setCoordPoint(location.coordinates);
      setViewPort((prev) => {
        if (coordPoint) {
          return {
            ...prev,
            latitude: location.coordinates.lat,
            longitude: location.coordinates.lng,
          };
        }
        return { ...prev };
      });
    }
  };

  const handleDebounceChangeFilter = useCallback(
    debounce((spotInput: SpotsInput) => {
      onFilterSpot(spotInput);
      onFilterPeople({ point: spotInput.point });
    }, 700),
    []
  );

  const handlePlusClick = () => {
    form.setValues((prev) => {
      const maxDistance = prev.point.maxDistance + 1000;
      const point = { ...prev.point, maxDistance };
      handleDebounceChangeFilter({ ...prev, point });
      return { ...prev, point };
    });
  };

  const handleMinusClick = () => {
    form.setValues((prev) => {
      const maxDistance = prev.point.maxDistance - 1000;
      if (maxDistance - 1000 <= 0) return prev;
      const point = { ...prev.point, maxDistance };
      handleDebounceChangeFilter({ ...prev, point });
      return { ...prev, point };
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
      {form?.values?.point && (
        <Stack spacing={0}>
          <ActionIcon className={classes.zoomButton} onClick={handlePlusClick}>
            <IconPlus color="black" />
          </ActionIcon>
          <ActionIcon className={classes.zoomButton} onClick={handleMinusClick}>
            <IconMinus color="black" />
          </ActionIcon>
        </Stack>
      )}
    </Stack>
  );
};

export default SpotUiParamBar;
