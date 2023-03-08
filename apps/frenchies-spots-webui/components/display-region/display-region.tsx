import React, { useState, useEffect, useMemo } from "react";
import { Box, Typography } from "../../materials";
import { useTheme } from "../../hooks";
import { styles } from "./display-region-style";
import { getAllRegion } from "../../services";
import { TCoordinate, TRegion } from "../../types";

type DisplayRegionProps = {
  codeRegion: number;
};

export const DisplayRegion = (props: DisplayRegionProps) => {
  const { codeRegion } = props;

  const [regions, setRegions] = useState<TRegion[]>();
  const currentRegion = useMemo(() => {
    if (Array.isArray(regions)) {
      return regions.find((region) => +region.code === codeRegion);
    }
    return null;
  }, [codeRegion, regions]);

  const style = useTheme(styles);

  useEffect(() => {
    getAllRegion().then((regions) => setRegions(regions));
  }, []);

  return (
    <Typography>{currentRegion ? currentRegion.nom : "Région"}</Typography>
  );
};
